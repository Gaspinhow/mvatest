// ===== MVA AVOCATS - JAVASCRIPT SIMPLE =====

document.addEventListener('DOMContentLoaded', function() {
    // ===== NAVIGATION ACTIVE STATE =====
    // Synchroniser automatiquement la navigation active selon la page actuelle
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navigationLinks = document.querySelectorAll('.nav-links a');
    
    navigationLinks.forEach(link => {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
        
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || 
            (currentPage === '' && linkHref === 'index.html') ||
            (currentPage === 'index.html' && linkHref === 'index.html')) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });
    
    // ===== BURGER MENU ÉLÉGANT =====
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navOverlay = document.querySelector('.nav-overlay');
    const body = document.body;

    function toggleMobileMenu() {
        const isActive = navLinks.classList.contains('active');
        
        navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
        if (navOverlay) navOverlay.classList.toggle('active');
        body.classList.toggle('menu-open');
        
        // Mettre à jour l'attribut aria-expanded
        mobileMenuBtn.setAttribute('aria-expanded', !isActive);
        
        // Prévenir le scroll du body quand le menu est ouvert
        if (!isActive) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = '';
        }
    }

    function closeMobileMenu() {
        navLinks.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
        if (navOverlay) navOverlay.classList.remove('active');
        body.classList.remove('menu-open');
        body.style.overflow = '';
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
    }

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);

        // Fermer le menu en cliquant sur un lien
        const menuLinks = navLinks.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });

        // Fermer le menu en cliquant sur l'overlay
        if (navOverlay) {
            navOverlay.addEventListener('click', closeMobileMenu);
        }

        // Fermer le menu en cliquant à l'extérieur
        document.addEventListener('click', function(e) {
            if (!mobileMenuBtn.contains(e.target) && !navLinks.contains(e.target)) {
                closeMobileMenu();
            }
        });

        // Fermer le menu avec la touche Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navLinks.classList.contains('active')) {
                closeMobileMenu();
                mobileMenuBtn.focus();
            }
        });
    }

    // ===== FILTRES DES ARTICLES =====
    const filtresBtns = document.querySelectorAll('.filtre-btn');
    const articlesCards = document.querySelectorAll('.article-card');

    if (filtresBtns.length > 0 && articlesCards.length > 0) {
        filtresBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Retirer la classe active de tous les boutons
                filtresBtns.forEach(b => b.classList.remove('active'));
                // Ajouter la classe active au bouton cliqué
                this.classList.add('active');
                
                const categorie = this.getAttribute('data-categorie');
                
                // Filtrer les articles
                articlesCards.forEach(card => {
                    if (categorie === 'tous' || card.getAttribute('data-categorie') === categorie) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.classList.remove('hidden');
                            card.classList.remove('fade-out');
                        }, 100);
                    } else {
                        card.classList.add('fade-out');
                        setTimeout(() => {
                            card.classList.add('hidden');
                        }, 300);
                    }
                });
            });
        });
    }

    // ===== ANIMATIONS AU SCROLL =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observer les éléments à animer
    const animateElements = document.querySelectorAll('.service-card, .value-item, .consultation-card, .article-card, .contact-item, .expertise-card, .team-card, .tarif-card, .info-card, .mentions-section, .politique-section, .avocat-card, .approach-step, .stat-item, .domaine-section, .service-item');
    animateElements.forEach(el => observer.observe(el));

    // ===== FORMULAIRES =====
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupérer les données du formulaire
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Vérifier si c'est le formulaire de contact ou newsletter
            if (form.classList.contains('newsletter-form')) {
                // Formulaire newsletter
                const subject = 'Inscription Newsletter MVA Avocats';
                const body = `Email: ${data.email || ''}`;
                const mailtoLink = `mailto:contact@mva-avocats.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                window.location.href = mailtoLink;
                showNotification('Inscription à la newsletter envoyée !', 'success');
            } else {
                // Formulaire de contact
                const subject = 'Demande de consultation MVA Avocats';
                const body = `
Nom: ${data.nom || ''}
Prénom: ${data.prenom || ''}
Email: ${data.email || ''}
Téléphone: ${data.telephone || ''}
Domaine: ${data.domaine || ''}
Sujet: ${data.sujet || ''}
Message: ${data.message || ''}
Newsletter: ${data.newsletter ? 'Oui' : 'Non'}
                `.trim();
                
                const mailtoLink = `mailto:contact@mva-avocats.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                
                // Ouvrir le client mail
                window.location.href = mailtoLink;
                
                // Message de confirmation
                showNotification('Demande envoyée ! Vérifiez votre client mail.', 'success');
            }
        });
    });

    // ===== NOTIFICATIONS =====
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
                <span>${message}</span>
            </div>
            <button class="notification-close" onclick="this.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        document.body.appendChild(notification);
        
        // Auto-suppression après 5 secondes
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 5000);
    }

    // ===== SMOOTH SCROLL =====
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ===== BACK TO TOP =====
    const backToTopBtn = document.createElement('button');
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(backToTopBtn);

    // Afficher/masquer le bouton selon le scroll
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    // Scroll vers le haut
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ===== ANIMATIONS DES CARTES =====
    const cards = document.querySelectorAll('.expertise-card, .team-card, .article-card, .tarif-card, .info-card, .value-card, .approach-step, .service-item');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// ===== STYLES CSS POUR LES NOTIFICATIONS ET BOUTON BACK TO TOP =====
const notificationStyles = `
<style>
.notification {
    position: fixed;
    top: 20px;
    right: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    padding: 16px;
    z-index: 1000;
    max-width: 400px;
    border-left: 4px solid #1e3a8a;
    animation: slideInRight 0.3s ease-out;
}

.notification-success {
    border-left-color: #10b981;
}

.notification-content {
    display: flex;
    align-items: center;
    gap: 12px;
}

.notification-content i {
    color: #1e3a8a;
    font-size: 1.2rem;
}

.notification-success .notification-content i {
    color: #10b981;
}

.notification-close {
    position: absolute;
    top: 8px;
    right: 8px;
    background: none;
    border: none;
    cursor: pointer;
    color: #6b7280;
    padding: 4px;
}

.notification-close:hover {
    color: #374151;
}

.back-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: #1e3a8a;
    color: white;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
}

.back-to-top.show {
    opacity: 1;
    visibility: visible;
}

.back-to-top:hover {
    background: #1e40af;
    transform: translateY(-2px);
}

@keyframes slideInRight {
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

.animate-in {
    animation: fadeInUp 0.6s ease-out;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
`;

document.head.insertAdjacentHTML('beforeend', notificationStyles);
  