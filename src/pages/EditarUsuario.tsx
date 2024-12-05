import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LayoutSidebar from "@/apps/layoutSidebar";
import { ThemeProvider } from "@/components/theme-provider";

const users = [
  {
    id: 1,
    firstName: "Thiago",
    lastName: "Araujo",
    cpf: "123456789"
  },
  {
    id: 2,
    firstName: "Ryan",
    lastName: "Ribeiro",
    cpf: "987654321"
  },
  {
    id: 3,
    firstName: "Enzo",
    lastName: "Chinen",
    cpf: "123789456"
  }
];

function EditarUsuario() {
  const { userId } = useParams();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Simula o carregamento dos dados do usuário (aqui você pode usar uma API ou uma função para buscar os dados reais)
    const selectedUser = users.find(u => u.id === parseInt(userId!));
    setUser(selectedUser);
  }, [userId]);

  if (!user) return <div>Carregando...</div>;

  return (
    <div>
      <ThemeProvider>
        <LayoutSidebar>
          <div className="mr-10 w-full mt-10 bg-neutral-800 p-4 rounded-xl border border-neutral-400">
            <h2 className="text-xl font-bold text-white mb-4">Editar Usuário</h2>

            {/* Formulário de Edição */}
            <form className="space-y-4">
              <div>
                <label className="block text-sm text-neutral-500">Nome</label>
                <input
                  type="text"
                  className="w-full p-2 rounded-md"
                  value={user.firstName}
                  onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm text-neutral-500">Sobrenome</label>
                <input
                  type="text"
                  className="w-full p-2 rounded-md"
                  value={user.lastName}
                  onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm text-neutral-500">CPF</label>
                <input
                  type="text"
                  className="w-full p-2 rounded-md"
                  value={user.cpf}
                  onChange={(e) => setUser({ ...user, cpf: e.target.value })}
                />
              </div>
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-200"
              >
                Salvar Alterações
              </button>
            </form>
          </div>
        </LayoutSidebar>
      </ThemeProvider>
    </div>
  );
}

export default EditarUsuario;
