# MVA AVOCATS - Site Web Professionnel

Site web moderne du cabinet d'avocats MVA AVOCATS, développé avec Next.js, React et Tailwind CSS.

## 🌐 Déploiement GitHub Pages

Ce site est configuré pour être déployé automatiquement sur GitHub Pages via GitHub Actions.

### 🚀 Instructions de déploiement

1. **Publier le repository sur GitHub**
   ```bash
   git add .
   git commit -m "Initial commit - MVA Avocats site"
   git branch -M main
   git remote add origin https://github.com/Gaspinhow/mvatest.git
   git push -u origin main
   ```

2. **Activer GitHub Pages**
   - Aller dans Settings → Pages
   - Source: GitHub Actions
   - Workflow: "Deploy to GitHub Pages"

3. **Le site sera accessible à :**
   - `https://gaspinhow.github.io/mvatest/`
   - Ou avec un domaine personnalisé : `https://www.mva-avocats.fr`

## 🛠️ Développement local

```bash
# Installation des dépendances
npm install

# Démarrage du serveur de développement
npm run dev

# Build pour production
npm run build

# Export statique pour GitHub Pages
npm run export
```

## 📁 Structure du projet

- `app/` - Pages Next.js (App Router)
- `components/` - Composants React réutilisables
- `public/` - Assets publics (images, logos)
- `.github/workflows/` - Configuration GitHub Actions

## 🎨 Technologies utilisées

- **Next.js 14** - Framework React
- **Tailwind CSS** - Framework CSS
- **Framer Motion** - Animations
- **React 18** - Interface utilisateur

## 📱 Responsive & Accessibilité

Le site est entièrement responsive et optimisé pour :
- Desktop, tablette et mobile
- Accessibilité web (WCAG)
- Performance et SEO
- Images optimisées

## 🔧 Configuration

Le projet utilise :
- Export statique pour GitHub Pages (`output: 'export'`)
- Images optimisées sans serveur (`unoptimized: true`)
- Base path configuré pour le sous-répertoire GitHub Pages

---

**Cabinet MVA AVOCATS** - 6 rue Anatole de la Forge, 75017 Paris
Site développé avec ❤️ par un assistant IA pour l'excellence juridique.