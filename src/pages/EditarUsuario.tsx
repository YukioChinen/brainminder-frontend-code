import { useNavigate, useParams } from "react-router-dom";
import LayoutSidebar from "@/apps/layoutSidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { api } from "@/components/api.tsx";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

function EditarUsuario() {
  const { userId } = useParams<{ userId: string }>(); // Obtém o ID do usuário
  console.log(userId)
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      if (!userId) {
        setError("ID do usuário não encontrado.");
        return;
      }
      setLoading(true);
      try {
        const response = await api.get(`/users`, { params: { id: userId } });
        console.log("Dados do usuário:", response.data); // Adicione este log para verificar os dados
        setFormData({
          firstName: response.data.firstName || "",
          lastName: response.data.lastName || "",
          email: response.data.email || "",
        });
      } catch (err) {
        console.error("Erro ao carregar os dados do usuário:", err);
        setError("Não foi possível carregar os dados do usuário.");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.put(`/users`, { ...formData }, { params: { id: userId } });
      navigate("/usuarios");
    } catch (err) {
      console.error("Erro ao atualizar o usuário:", err);
      setError("Não foi possível atualizar o usuário.");
    } finally {
      setLoading(false);
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
            <h2 className="text-xl font-bold text-white mb-4">Editar Usuário</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-white mb-2" htmlFor="firstName">
                  Primeiro Nome
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="text-black text-black w-full px-4 py-2 rounded-md border border-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-white mb-2" htmlFor="lastName">
                  Sobrenome
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="text-black w-full px-4 py-2 rounded-md border border-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-white mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="text-black w-full px-4 py-2 rounded-md border border-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="flex space-x-4">
                <Button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200"
                >
                  Salvar
                </Button>
                <Button
                  type="button"
                  onClick={() => navigate("/usuarios")}
                  className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors duration-200"
                >
                  Cancelar
                </Button>
              </div>
            </form>
          </div>
        </LayoutSidebar>
      </ThemeProvider>
    </div>
  );
}

export default EditarUsuario;
