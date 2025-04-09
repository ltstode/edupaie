PROJET: EduPaie
LIEU: GitHub Repository (https://github.com/ltstode/edupaie)
LIVE: https://edupaie.lovable.app

# SECTION: En-tête
DISPLAY Banner "EduPaie - Automatisation de Paie"
SHOW Badges:
  - "Plateforme Live" LINK edupaie.lovable.app 
  - "Code Source" LINK github.com/ltstode/edupaie
SHOW Screenshot (placeholder)

# SECTION: Fonctionnalités
FUNCTIONALITIES:
  - Gestion Paie:
    * GENERATE PDF bulletins
    * CALCUL auto cotisations (CNSS, impôts)
    * MANAGE primes/heures supp
    
  - Paiements:
    * INTEGRATE CinetPay (Mobile Money)
    * SEND SMS alerts
    * TRACK historique
    
  - Dashboard:
    * SHOW analytics
    * EXPORT Excel
    * SYNC existing systems

# SECTION: Design
STYLE:
  - UI: iOS-like
  - FONT: Plus Jakarta Sans
  - ICONS: lucide-react
  - THEME: Dark/Light

# SECTION: Technologie
TECH_STACK:
  FRONTEND:
    - Next.js (TypeScript)
    - Tailwind CSS
    - Framer Motion
    
  BACKEND:
    - Node.js (NestJS)
    - PostgreSQL
    - CinetPay API
    
  INFRA:
    - AWS Lightsail
    - GitHub Actions CI/CD

# SECTION: Installation
INSTALL:
  1. EXECUTE git clone https://github.com/ltstode/edupaie.git
  2. RUN npm install
  3. COPY .env.example TO .env
  4. RUN npm run dev

# SECTION: Licence
LICENSE: MIT
FILE: LICENSE

# SECTION: Contribution
CONTRIBUTE:
  PROCESS:
    1. OPEN issue
    2. DISCUSS changes
    3. SUBMIT PR

# SECTION: Contact
CONTACT: contact@lovable.app

# SECTION: CTA
DISPLAY Button "Essayer Gratuitement" LINK edupaie.lovable.app
