# Plan de la Landing Page - Sophie Pépin

## 1. Recherche & Découvertes

### 1.1 Profil de Sophie Pépin

| Info | Détail |
|------|--------|
| **Poste actuel** | Senior UX & UI Web Designer chez Workleap |
| **Localisation** | Montréal, Québec, Canada |
| **Spécialité** | Design centré utilisateur, interfaces web intuitives, data-informed design |
| **Progression** | UX Web Designer → Senior UX & UI Web Designer (Workleap) |

**Parcours professionnel :**
- **Workleap** — Senior UX & UI Web Designer (actuel)
- **Republik** — Senior Art Director (agence marketing contenu & influenceurs)
- **Akufen** — Art Director (studio créatif montréalais, web & print)
- **CloudRaker** — Designer Graphique (optimisation web, cohérence visuelle)
- **Pica Magazine** — Co-éditrice (initiative de l'école de design de l'UQAM)

**Formation :**
- MicroMaster en Expérience utilisateur en contexte d'affaires — HEC Montréal
- Design Thinking / Expérience Utilisateur — Collège de Maisonneuve
- Certificate Proficiency in English — McGill University
- Baccalauréat — UQAM (Université du Québec à Montréal)

**Compétences clés :**
- User Research & Data-Driven Design
- Wireframing, Prototyping & Mockups
- User Flows & Information Architecture
- UI Design & Design Systems
- Art Direction & Creative Strategy
- Web Performance & Accessibility

### 1.2 Workleap — Contexte

- **Mission :** Créer des produits qui rendent le travail plus simple, humain et rapide
- **Type :** Plateforme SaaS de gestion des talents / expérience employé
- **Produits :** Officevibe, Onboarding, Skills, LMS, Performance, ShareGate
- **Audience :** 20 000+ leaders à travers le monde
- **Origine :** Montréal (anciennement GSoft)

**Identité visuelle Workleap (extraite du site) :**
- Bleu primaire : `#2545ff`
- Fond clair : `#f9f8f6`
- Texte foncé : `#171417`
- Bordures/strokes : `#e6e6e4`, `#b3b3b1`
- Style : minimaliste, moderne, coins arrondis, whitespace généreux
- Typographie : responsive, fluide, antialiased, OpenType features

### 1.3 Tendances Design 2026 (Portfolio / Landing Pages)

- **Minimalisme expressif** — layouts épurés mais avec personnalité
- **Typographie oversized** — titres percutants, polices expressives
- **Micro-interactions** — animations subtiles au scroll et au hover
- **Mobile-first** — priorité absolue au mobile
- **Grilles asymétriques** — layouts créatifs qui brisent la monotonie
- **Glassmorphism subtil** — profondeur par transparence et flou
- **3D sculptural** — éléments volumétriques pour capter l'attention

---

## 2. Structure de la Page

### Architecture des sections

