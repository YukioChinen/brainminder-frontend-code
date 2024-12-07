import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LayoutSidebar from "@/apps/layoutSidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { api } from "@/components/api.tsx";


function AdicionarUsuario() {
  const navigate = useNavigate();

  // Estados para os campos do formulário
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Envia os dados para a API
      await api.post(`/users`, {
        firstName,
        lastName,
        email,
        type: "ADMIN",
        cpf,
      });

      // Redireciona para a lista de usuários após sucesso
      navigate("/usuarios");
    } catch (err) {
      console.error("Erro ao adicionar usuário:", err);
      setError("Não foi possível adicionar o usuário.");
    }
  };

  return (
    <div>
      <ThemeProvider>
        <LayoutSidebar>
          <div className="mr-10 w-full mt-10 bg-neutral-800 p-4 rounded-xl border border-neutral-400">
            <h2 className="text-xl font-bold text-white mb-4">Adicionar Usuário</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && <p className="text-red-500">{error}</p>}
              <div>
                <label className="block text-sm text-neutral-500">Primeiro Nome</label>
                <input
                  type="text"
                  className="w-full p-2 rounded-md text-black"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Digite o primeiro nome"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-neutral-500">Último Nome</label>
                <input
                  type="text"
                  className="w-full p-2 rounded-md text-black"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Digite o último nome"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-neutral-500">Email</label>
                <input
                  type="email"
                  className="w-full p-2 rounded-md text-black"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Digite o email"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-neutral-500">CPF</label>
                <input
                  type="text"
                  className="w-full p-2 rounded-md text-black"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                  placeholder="Digite o CPF"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-200"
              >
                Adicionar Usuário
              </button>
            </form>
          </div>
        </LayoutSidebar>
      </ThemeProvider>
    </div>
  );
}

export default AdicionarUsuario;
