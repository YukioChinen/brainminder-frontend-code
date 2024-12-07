import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from "@/components/theme-provider";
import Memorias from '@/pages/Memorias';
import Configuracoes from './pages/Configuracoes';
import Usuarios from './pages/Usuarios';
import Relatorios from './pages/Relatorios';
import Login from './pages/Login';
import Registrar from './pages/Registrar';
import EditarUsuario from './pages/EditarUsuario';
import AdicionarUsuario from './pages/AdicionarUsuario';
import AdicionarMemorias from './pages/AdicionarMemorias';
import DetalhesMemorias from './pages/DetalhesMemorias';
import EditarMemorias from './pages/EditarMemorias';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <Routes>
          {/* Rota padrão para Login */}
          <Route path="/" element={<Login />} />

          {/* Rota para outras páginas */}
          <Route path="/login" element={<Login />} />
          <Route path="/configuracoes" element={<Configuracoes />} />
          <Route path="/usuarios" element={<Usuarios />} />
          {/* Rota para edição de usuário dentro de /usuarios */}
          <Route path="/usuarios/editar/:userId" element={<EditarUsuario />} />
          <Route path="/memorias" element={<Memorias />} />
          <Route path="/relatorios" element={<Relatorios />} />
          <Route path="/registrar" element={<Registrar />} />
          <Route path="/usuarios/adicionar" element={<AdicionarUsuario />}/>
          <Route path="/memorias/adicionar" element={<AdicionarMemorias />}/>
          <Route path="/memorias/detalhes/:id" element={<DetalhesMemorias />}/>
          <Route path="/memorias/editar/:id" element={<EditarMemorias />}/>
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
