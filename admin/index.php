<?php
session_start();

// Configuration simple d'authentification
$admin_username = 'admin';
$admin_password = 'mva2024'; // À changer !

// Vérification de connexion
if (!isset($_SESSION['admin_logged_in']) && $_POST['action'] !== 'login') {
    if ($_POST['action'] === 'login') {
        if ($_POST['username'] === $admin_username && $_POST['password'] === $admin_password) {
            $_SESSION['admin_logged_in'] = true;
        } else {
            $error = 'Identifiants incorrects';
        }
    }
    
    if (!isset($_SESSION['admin_logged_in'])) {
        // Afficher le formulaire de connexion
        ?>
        <!DOCTYPE html>
        <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Administration MVA Avocats</title>
            <link rel="stylesheet" href="../style.css">
            <style>
                .admin-login {
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
                }
                .login-form {
                    background: white;
                    padding: 2rem;
                    border-radius: 10px;
                    box-shadow: var(--shadow-lg);
                    width: 100%;
                    max-width: 400px;
                }
                .login-form h1 {
                    text-align: center;
                    color: var(--primary-color);
                    margin-bottom: 2rem;
                }
                .form-group {
                    margin-bottom: 1rem;
                }
                .form-group label {
                    display: block;
                    margin-bottom: 0.5rem;
                    font-weight: 600;
                }
                .form-group input {
                    width: 100%;
                    padding: 0.75rem;
                    border: 2px solid #e1e5e9;
                    border-radius: 5px;
                    font-size: 1rem;
                }
                .btn-login {
                    width: 100%;
                    padding: 1rem;
                    background: var(--primary-color);
                    color: white;
                    border: none;
                    border-radius: 5px;
                    font-size: 1rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                .btn-login:hover {
                    background: var(--accent-color);
                    transform: translateY(-2px);
                }
                .error {
                    background: #fee;
                    color: #c33;
                    padding: 1rem;
                    border-radius: 5px;
                    margin-bottom: 1rem;
                }
            </style>
        </head>
        <body>
            <div class="admin-login">
                <form class="login-form" method="POST">
                    <input type="hidden" name="action" value="login">
                    <h1>🔐 Administration MVA</h1>
                    
                    <?php if (isset($error)): ?>
                        <div class="error"><?php echo $error; ?></div>
                    <?php endif; ?>
                    
                    <div class="form-group">
                        <label for="username">Nom d'utilisateur</label>
                        <input type="text" id="username" name="username" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="password">Mot de passe</label>
                        <input type="password" id="password" name="password" required>
                    </div>
                    
                    <button type="submit" class="btn-login">Se connecter</button>
                </form>
            </div>
        </body>
        </html>
        <?php
        exit;
    }
}

// Traitement des actions d'administration
if ($_POST['action'] === 'logout') {
    session_destroy();
    header('Location: index.php');
    exit;
}

if ($_POST['action'] === 'add_article') {
    $title = trim($_POST['title']);
    $excerpt = trim($_POST['excerpt']);
    $content = trim($_POST['content']);
    $category = $_POST['category'];
    $image = $_POST['image'];
    
    if (empty($title) || empty($excerpt) || empty($content)) {
        $error = 'Tous les champs sont obligatoires';
    } else {
        // Créer le fichier de l'article
        $articleId = 'article-' . time();
        $articleData = [
            'id' => $articleId,
            'title' => $title,
            'excerpt' => $excerpt,
            'content' => $content,
            'category' => $category,
            'image' => $image,
            'date' => date('Y-m-d H:i:s'),
            'author' => 'MVA Avocats'
        ];
        
        $articlesFile = '../articles.json';
        $articles = [];
        if (file_exists($articlesFile)) {
            $articles = json_decode(file_get_contents($articlesFile), true);
        }
        
        $articles[] = $articleData;
        
        if (file_put_contents($articlesFile, json_encode($articles, JSON_PRETTY_PRINT))) {
            $success = 'Article ajouté avec succès !';
        } else {
            $error = 'Erreur lors de la sauvegarde';
        }
    }
}

if ($_POST['action'] === 'delete_comment') {
    $commentId = $_POST['comment_id'];
    $articleId = $_POST['article_id'];
    
    $commentsFile = '../comments.json';
    if (file_exists($commentsFile)) {
        $comments = json_decode(file_get_contents($commentsFile), true);
        
        if (isset($comments[$articleId])) {
            $comments[$articleId] = array_filter($comments[$articleId], function($comment) use ($commentId) {
                return $comment['id'] !== $commentId;
            });
            
            if (file_put_contents($commentsFile, json_encode($comments, JSON_PRETTY_PRINT))) {
                $success = 'Commentaire supprimé';
            }
        }
    }
}

// Charger les données
$articles = [];
$articlesFile = '../articles.json';
if (file_exists($articlesFile)) {
    $articles = json_decode(file_get_contents($articlesFile), true);
}

$comments = [];
$commentsFile = '../comments.json';
if (file_exists($commentsFile)) {
    $comments = json_decode(file_get_contents($commentsFile), true);
}

$totalComments = 0;
foreach ($comments as $articleComments) {
    $totalComments += count($articleComments);
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Administration MVA Avocats</title>
    <link rel="stylesheet" href="../style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        .admin-dashboard {
            min-height: 100vh;
            background: #f8f9fa;
        }
        .admin-header {
            background: white;
            padding: 1rem 2rem;
            box-shadow: var(--shadow-sm);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .admin-header h1 {
            color: var(--primary-color);
            margin: 0;
        }
        .admin-nav {
            display: flex;
            gap: 1rem;
        }
        .admin-nav button {
            padding: 0.5rem 1rem;
            border: none;
            background: var(--accent-color);
            color: white;
            border-radius: 5px;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .admin-nav button:hover {
            background: var(--primary-color);
        }
        .admin-content {
            padding: 2rem;
            max-width: 1200px;
            margin: 0 auto;
        }
        .admin-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-bottom: 2rem;
        }
        .admin-card {
            background: white;
            padding: 1.5rem;
            border-radius: 10px;
            box-shadow: var(--shadow-sm);
        }
        .admin-card h3 {
            color: var(--primary-color);
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        .stat-number {
            font-size: 2rem;
            font-weight: bold;
            color: var(--accent-color);
        }
        .article-form {
            background: white;
            padding: 2rem;
            border-radius: 10px;
            box-shadow: var(--shadow-sm);
            margin-bottom: 2rem;
        }
        .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
            margin-bottom: 1rem;
        }
        .form-group {
            margin-bottom: 1rem;
        }
        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 600;
        }
        .form-group input,
        .form-group textarea,
        .form-group select {
            width: 100%;
            padding: 0.75rem;
            border: 2px solid #e1e5e9;
            border-radius: 5px;
            font-size: 1rem;
        }
        .form-group textarea {
            min-height: 150px;
            resize: vertical;
        }
        .btn-primary {
            background: var(--primary-color);
            color: white;
            padding: 1rem 2rem;
            border: none;
            border-radius: 5px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .btn-primary:hover {
            background: var(--accent-color);
            transform: translateY(-2px);
        }
        .comments-list {
            background: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: var(--shadow-sm);
        }
        .comment-item {
            padding: 1rem;
            border-bottom: 1px solid #e1e5e9;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .comment-item:last-child {
            border-bottom: none;
        }
        .comment-info h4 {
            margin: 0 0 0.5rem 0;
            color: var(--primary-color);
        }
        .comment-info p {
            margin: 0;
            color: #666;
            font-size: 0.9rem;
        }
        .btn-danger {
            background: #dc3545;
            color: white;
            padding: 0.5rem 1rem;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 0.9rem;
        }
        .btn-danger:hover {
            background: #c82333;
        }
        .success {
            background: #d4edda;
            color: #155724;
            padding: 1rem;
            border-radius: 5px;
            margin-bottom: 1rem;
        }
        .error {
            background: #f8d7da;
            color: #721c24;
            padding: 1rem;
            border-radius: 5px;
            margin-bottom: 1rem;
        }
    </style>
</head>
<body>
    <div class="admin-dashboard">
        <header class="admin-header">
            <h1><i class="fas fa-gavel"></i> Administration MVA Avocats</h1>
            <nav class="admin-nav">
                <button onclick="window.open('../index.html', '_blank')">
                    <i class="fas fa-external-link-alt"></i> Voir le site
                </button>
                <form method="POST" style="display: inline;">
                    <input type="hidden" name="action" value="logout">
                    <button type="submit">
                        <i class="fas fa-sign-out-alt"></i> Déconnexion
                    </button>
                </form>
            </nav>
        </header>
        
        <main class="admin-content">
            <?php if (isset($success)): ?>
                <div class="success"><?php echo $success; ?></div>
            <?php endif; ?>
            
            <?php if (isset($error)): ?>
                <div class="error"><?php echo $error; ?></div>
            <?php endif; ?>
            
            <!-- Statistiques -->
            <div class="admin-grid">
                <div class="admin-card">
                    <h3><i class="fas fa-newspaper"></i> Articles</h3>
                    <div class="stat-number"><?php echo count($articles); ?></div>
                    <p>Articles publiés</p>
                </div>
                
                <div class="admin-card">
                    <h3><i class="fas fa-comments"></i> Commentaires</h3>
                    <div class="stat-number"><?php echo $totalComments; ?></div>
                    <p>Commentaires reçus</p>
                </div>
                
                <div class="admin-card">
                    <h3><i class="fas fa-eye"></i> Visites</h3>
                    <div class="stat-number">-</div>
                    <p>À configurer</p>
                </div>
            </div>
            
            <!-- Formulaire d'ajout d'article -->
            <div class="article-form">
                <h2><i class="fas fa-plus"></i> Ajouter un nouvel article</h2>
                
                <form method="POST">
                    <input type="hidden" name="action" value="add_article">
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="title">Titre de l'article</label>
                            <input type="text" id="title" name="title" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="category">Catégorie</label>
                            <select id="category" name="category" required>
                                <option value="">Sélectionner une catégorie</option>
                                <option value="droit-commercial">Droit Commercial</option>
                                <option value="droit-societes">Droit des Sociétés</option>
                                <option value="droit-fiscal">Droit Fiscal</option>
                                <option value="droit-social">Droit Social</option>
                                <option value="contentieux">Contentieux</option>
                                <option value="propriete-intellectuelle">Propriété Intellectuelle</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="excerpt">Résumé (extrait)</label>
                        <textarea id="excerpt" name="excerpt" required placeholder="Résumé court de l'article qui apparaîtra dans la liste..."></textarea>
                    </div>
                    
                    <div class="form-group">
                        <label for="image">Image (URL)</label>
                        <input type="url" id="image" name="image" placeholder="https://exemple.com/image.jpg">
                    </div>
                    
                    <div class="form-group">
                        <label for="content">Contenu de l'article</label>
                        <textarea id="content" name="content" required placeholder="Contenu complet de l'article en HTML..."></textarea>
                    </div>
                    
                    <button type="submit" class="btn-primary">
                        <i class="fas fa-save"></i> Publier l'article
                    </button>
                </form>
            </div>
            
            <!-- Liste des commentaires récents -->
            <div class="comments-list">
                <div style="padding: 1rem; background: var(--primary-color); color: white;">
                    <h3 style="margin: 0;"><i class="fas fa-comments"></i> Commentaires récents</h3>
                </div>
                
                <?php if (empty($comments)): ?>
                    <div style="padding: 2rem; text-align: center; color: #666;">
                        <i class="fas fa-comment-slash" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                        <p>Aucun commentaire pour le moment</p>
                    </div>
                <?php else: ?>
                    <?php 
                    $recentComments = [];
                    foreach ($comments as $articleId => $articleComments) {
                        foreach ($articleComments as $comment) {
                            $comment['articleId'] = $articleId;
                            $recentComments[] = $comment;
                        }
                    }
                    
                    // Trier par date (plus récent en premier)
                    usort($recentComments, function($a, $b) {
                        return strtotime($b['timestamp']) - strtotime($a['timestamp']);
                    });
                    
                    // Afficher les 10 plus récents
                    $recentComments = array_slice($recentComments, 0, 10);
                    ?>
                    
                    <?php foreach ($recentComments as $comment): ?>
                        <div class="comment-item">
                            <div class="comment-info">
                                <h4><?php echo htmlspecialchars($comment['name']); ?></h4>
                                <p><?php echo htmlspecialchars(substr($comment['content'], 0, 100)) . '...'; ?></p>
                                <small><?php echo date('d/m/Y H:i', strtotime($comment['timestamp'])); ?></small>
                            </div>
                            <form method="POST" style="display: inline;">
                                <input type="hidden" name="action" value="delete_comment">
                                <input type="hidden" name="comment_id" value="<?php echo $comment['id']; ?>">
                                <input type="hidden" name="article_id" value="<?php echo $comment['articleId']; ?>">
                                <button type="submit" class="btn-danger" onclick="return confirm('Supprimer ce commentaire ?')">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </form>
                        </div>
                    <?php endforeach; ?>
                <?php endif; ?>
            </div>
        </main>
    </div>
</body>
</html>
