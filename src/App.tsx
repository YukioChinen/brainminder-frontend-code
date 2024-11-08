import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from "@/components/theme-provider";
import LayoutSidebar from '@/apps/layoutSidebar';
import Memorias from '@/pages/Memorias';
import Configuracoes from './pages/Configuracoes';
import Usuarios from './pages/Usuarios';
import Relatorios from './pages/relatorios';

function App() {
  return (
    <div>
      <Router>
        <ThemeProvider>
          <Routes>
            <Route path="configuracoes" element={<Configuracoes />} />  {/* Rota para a página de Configurações */}
            <Route path="usuarios" element={<Usuarios />} />  {/* Rota para a página de Usuários */}
            <Route path="memorias" element={<Memorias />} />  {/* Rota para a página de Memórias */}
            <Route path="relatorios" element={<Relatorios />} />  {/* Rota para a página de Relatórios */}
          </Routes>
          
        </ThemeProvider>

      </Router>
    </div>
    
  );
}

export default App;