```
┌─────────────────────────────────────────┐
│  NAVIGATION (fixe, transparente→solide) │
│  Logo SP · About · Expertise · Work ·   │
│  Contact                                │
├─────────────────────────────────────────┤
│                                         │
│  HERO SECTION                           │
│  ┌─────────────────────────────────┐    │
│  │  "Senior UX & UI Designer"     │    │
│  │   Sophie Pépin                  │    │
│  │   Tagline animée               │    │
│  │   CTA: Voir mon travail        │    │
│  │   Photo professionnelle        │    │
│  └─────────────────────────────────┘    │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  ABOUT / À PROPOS                       │
│  ┌─────────────────────────────────┐    │
│  │  Bio courte + philosophie      │    │
│  │  Chiffres clés (années xp,    │    │
│  │  projets, etc.)                │    │
│  │  Parcours (timeline visuelle)  │    │
│  └─────────────────────────────────┘    │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  EXPERTISE / COMPÉTENCES                │
│  ┌─────────────────────────────────┐    │
│  │  Cards avec icônes :           │    │
│  │  · UX Research                 │    │
│  │  · UI Design                   │    │
│  │  · Design Systems              │    │
│  │  · Art Direction               │    │
│  │  · Prototyping                 │    │
│  │  · Web Performance             │    │
│  └─────────────────────────────────┘    │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  PARCOURS / EXPÉRIENCE                  │
│  ┌─────────────────────────────────┐    │
│  │  Timeline interactive :        │    │
│  │  Workleap → Republik →         │    │
│  │  Akufen → CloudRaker           │    │
│  └─────────────────────────────────┘    │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  OUTILS & TECHNOLOGIES                  │
│  ┌─────────────────────────────────┐    │
│  │  Logos/badges des outils :     │    │
│  │  Figma, Sketch, Adobe CC,     │    │
│  │  Webflow, HTML/CSS, etc.      │    │
│  └─────────────────────────────────┘    │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  CONTACT                                │
│  ┌─────────────────────────────────┐    │
│  │  "Travaillons ensemble"        │    │
│  │  Liens : LinkedIn, Behance,   │    │
│  │  Dribbble, Email               │    │
│  └─────────────────────────────────┘    │
│                                         │
├─────────────────────────────────────────┤
│  FOOTER                                │
│  © 2026 Sophie Pépin · Montréal        │
└─────────────────────────────────────────┘
```

---

## 3. Palette de Couleurs & Typographie

### 3.1 Palette de couleurs

Inspirée de l'esthétique Workleap et du fond bleu de la photo professionnelle.

| Rôle | Couleur | Hex |
|------|---------|-----|
| **Bleu primaire** | Bleu Workleap / Photo | `#2545ff` |
| **Bleu hero gradient** | Bleu profond | `#1a1a4e` |
| **Accent** | Bleu clair lumineux | `#4d6bff` |
| **Fond principal** | Blanc cassé chaud | `#f9f8f6` |
| **Fond alterné** | Blanc pur | `#ffffff` |
| **Texte principal** | Noir profond | `#171417` |
| **Texte secondaire** | Gris moyen | `#6b6b6b` |
| **Bordures** | Gris léger | `#e6e6e4` |
| **Accent secondaire** | Corail doux | `#ff6b6b` |
| **Succès / Highlight** | Vert menthe | `#00c9a7` |

### 3.2 Typographie

| Usage | Police | Poids | Taille |
|-------|--------|-------|--------|
| **Titres (H1)** | Inter | 800 (ExtraBold) | 48-72px |
| **Sous-titres (H2)** | Inter | 700 (Bold) | 32-40px |
| **H3** | Inter | 600 (SemiBold) | 24-28px |
| **Corps** | Inter | 400 (Regular) | 16-18px |
| **Accent / Labels** | JetBrains Mono | 500 | 14px |

> **Inter** : police sans-serif moderne, excellente lisibilité, largement utilisée en SaaS.
> **JetBrains Mono** : pour les labels techniques et les accents, ajoutant une touche "tech".

---

## 4. Fonctionnalités & Interactions

### 4.1 Animations & Micro-interactions

- **Scroll reveal** — Éléments apparaissent progressivement au scroll (IntersectionObserver)
- **Navigation sticky** — Fond transparent → fond solide avec blur au scroll
- **Cursor personnalisé** — Cercle qui suit le curseur (desktop uniquement)
- **Hover effects** — Scale + shadow sur les cards, underline animé sur les liens
- **Typing animation** — Texte qui se tape automatiquement dans le hero
- **Parallax léger** — Effet de profondeur sur les éléments du hero
- **Counter animation** — Chiffres qui comptent vers le haut dans la section About
- **Smooth scroll** — Navigation fluide entre les sections

### 4.2 Accessibilité (WCAG AA)

- Contraste des couleurs ≥ 4.5:1 pour le texte
- Focus visible sur tous les éléments interactifs
- Attributs ARIA appropriés
- Navigation au clavier complète
- `prefers-reduced-motion` respecté (désactive les animations)
- Textes alternatifs pour les images
- Hiérarchie sémantique HTML correcte

