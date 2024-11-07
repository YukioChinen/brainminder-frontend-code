import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from "@/components/theme-provider";
import LayoutSidebar from '@/apps/layoutSidebar';
import Memorias from '@/pages/Memorias';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <LayoutSidebar children={undefined} />
        <Routes>
          <Route path="memorias" element={<Memorias />} />  {/* Rota para a página de Memórias */}
        </Routes>
        
      </ThemeProvider>

    </Router>
  );
}

export default App;
