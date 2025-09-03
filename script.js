// ===== MVA AVOCATS - JAVASCRIPT OPTIMISÉ =====

document.addEventListener('DOMContentLoaded', function() {
    // ===== SCROLL INDICATOR =====
    const scrollIndicator = document.createElement('div');
    scrollIndicator.className = 'scroll-indicator';
    document.body.appendChild(scrollIndicator);

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollIndicator.style.width = scrollPercent + '%';
    });

    // ===== NAVIGATION ACTIVE STATE =====
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
    
    // ===== NAVIGATION SCROLL EFFECT =====
    const mainNav = document.querySelector('.main-nav');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        
        if (scrollTop > 100) {
            mainNav.classList.add('scrolled');
        } else {
            mainNav.classList.remove('scrolled');
        }
        
        lastScrollTop = scrollTop;
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
        
        mobileMenuBtn.setAttribute('aria-expanded', !isActive);
        
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

        const menuLinks = navLinks.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });

        if (navOverlay) {
            navOverlay.addEventListener('click', closeMobileMenu);
        }

        document.addEventListener('click', function(e) {
            if (!mobileMenuBtn.contains(e.target) && !navLinks.contains(e.target)) {
                closeMobileMenu();
            }
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navLinks.classList.contains('active')) {
                closeMobileMenu();
                mobileMenuBtn.focus();
            }
        });
    }

    // ===== ANIMATIONS AU SCROLL OPTIMISÉES =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                // Ajouter un délai progressif pour les éléments multiples
                const delay = element.dataset.delay || 0;
                
                setTimeout(() => {
                    element.classList.add('animate-in');
                    
                    // Ajouter des animations spécifiques selon le type d'élément
                    if (element.classList.contains('expertise-item')) {
                        element.classList.add('animate-fade-in-up');
                    } else if (element.classList.contains('team-card')) {
                        element.classList.add('animate-scale-in');
                    } else if (element.classList.contains('article-card')) {
                        element.classList.add('animate-fade-in-left');
                    }
                }, delay);
            }
        });
    }, observerOptions);

    // Observer les éléments avec délais progressifs
    const animateElements = document.querySelectorAll('.expertise-item, .team-card, .article-card, .contact-item, .expertise-card, .tarif-card, .info-card, .value-card, .approach-step, .service-item, .avocat-card, .mentions-section, .politique-section');
    
    animateElements.forEach((el, index) => {
        el.dataset.delay = index * 100; // Délai progressif de 100ms
        observer.observe(el);
    });

    // ===== FILTRES DES ARTICLES AVEC ANIMATIONS =====
    const filtresBtns = document.querySelectorAll('.filtre-btn');
    const articlesCards = document.querySelectorAll('.article-card');

    if (filtresBtns.length > 0 && articlesCards.length > 0) {
        filtresBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                filtresBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                const categorie = this.getAttribute('data-categorie');
                
                articlesCards.forEach((card, index) => {
                    if (categorie === 'tous' || card.getAttribute('data-categorie') === categorie) {
                        setTimeout(() => {
                            card.style.display = 'block';
                            card.classList.remove('hidden', 'fade-out');
                            card.classList.add('animate-fade-in-up');
                        }, index * 50);
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

    // ===== EFFETS DE HOVER AVANCÉS =====
    const hoverElements = document.querySelectorAll('.expertise-item, .team-card, .article-card, .contact-item, .expertise-card, .tarif-card, .info-card, .value-card, .approach-step, .service-item, .avocat-card');
    
    hoverElements.forEach(element => {
        element.classList.add('hover-lift');
        
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // ===== FORMULAIRES AVEC VALIDATION =====
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Validation basique
            let isValid = true;
            const requiredFields = form.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                    field.style.borderColor = '#dc2626';
                } else {
                    field.classList.remove('error');
                    field.style.borderColor = '';
                }
            });
            
            if (!isValid) {
                showNotification('Veuillez remplir tous les champs obligatoires.', 'error');
                return;
            }
            
            if (form.classList.contains('newsletter-form')) {
                const subject = 'Inscription Newsletter MVA Avocats';
                const body = `Email: ${data.email || ''}`;
                const mailtoLink = `mailto:contact@mva-avocats.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                window.location.href = mailtoLink;
                showNotification('Inscription à la newsletter envoyée !', 'success');
            } else {
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
                window.location.href = mailtoLink;
                showNotification('Demande envoyée ! Vérifiez votre client mail.', 'success');
            }
        });
    });

    // ===== NOTIFICATIONS AMÉLIORÉES =====
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
        
        // Auto-suppression après 5 secondes
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

    // ===== SMOOTH SCROLL OPTIMISÉ =====
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 100;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== BACK TO TOP AMÉLIORÉ =====
    const backToTopBtn = document.createElement('button');
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopBtn.setAttribute('aria-label', 'Retour en haut de page');
    document.body.appendChild(backToTopBtn);

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ===== LAZY LOADING DES IMAGES =====
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // ===== PERFORMANCE: DÉBOUNCE POUR LE SCROLL =====
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Appliquer le debounce aux événements de scroll
    const debouncedScrollHandler = debounce(function() {
        // Code de gestion du scroll optimisé
    }, 16); // ~60fps

    window.addEventListener('scroll', debouncedScrollHandler);
});

// ===== STYLES CSS POUR LES NOUVELLES FONCTIONNALITÉS =====
const enhancedStyles = `
<style>
/* ===== NOTIFICATIONS AMÉLIORÉES ===== */
.notification {
    position: fixed;
    top: 20px;
    right: 20px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    padding: 20px;
    z-index: 10000;
    max-width: 400px;
    border-left: 4px solid #1e3a8a;
    transform: translateX(100%);
    opacity: 0;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.notification-success {
    border-left-color: #10b981;
}

.notification-error {
    border-left-color: #dc2626;
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

.notification-error .notification-content i {
    color: #dc2626;
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
    border-radius: 50%;
    transition: all 0.2s ease;
}

.notification-close:hover {
    background: #f3f4f6;
    color: #374151;
}

/* ===== BACK TO TOP AMÉLIORÉ ===== */
.back-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: linear-gradient(135deg, #1e3a8a, #3b82f6);
    color: white;
    border: none;
    border-radius: 50%;
    width: 56px;
    height: 56px;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 8px 25px rgba(30, 58, 138, 0.3);
}

.back-to-top.show {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.back-to-top:hover {
    background: linear-gradient(135deg, #1e40af, #2563eb);
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(30, 58, 138, 0.4);
}

.back-to-top i {
    font-size: 1.2rem;
    transition: transform 0.2s ease;
}

.back-to-top:hover i {
    transform: translateY(-2px);
}

/* ===== ANIMATIONS D'ENTRÉE ===== */
.animate-in {
    animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
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

/* ===== EFFETS DE HOVER ===== */
.hover-lift {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hover-lift:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(15, 76, 129, 0.15);
}

/* ===== VALIDATION DES FORMULAIRES ===== */
.form-group input.error,
.form-group select.error,
.form-group textarea.error {
    border-color: #dc2626 !important;
    box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1) !important;
}

/* ===== LAZY LOADING ===== */
.lazy {
    opacity: 0;
    transition: opacity 0.3s ease;
}

.lazy.loaded {
    opacity: 1;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
    .notification {
        right: 10px;
        left: 10px;
        max-width: none;
    }
    
    .back-to-top {
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
    }
}
</style>
`;

document.head.insertAdjacentHTML('beforeend', enhancedStyles);
  
  