import { useNavigate } from "react-router-dom";
import LayoutSidebar from "@/apps/layoutSidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { api } from "@/components/api.tsx";

const users = await api.get("/users") as any;

function Usuarios() {
  const navigate = useNavigate();

  const handleEdit = (userId: number) => {
    // Redireciona para a página de edição do usuário com a URL correta
    navigate(`/usuarios/editar/${userId}`);
  };

  const handleGetUser = async (userId: string) => {
    setLoading(true);
    setError(null);
    try {
      // Chamada à API para buscar o usuário com base no ID
      const response = await api.get("/users", { params: { id: userId } });
      setUserData(response.data); // Armazena os dados do usuário
    } catch (err) {
      console.error("Erro ao buscar o usuário:", err);
      setError(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <ThemeProvider>
        <LayoutSidebar>
          <div className="mr-10 w-full mt-10 bg-neutral-800 p-4 rounded-xl border border-neutral-400">
            <h2 className="text-xl font-bold text-white mb-4">Usuários</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {users.data.results.map((user:any) => (
                <div
                  key={user.id}
                  className="bg-white text-black p-4 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  <h3 className="font-semibold text-lg">{user.firstName} {user.lastName}</h3>
                  <p className="text-sm text-neutral-500">Email: {user.email}</p>

                  <div className="mt-4 flex space-x-4">
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200"
                      onClick={() => handleGetUser(user.id)} // Chama a função de edição
                    >
                      Editar
                    </button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-200">
                      Excluir
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </LayoutSidebar>
      </ThemeProvider>
    </div>
  );
}

export default Usuarios;
function setLoading(arg0: boolean) {
  throw new Error("Function not implemented.");
}

function setError(arg0: null) {
  throw new Error("Function not implemented.");
}

function setUserData(data: any) {
  throw new Error("Function not implemented.");
}