### 4.3 SEO

- Balises meta (title, description, Open Graph, Twitter Cards)
- Données structurées JSON-LD (Person schema)
- HTML sémantique (header, nav, main, section, footer)
- Performance optimisée (Core Web Vitals)

---

## 5. Stack Technique

| Composant | Choix | Justification |
|-----------|-------|---------------|
| **HTML** | HTML5 sémantique | Structure accessible, SEO-friendly |
| **CSS** | CSS3 + Custom Properties | Variables CSS, pas de dépendances, performances |
| **JavaScript** | Vanilla JS (ES6+) | Léger, pas de framework nécessaire |
| **Fonts** | Google Fonts (Inter + JetBrains Mono) | CDN rapide, gratuit |
| **Icons** | SVG inline | Léger, personnalisable, pas de dépendances |
| **Animations** | CSS transitions + IntersectionObserver API | Natif, performant |
| **Image** | Placeholder SVG / Gradient | Photo à ajouter par l'utilisatrice |

### Structure des fichiers

```
landing-page-sophie/
├── index.html          # Page principale
├── css/
│   └── styles.css      # Styles complets
├── js/
│   └── main.js         # Interactions et animations
├── assets/
│   └── photo.jpg       # Photo professionnelle (à fournir)
└── favicon.svg         # Favicon
```

---

## 6. Timeline de Développement

| Étape | Tâche | Détails |
|-------|-------|---------|
| **1** | Setup & Structure HTML | Squelette sémantique, meta tags, SEO |
| **2** | Styles de base | Variables CSS, reset, typographie, layout |
| **3** | Section Hero | Design principal, gradient, animation typing |
| **4** | Section About | Bio, chiffres animés, philosophie |
| **5** | Section Expertise | Cards compétences, icônes SVG |
| **6** | Section Parcours | Timeline interactive des expériences |
| **7** | Section Outils | Grille d'outils avec badges |
| **8** | Section Contact + Footer | Liens sociaux, CTA final |
| **9** | JavaScript & Animations | Scroll reveal, navigation, micro-interactions |
| **10** | Responsive & Polish | Mobile-first, tests, optimisations finales |

---

## 7. Notes de Design

### Principes directeurs
1. **Simplicité** — Chaque élément a une raison d'être
2. **Cohérence** — Palette et typographie constantes
3. **Mouvement** — Animations subtiles qui guident l'oeil
4. **Personnalité** — Refléter le côté créatif ET professionnel de Sophie
5. **Performance** — Chargement rapide, pas de bloat

### Inspiration visuelle
- Esthétique Workleap : moderne, coins arrondis, whitespace généreux
- Tendance 2026 : typographie bold, grilles asymétriques, micro-interactions
- Photo fond bleu : intégration du bleu comme couleur dominante du hero

### Différenciateurs
- Cursor personnalisé pour une touche design
- Typing animation pour dynamiser le hero
- Timeline interactive pour rendre le parcours engageant
- Labels techniques en monospace pour le côté "craft"

---

## Sources de Recherche
- [Sophie Pepin — The Org](https://theorg.com/org/workleap/org-chart/sophie-pepin)
- [Sophie Pepin — LinkedIn](https://www.linkedin.com/in/sophiepepin/)
- [Sophie Pepin — Behance](https://www.behance.net/sophiepepin)
- [Sophie Pepin — Dribbble](https://dribbble.com/sophiepepin)
- [Workleap — Site officiel](https://workleap.com/)
- [Workleap — À propos](https://workleap.com/about)
- [Workleap — Plateforme](https://workleap.com/platform)
- [Workleap Design System (sg-orbit)](https://github.com/workleap/sg-orbit)
- [Landing Page Design Trends 2026](https://www.involve.me/blog/landing-page-design-trends)
- [Portfolio Design Trends 2026](https://colorlib.com/wp/portfolio-design-trends/)
