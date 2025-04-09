
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { PaymentProvider } from './contexts/PaymentContext.tsx'
import { ReportProvider } from './contexts/ReportContext.tsx'

// Ajoutons une animation de fade-in globale
import './animations.css';

createRoot(document.getElementById("root")!).render(
  <ReportProvider>
    <PaymentProvider>
      <App />
    </PaymentProvider>
  </ReportProvider>
);
