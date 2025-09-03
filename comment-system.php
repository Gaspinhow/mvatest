<?php
// ===== SYSTÈME DE COMMENTAIRES MVA AVOCATS =====

// Configuration
$commentsFile = 'comments.json';
$maxCommentsPerArticle = 50;

// Fonction pour charger les commentaires
function loadComments($articleId) {
    global $commentsFile;
    
    if (!file_exists($commentsFile)) {
        return [];
    }
    
    $comments = json_decode(file_get_contents($commentsFile), true);
    return isset($comments[$articleId]) ? $comments[$articleId] : [];
}

// Fonction pour sauvegarder les commentaires
function saveComment($articleId, $comment) {
    global $commentsFile;
    
    $comments = [];
    if (file_exists($commentsFile)) {
        $comments = json_decode(file_get_contents($commentsFile), true);
    }
    
    if (!isset($comments[$articleId])) {
        $comments[$articleId] = [];
    }
    
    // Limiter le nombre de commentaires par article
    if (count($comments[$articleId]) >= $maxCommentsPerArticle) {
        return ['success' => false, 'message' => 'Nombre maximum de commentaires atteint'];
    }
    
    // Ajouter le nouveau commentaire
    $comment['id'] = uniqid();
    $comment['timestamp'] = date('Y-m-d H:i:s');
    $comment['likes'] = 0;
    
    $comments[$articleId][] = $comment;
    
    // Sauvegarder
    if (file_put_contents($commentsFile, json_encode($comments, JSON_PRETTY_PRINT))) {
        return ['success' => true, 'comment' => $comment];
    } else {
        return ['success' => false, 'message' => 'Erreur lors de la sauvegarde'];
    }
}

// Fonction pour liker un commentaire
function likeComment($articleId, $commentId) {
    global $commentsFile;
    
    if (!file_exists($commentsFile)) {
        return ['success' => false];
    }
    
    $comments = json_decode(file_get_contents($commentsFile), true);
    
    if (isset($comments[$articleId])) {
        foreach ($comments[$articleId] as &$comment) {
            if ($comment['id'] === $commentId) {
                $comment['likes']++;
                break;
            }
        }
        
        if (file_put_contents($commentsFile, json_encode($comments, JSON_PRETTY_PRINT))) {
            return ['success' => true];
        }
    }
    
    return ['success' => false];
}

// Traitement des requêtes AJAX
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $action = $_POST['action'] ?? '';
    
    switch ($action) {
        case 'add_comment':
            $articleId = $_POST['article_id'] ?? '';
            $name = trim($_POST['name'] ?? '');
            $email = trim($_POST['email'] ?? '');
            $content = trim($_POST['content'] ?? '');
            
            // Validation
            if (empty($name) || empty($email) || empty($content) || empty($articleId)) {
                echo json_encode(['success' => false, 'message' => 'Tous les champs sont obligatoires']);
                exit;
            }
            
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                echo json_encode(['success' => false, 'message' => 'Email invalide']);
                exit;
            }
            
            if (strlen($content) < 10) {
                echo json_encode(['success' => false, 'message' => 'Le commentaire doit contenir au moins 10 caractères']);
                exit;
            }
            
            $comment = [
                'name' => htmlspecialchars($name),
                'email' => htmlspecialchars($email),
                'content' => htmlspecialchars($content),
                'newsletter' => isset($_POST['newsletter'])
            ];
            
            $result = saveComment($articleId, $comment);
            echo json_encode($result);
            break;
            
        case 'like_comment':
            $articleId = $_POST['article_id'] ?? '';
            $commentId = $_POST['comment_id'] ?? '';
            
            if (empty($articleId) || empty($commentId)) {
                echo json_encode(['success' => false]);
                exit;
            }
            
            $result = likeComment($articleId, $commentId);
            echo json_encode($result);
            break;
            
        case 'get_comments':
            $articleId = $_POST['article_id'] ?? '';
            
            if (empty($articleId)) {
                echo json_encode([]);
                exit;
            }
            
            $comments = loadComments($articleId);
            echo json_encode($comments);
            break;
            
        default:
            echo json_encode(['success' => false, 'message' => 'Action non reconnue']);
    }
    exit;
}

// Affichage des commentaires (pour inclusion dans les pages)
function displayComments($articleId) {
    $comments = loadComments($articleId);
    
    if (empty($comments)) {
        echo '<div class="no-comments">
                <p>Aucun commentaire pour le moment. Soyez le premier à commenter !</p>
              </div>';
        return;
    }
    
    foreach ($comments as $comment) {
        $timeAgo = getTimeAgo($comment['timestamp']);
        
        echo '<div class="comment" data-comment-id="' . $comment['id'] . '">
                <div class="comment-avatar">
                    <img src="https://via.placeholder.com/50" alt="Avatar utilisateur">
                </div>
                <div class="comment-content">
                    <div class="comment-header">
                        <h4>' . htmlspecialchars($comment['name']) . '</h4>
                        <time datetime="' . $comment['timestamp'] . '">' . $timeAgo . '</time>
                    </div>
                    <p>' . htmlspecialchars($comment['content']) . '</p>
                    <div class="comment-actions">
                        <button class="reply-btn" onclick="replyToComment(this)">
                            <i class="fas fa-reply"></i>
                            Répondre
                        </button>
                        <button class="like-btn" onclick="likeComment(\'' . $comment['id'] . '\')">
                            <i class="fas fa-thumbs-up"></i>
                            <span class="like-count">' . $comment['likes'] . '</span>
                        </button>
                    </div>
                </div>
              </div>';
    }
}

// Fonction utilitaire pour calculer le temps écoulé
function getTimeAgo($timestamp) {
    $now = new DateTime();
    $commentTime = new DateTime($timestamp);
    $diff = $now->diff($commentTime);
    
    if ($diff->y > 0) {
        return 'Il y a ' . $diff->y . ' an' . ($diff->y > 1 ? 's' : '');
    } elseif ($diff->m > 0) {
        return 'Il y a ' . $diff->m . ' mois';
    } elseif ($diff->d > 0) {
        return 'Il y a ' . $diff->d . ' jour' . ($diff->d > 1 ? 's' : '');
    } elseif ($diff->h > 0) {
        return 'Il y a ' . $diff->h . ' heure' . ($diff->h > 1 ? 's' : '');
    } elseif ($diff->i > 0) {
        return 'Il y a ' . $diff->i . ' minute' . ($diff->i > 1 ? 's' : '');
    } else {
        return 'À l\'instant';
    }
}
?>
