// ===== BLOG MVA AVOCATS - JAVASCRIPT =====

document.addEventListener('DOMContentLoaded', function() {
    // ===== SYSTÈME DE COMMENTAIRES =====
    const commentForm = document.getElementById('commentForm');
    const commentsList = document.querySelector('.comments-list');
    const loadMoreBtn = document.getElementById('loadMoreComments');

    if (commentForm) {
        commentForm.addEventListener('submit', handleCommentSubmit);
    }

    // Gestion de la soumission des commentaires
    function handleCommentSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(commentForm);
        const commentData = {
            name: formData.get('name'),
            email: formData.get('email'),
            content: formData.get('content'),
            newsletter: formData.get('newsletter') === 'on',
            timestamp: new Date().toISOString()
        };

        // Validation
        if (!commentData.name || !commentData.email || !commentData.content) {
            showNotification('Veuillez remplir tous les champs obligatoires.', 'error');
            return;
        }

        // Simuler l'envoi
        commentForm.classList.add('loading');
        
        setTimeout(() => {
            // Ajouter le commentaire à la liste
            addCommentToList(commentData);
            
            // Réinitialiser le formulaire
            commentForm.reset();
            commentForm.classList.remove('loading');
            commentForm.classList.add('success');
            
            // Message de succès
            showNotification('Commentaire publié avec succès !', 'success');
            
            // Retirer la classe success après 3 secondes
            setTimeout(() => {
                commentForm.classList.remove('success');
            }, 3000);
            
            // Mettre à jour le compteur
            updateCommentCount();
            
        }, 1500);
    }

    // Ajouter un commentaire à la liste
    function addCommentToList(commentData) {
        const commentElement = createCommentElement(commentData);
        commentsList.insertBefore(commentElement, commentsList.firstChild);
        
        // Animation d'entrée
        setTimeout(() => {
            commentElement.style.opacity = '1';
            commentElement.style.transform = 'translateY(0)';
        }, 100);
    }

    // Créer un élément de commentaire
    function createCommentElement(commentData) {
        const commentDiv = document.createElement('div');
        commentDiv.className = 'comment';
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
                    <button class="like-btn" onclick="likeComment(this)">
                        <i class="fas fa-thumbs-up"></i>
                        <span class="like-count">0</span>
                    </button>
                </div>
            </div>
        `;
        
        return commentDiv;
    }

    // ===== GESTION DES LIKES =====
    window.likeComment = function(button) {
        const likeCount = button.querySelector('.like-count');
        const currentLikes = parseInt(likeCount.textContent);
        
        if (button.classList.contains('liked')) {
            button.classList.remove('liked');
            likeCount.textContent = currentLikes - 1;
        } else {
            button.classList.add('liked');
            likeCount.textContent = currentLikes + 1;
        }
    };

    // ===== GESTION DES RÉPONSES =====
    window.replyToComment = function(button) {
        const comment = button.closest('.comment');
        const commentId = comment.dataset.commentId || Date.now();
        
        // Vérifier si une zone de réponse existe déjà
        let replyForm = comment.querySelector('.reply-form');
        
        if (replyForm) {
            replyForm.remove();
            return;
        }
        
        // Créer le formulaire de réponse
        replyForm = document.createElement('div');
        replyForm.className = 'reply-form';
        replyForm.innerHTML = `
            <form class="comment-form">
                <div class="form-group">
                    <label>Votre réponse</label>
                    <textarea rows="3" placeholder="Écrivez votre réponse..." required></textarea>
                </div>
                <div class="form-actions">
                    <button type="submit" class="btn-primary">Répondre</button>
                    <button type="button" class="btn-secondary cancel-reply">Annuler</button>
                </div>
            </form>
        `;
        
        comment.appendChild(replyForm);
        
        // Gérer la soumission de la réponse
        const replyFormElement = replyForm.querySelector('form');
        replyFormElement.addEventListener('submit', function(e) {
            e.preventDefault();
            const replyContent = this.querySelector('textarea').value;
            
            if (replyContent.trim()) {
                addReplyToComment(comment, replyContent);
                replyForm.remove();
            }
        });
        
        // Gérer l'annulation
        replyForm.querySelector('.cancel-reply').addEventListener('click', function() {
            replyForm.remove();
        });
        
        // Focus sur le textarea
        replyForm.querySelector('textarea').focus();
    };

    // Ajouter une réponse à un commentaire
    function addReplyToComment(comment, replyContent) {
        const replyDiv = document.createElement('div');
        replyDiv.className = 'comment reply';
        replyDiv.style.marginLeft = '60px';
        replyDiv.style.marginTop = 'var(--spacing-md)';
        
        replyDiv.innerHTML = `
            <div class="comment-avatar">
                <img src="https://via.placeholder.com/40" alt="Avatar utilisateur">
            </div>
            <div class="comment-content">
                <div class="comment-header">
                    <h4>Vous</h4>
                    <time datetime="${new Date().toISOString()}">À l'instant</time>
                </div>
                <p>${escapeHtml(replyContent)}</p>
            </div>
        `;
        
        comment.appendChild(replyDiv);
        
        // Animation
        setTimeout(() => {
            replyDiv.style.opacity = '1';
            replyDiv.style.transform = 'translateY(0)';
        }, 100);
    }

    // ===== CHARGER PLUS DE COMMENTAIRES =====
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreComments);
    }

    function loadMoreComments() {
        loadMoreBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Chargement...';
        loadMoreBtn.disabled = true;
        
        // Simuler le chargement
        setTimeout(() => {
            // Ajouter des commentaires factices
            const fakeComments = [
                {
                    name: 'Thomas Dubois',
                    content: 'Merci pour ces informations très utiles. J\'ai une question sur les apports en nature...',
                    timestamp: new Date(Date.now() - 86400000).toISOString()
                },
                {
                    name: 'Julie Moreau',
                    content: 'Article très clair et bien structuré. Je recommande !',
                    timestamp: new Date(Date.now() - 172800000).toISOString()
                }
            ];
            
            fakeComments.forEach(comment => {
                addCommentToList(comment);
            });
            
            loadMoreBtn.innerHTML = '<i class="fas fa-plus"></i> Charger plus de commentaires';
            loadMoreBtn.disabled = false;
            
            // Masquer le bouton si plus de commentaires à charger
            if (commentsList.children.length >= 10) {
                loadMoreBtn.style.display = 'none';
            }
        }, 1000);
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

    // ===== RECHERCHE FAQ =====
    const faqSearch = document.getElementById('faq-search');
    const categoryTabs = document.querySelectorAll('.category-tab');
    const faqCategories = document.querySelectorAll('.faq-category');
    
    if (faqSearch) {
        faqSearch.addEventListener('input', filterFAQ);
    }
    
    if (categoryTabs.length > 0) {
        categoryTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const category = this.dataset.category;
                showCategory(category);
            });
        });
    }

    function filterFAQ() {
        const searchTerm = faqSearch.value.toLowerCase();
        const accordionItems = document.querySelectorAll('.accordion-item');
        
        accordionItems.forEach(item => {
            const title = item.querySelector('h3').textContent.toLowerCase();
            const content = item.querySelector('.accordion-content').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || content.includes(searchTerm)) {
                item.style.display = 'block';
                item.style.opacity = '1';
            } else {
                item.style.display = 'none';
                item.style.opacity = '0';
            }
        });
    }

    function showCategory(category) {
        // Mettre à jour les onglets
        categoryTabs.forEach(tab => {
            tab.classList.remove('active');
            if (tab.dataset.category === category) {
                tab.classList.add('active');
            }
        });
        
        // Afficher la catégorie
        faqCategories.forEach(cat => {
            if (cat.dataset.category === category) {
                cat.style.display = 'block';
                setTimeout(() => {
                    cat.style.opacity = '1';
                }, 100);
            } else {
                cat.style.opacity = '0';
                setTimeout(() => {
                    cat.style.display = 'none';
                }, 300);
            }
        });
    }

    // ===== ACCORDÉONS FAQ =====
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const item = this.closest('.accordion-item');
            const isActive = item.classList.contains('active');
            
            // Fermer tous les autres accordéons
            document.querySelectorAll('.accordion-item').forEach(accItem => {
                accItem.classList.remove('active');
            });
            
            // Ouvrir celui-ci si il n'était pas ouvert
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // ===== FONCTIONS UTILITAIRES =====
    
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

    // ===== ANALYTICS =====
    function trackEvent(eventName, eventData = {}) {
        // Envoyer les données d'analytics si Google Analytics est configuré
        if (typeof gtag !== 'undefined') {
            gtag('event', eventName, eventData);
        }
        
        // Log pour debug
        console.log('Event tracked:', eventName, eventData);
    }

    // Tracker les interactions
    document.addEventListener('click', function(e) {
        if (e.target.closest('.like-btn')) {
            trackEvent('comment_like', {
                comment_id: e.target.closest('.comment').dataset.commentId
            });
        }
        
        if (e.target.closest('.share-btn')) {
            trackEvent('article_share', {
                platform: e.target.closest('.share-btn').dataset.platform
            });
        }
        
        if (e.target.closest('.reply-btn')) {
            trackEvent('comment_reply');
        }
    });

    // Tracker le temps de lecture
    let startTime = Date.now();
    let hasTrackedReading = false;
    
    window.addEventListener('beforeunload', function() {
        const readingTime = Math.floor((Date.now() - startTime) / 1000);
        if (readingTime > 30 && !hasTrackedReading) {
            trackEvent('article_read', {
                reading_time: readingTime
            });
            hasTrackedReading = true;
        }
    });
});
