// ===== BLOG MVA AVOCATS - JAVASCRIPT AVEC PHP =====

document.addEventListener('DOMContentLoaded', function() {
    // ===== SYSTÈME DE COMMENTAIRES AVEC PHP =====
    const commentForm = document.getElementById('commentForm');
    const commentsList = document.querySelector('.comments-list');
    const loadMoreBtn = document.getElementById('loadMoreComments');
    
    // ID de l'article actuel (à définir dans chaque page)
    const currentArticleId = document.body.dataset.articleId || 'default';

    if (commentForm) {
        commentForm.addEventListener('submit', handleCommentSubmitPHP);
    }

    // Gestion de la soumission des commentaires avec PHP
    function handleCommentSubmitPHP(e) {
        e.preventDefault();
        
        const formData = new FormData(commentForm);
        formData.append('action', 'add_comment');
        formData.append('article_id', currentArticleId);

        // Validation côté client
        const name = formData.get('name').trim();
        const email = formData.get('email').trim();
        const content = formData.get('content').trim();

        if (!name || !email || !content) {
            showNotification('Veuillez remplir tous les champs obligatoires.', 'error');
            return;
        }

        if (!isValidEmail(email)) {
            showNotification('Veuillez entrer une adresse email valide.', 'error');
            return;
        }

        if (content.length < 10) {
            showNotification('Le commentaire doit contenir au moins 10 caractères.', 'error');
            return;
        }

        // Simuler l'envoi
        commentForm.classList.add('loading');
        
        // Envoyer au serveur PHP
        fetch('comment-system.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            commentForm.classList.remove('loading');
            
            if (data.success) {
                // Ajouter le commentaire à la liste
                addCommentToListPHP(data.comment);
                
                // Réinitialiser le formulaire
                commentForm.reset();
                commentForm.classList.add('success');
                
                // Message de succès
                showNotification('Commentaire publié avec succès !', 'success');
                
                // Retirer la classe success après 3 secondes
                setTimeout(() => {
                    commentForm.classList.remove('success');
                }, 3000);
                
                // Mettre à jour le compteur
                updateCommentCount();
            } else {
                showNotification(data.message || 'Erreur lors de la publication du commentaire.', 'error');
            }
        })
        .catch(error => {
            commentForm.classList.remove('loading');
            showNotification('Erreur de connexion. Veuillez réessayer.', 'error');
            console.error('Error:', error);
        });
    }

    // Ajouter un commentaire à la liste (version PHP)
    function addCommentToListPHP(commentData) {
        const commentElement = createCommentElementPHP(commentData);
        commentsList.insertBefore(commentElement, commentsList.firstChild);
        
        // Animation d'entrée
        setTimeout(() => {
            commentElement.style.opacity = '1';
            commentElement.style.transform = 'translateY(0)';
        }, 100);
    }

    // Créer un élément de commentaire (version PHP)
    function createCommentElementPHP(commentData) {
        const commentDiv = document.createElement('div');
        commentDiv.className = 'comment';
        commentDiv.dataset.commentId = commentData.id;
        commentDiv.style.opacity = '0';
        commentDiv.style.transform = 'translateY(20px)';
        commentDiv.style.transition = 'all 0.6s ease';
        
        const timeAgo = getTimeAgo(new Date(commentData.timestamp));
        
        commentDiv.innerHTML = `
            <div class="comment-avatar">
                <img src="https://via.placeholder.com/50" alt="Avatar utilisateur">
            </div>
            <div class="comment-content">
                <div class="comment-header">
                    <h4>${escapeHtml(commentData.name)}</h4>
                    <time datetime="${commentData.timestamp}">${timeAgo}</time>
                </div>
                <p>${escapeHtml(commentData.content)}</p>
                <div class="comment-actions">
                    <button class="reply-btn" onclick="replyToComment(this)">
                        <i class="fas fa-reply"></i>
                        Répondre
                    </button>
                    <button class="like-btn" onclick="likeCommentPHP('${commentData.id}')">
                        <i class="fas fa-thumbs-up"></i>
                        <span class="like-count">${commentData.likes || 0}</span>
                    </button>
                </div>
            </div>
        `;
        
        return commentDiv;
    }

    // Gestion des likes avec PHP
    window.likeCommentPHP = function(commentId) {
        const button = document.querySelector(`[data-comment-id="${commentId}"] .like-btn`);
        const likeCount = button.querySelector('.like-count');
        
        const formData = new FormData();
        formData.append('action', 'like_comment');
        formData.append('article_id', currentArticleId);
        formData.append('comment_id', commentId);

        fetch('comment-system.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                const currentLikes = parseInt(likeCount.textContent);
                likeCount.textContent = currentLikes + 1;
                button.classList.add('liked');
                
                // Animation de like
                button.style.transform = 'scale(1.2)';
                setTimeout(() => {
                    button.style.transform = 'scale(1)';
                }, 200);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    // Charger les commentaires existants au chargement de la page
    function loadExistingComments() {
        const formData = new FormData();
        formData.append('action', 'get_comments');
        formData.append('article_id', currentArticleId);

        fetch('comment-system.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(comments => {
            if (comments.length > 0) {
                comments.forEach(comment => {
                    addCommentToListPHP(comment);
                });
                updateCommentCount();
            }
        })
        .catch(error => {
            console.error('Error loading comments:', error);
        });
    }

    // Charger les commentaires au démarrage
    if (commentsList) {
        loadExistingComments();
    }

    // ===== FONCTIONS UTILITAIRES =====
    
    // Validation email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Échapper le HTML pour la sécurité
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    // Calculer le temps écoulé
    function getTimeAgo(date) {
        const now = new Date();
        const diff = now - date;
        const minutes = Math.floor(diff / 60000);
        const hours = Math.floor(diff / 3600000);
        const days = Math.floor(diff / 86400000);
        
        if (minutes < 1) return 'À l\'instant';
        if (minutes < 60) return `Il y a ${minutes} minute${minutes > 1 ? 's' : ''}`;
        if (hours < 24) return `Il y a ${hours} heure${hours > 1 ? 's' : ''}`;
        if (days < 7) return `Il y a ${days} jour${days > 1 ? 's' : ''}`;
        return date.toLocaleDateString('fr-FR');
    }
    
    // Mettre à jour le compteur de commentaires
    function updateCommentCount() {
        const commentCount = commentsList.children.length;
        const header = document.querySelector('.comments-header h2');
        if (header) {
            header.textContent = `Commentaires (${commentCount})`;
        }
    }
    
    // Afficher les notifications
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
                <span>${message}</span>
            </div>
            <button class="notification-close" onclick="this.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        document.body.appendChild(notification);
        
        // Animation d'entrée
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
            notification.style.opacity = '1';
        }, 10);
        
        // Auto-suppression
        setTimeout(() => {
            if (notification.parentElement) {
                notification.style.transform = 'translateX(100%)';
                notification.style.opacity = '0';
                setTimeout(() => {
                    if (notification.parentElement) {
                        notification.remove();
                    }
                }, 300);
            }
        }, 5000);
    }

    // ===== PARTAGE SOCIAL =====
    const shareButtons = document.querySelectorAll('.share-btn');
    
    shareButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const platform = this.dataset.platform;
            const url = window.location.href;
            const title = document.title;
            const text = document.querySelector('.article-excerpt')?.textContent || '';
            
            shareContent(platform, url, title, text);
        });
    });

    function shareContent(platform, url, title, text) {
        let shareUrl = '';
        
        switch (platform) {
            case 'linkedin':
                shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
                break;
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
                break;
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
                break;
            case 'email':
                shareUrl = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(text + '\n\n' + url)}`;
                break;
        }
        
        if (shareUrl) {
            window.open(shareUrl, '_blank', 'width=600,height=400');
        }
    }
});
