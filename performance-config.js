// ===== CONFIGURATION PERFORMANCE MVA AVOCATS =====

const PerformanceConfig = {
    // ===== ANIMATIONS =====
    animations: {
        // Délai entre les animations d'éléments multiples
        staggerDelay: 100,
        // Durée des animations
        duration: {
            fast: 150,
            normal: 300,
            slow: 500
        },
        // Courbes d'animation
        easing: {
            smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
            bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
            elastic: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
        }
    },

    // ===== INTERSECTION OBSERVER =====
    observer: {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    },

    // ===== DEBOUNCE =====
    debounce: {
        scroll: 16, // ~60fps
        resize: 100,
        input: 300
    },

    // ===== LAZY LOADING =====
    lazyLoading: {
        // Distance avant le chargement des images
        rootMargin: '50px',
        // Seuil de visibilité
        threshold: 0.1
    },

    // ===== CACHE =====
    cache: {
        // Durée du cache en millisecondes
        duration: 5 * 60 * 1000, // 5 minutes
        // Clés de cache
        keys: {
            navigation: 'mva-nav-state',
            userPreferences: 'mva-user-prefs'
        }
    },

    // ===== ANALYTICS =====
    analytics: {
        // Délai avant envoi des données
        sendDelay: 2000,
        // Événements à tracker
        events: [
            'page_view',
            'button_click',
            'form_submit',
            'scroll_depth'
        ]
    },

    // ===== PERFORMANCE MONITORING =====
    monitoring: {
        // Seuils de performance
        thresholds: {
            firstContentfulPaint: 1500,
            largestContentfulPaint: 2500,
            firstInputDelay: 100
        },
        // Métriques à surveiller
        metrics: [
            'FCP',
            'LCP',
            'FID',
            'CLS'
        ]
    }
};

// ===== FONCTIONS UTILITAIRES =====

// Fonction de debounce
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

// Fonction de throttle
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Fonction de cache
function cache(key, data, duration = PerformanceConfig.cache.duration) {
    const item = {
        data: data,
        timestamp: Date.now(),
        expires: Date.now() + duration
    };
    localStorage.setItem(key, JSON.stringify(item));
}

// Fonction de récupération du cache
function getCached(key) {
    const item = localStorage.getItem(key);
    if (!item) return null;
    
    const cached = JSON.parse(item);
    if (Date.now() > cached.expires) {
        localStorage.removeItem(key);
        return null;
    }
    
    return cached.data;
}

// Fonction de mesure des performances
function measurePerformance(metric, value) {
    if (PerformanceConfig.monitoring.metrics.includes(metric)) {
        console.log(`Performance ${metric}:`, value);
        
        // Envoyer aux analytics si nécessaire
        if (typeof gtag !== 'undefined') {
            gtag('event', 'performance', {
                metric: metric,
                value: value
            });
        }
    }
}

// Fonction d'optimisation des images
function optimizeImage(img) {
    // Vérifier si l'image est dans le viewport
    const rect = img.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    
    if (isVisible && img.dataset.src) {
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        img.classList.add('loaded');
    }
}

// Fonction d'animation fluide
function animateElement(element, animation, delay = 0) {
    setTimeout(() => {
        element.classList.add(animation);
    }, delay);
}

// Fonction de préchargement
function preloadResource(url, type = 'image') {
    if (type === 'image') {
        const img = new Image();
        img.src = url;
    } else if (type === 'font') {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = url;
        link.as = 'font';
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
    }
}

// Export des configurations et fonctions
window.PerformanceConfig = PerformanceConfig;
window.PerformanceUtils = {
    debounce,
    throttle,
    cache,
    getCached,
    measurePerformance,
    optimizeImage,
    animateElement,
    preloadResource
};
