
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { PaymentProvider } from './contexts/PaymentContext.tsx'
import { ReportProvider } from './contexts/ReportContext.tsx'

createRoot(document.getElementById("root")!).render(
  <ReportProvider>
    <PaymentProvider>
      <App />
    </PaymentProvider>
  </ReportProvider>
);
