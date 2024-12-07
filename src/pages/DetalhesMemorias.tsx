import { useNavigate, useParams } from "react-router-dom";
import LayoutSidebar from "@/apps/layoutSidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { api } from "@/components/api.tsx";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

function MemoriaDetalhes() {
  const { id } = useParams<{ id: string }>(); // Obtém o ID da memória
  console.log(id)
  const navigate = useNavigate();

  const [memory, setMemory] = useState({
    _id: "",
    keyWords: [] as string[],
    text: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMemory = async () => {
      setLoading(true);
      try {
        // Abordagem 1: Endpoint com ID diretamente
        const response = await api.get(`/formatedMemories`, { params: { id: id } });
        console.log(response)



        setMemory({
          _id: id || "",
          keyWords: response.data.keyWords || [],
          text: response.data.text || "",
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

  const handleBack = () => {
    navigate("/memorias");
  };

  const handleEdit = (id: string) => {
    navigate(`/memorias/editar/${id}`);
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
            <h2 className="text-xl font-bold text-white mb-4">Detalhes da Memória</h2>
            <p className="text-neutral-400 mb-2">
              <strong>ID:</strong> {memory._id}
            </p>
            <p className="text-neutral-400 mb-2">
              <strong>Palavras-chave:</strong>{" "}
              {memory.keyWords && memory.keyWords.length > 0
                ? memory.keyWords.join(", ")
                : "Nenhuma palavra-chave"}
            </p>
            <p className="text-neutral-400">
              <strong>Texto:</strong> {memory.text}
            </p>
            <div className="flex space-x-4 mt-4">
              <Button
                onClick={handleBack}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200"
              >
                Voltar
              </Button>
              <Button
                onClick={() => handleEdit(memory._id)}
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-200"
              >
                Editar
              </Button>
            </div>
          </div>
        </LayoutSidebar>
      </ThemeProvider>
    </div>
  );
}

export default MemoriaDetalhes;
