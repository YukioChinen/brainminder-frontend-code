import { useNavigate } from "react-router-dom";
import LayoutSidebar from "@/apps/layoutSidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { api } from "@/components/api.tsx";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

function Usuarios() {
  const navigate = useNavigate();
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Busca os usuários ao carregar o componente
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await api.get("/users");
        setUsers(response.data.results); // Armazena a lista de usuários no estado
      } catch (err) {
        console.error("Erro ao buscar os usuários:", err);
        setError("Não foi possível carregar os usuários.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleEdit = (userId: number) => {
    // Redireciona para a página de edição do usuário com o ID correto
    navigate(`/usuarios/editar/${userId}`);
  };

  const handleAddUser = () => {
    // Redireciona para a página de adição de um novo usuário
    navigate(`/usuarios/adicionar`);
  };

  const handleDelete = async (userId: number) => {
    try {
      // Realiza a requisição DELETE
      await api.delete(`/users`, { params: { id: userId } });

      // Remove o usuário da lista localmente
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
    } catch (err) {
      console.error("Erro ao excluir o usuário:", err);
      alert("Não foi possível excluir o usuário.");
    }
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div>
      <ThemeProvider>
        <LayoutSidebar>
          <div className="mr-10 w-full mt-10 bg-neutral-800 p-4 rounded-xl border border-neutral-400">
            <h2 className="text-xl font-bold text-white mb-4">Usuários</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {users.map((user: any) => (
                <div
                  key={user._id}
                  className="bg-white text-black p-4 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  <h3 className="font-semibold text-lg">
                    {user.firstName} {user.lastName}
                  </h3>
                  <p className="text-sm text-neutral-500">Email: {user.email}</p>

                  <div className="mt-4 flex space-x-4">
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200"
                      onClick={() => handleEdit(user._id)} // Garante que o ID seja correto
                    >
                      Editar
                    </button>
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-200"
                      onClick={() => handleDelete(user._id)} // Chama a função de deletar
                    >
                      Excluir
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <Button
              className="bg-white text-black p-4 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 mt-4"
              onClick={handleAddUser} // Redireciona para a página de adicionar usuário
            >
              Adicionar Usuário
            </Button>
          </div>
        </LayoutSidebar>
      </ThemeProvider>
    </div>
  );
}

export default Usuarios;
