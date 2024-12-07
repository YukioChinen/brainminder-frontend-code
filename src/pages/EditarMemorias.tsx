import { useNavigate, useParams } from "react-router-dom";
import LayoutSidebar from "@/apps/layoutSidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { api } from "@/components/api.tsx";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

function EditarMemorias() {
  const { id } = useParams<{ id: string }>(); // Obtém o ID da memória
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    keyWords: "" as string, // Será convertido de/para array
    text: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMemory = async () => {
      if (!id) {
        setError("ID da memória não encontrado.");
        return;
      }
      setLoading(true);
      try {
        const response = await api.get(`/formatedMemories`, { params: { id: id } }); // Obtém os detalhes da memória
        const memoryData = response.data;
        setFormData({
          keyWords: memoryData.keyWords.join(", "), // Converte array para string separada por vírgulas
          text: memoryData.text || "",
        });
      } catch (err) {
        console.error("Erro ao buscar os detalhes da memória:", err);
        setError("Não foi possível carregar os detalhes da memória.");
      } finally {
        setLoading(false);
      }
    };

    fetchMemory();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Converte `keyWords` de string para array
      const updatedData = {
        keyWords: formData.keyWords.split(",").map((kw) => kw.trim()),
        text: formData.text,
      };
      await api.put(`/formatedMemories`, updatedData, { params: { id: id } }); // Atualiza a memória
      navigate("/memorias");
    } catch (err) {
      console.error("Erro ao atualizar a memória:", err);
      setError("Não foi possível atualizar a memória.");
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
            <h2 className="text-xl font-bold text-white mb-4">Editar Memória</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-white mb-2" htmlFor="keyWords">
                  Palavras-chave (separadas por vírgulas)
                </label>
                <input
                  type="text"
                  id="keyWords"
                  name="keyWords"
                  value={formData.keyWords}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md text-black border border-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-white mb-2" htmlFor="text">
                  Texto
                </label>
                <textarea
                  id="text"
                  name="text"
                  value={formData.text}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md text-black border border-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
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
                  onClick={() => navigate("/memorias")}
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

export default EditarMemorias;
