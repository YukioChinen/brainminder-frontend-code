import { useNavigate } from "react-router-dom";
import LayoutSidebar from "@/apps/layoutSidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { api } from "@/components/api.tsx";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

function Memorias() {
  const navigate = useNavigate();
  const [memories, setMemories] = useState<any[]>([]);

  const handleAddMemory = () => {
    navigate(`/memorias/adicionar`);
  };

  const handleDeleteMemory = async (id: string) => {
    try {
      await api.delete(`/formatedMemories`, { params: { id: id } });
      setMemories((prevMemories) => prevMemories.filter((memory) => memory._id !== id));
      console.log("Memória excluída com sucesso.");
    } catch (error) {
      console.error("Erro ao excluir memória:", error);
    }
  };

  useEffect(() => {
    const fetchMemories = async () => {
      try {
        const response = await api.get("/formatedMemories");
        console.log("Resposta da API:", response.data.results); // Log para verificar os dados da API
        setMemories(Array.isArray(response.data.results) ? response.data.results : []); // Garante que memories seja sempre um array
      } catch (error) {
        console.error("Erro ao carregar memórias:", error);
      }
    };

    fetchMemories();
  }, []);

  const navigateDetalhe = (userId: number) =>  {
    navigate(`/memorias/detalhes/${userId}`);
  };

  return (
    <div>
      <ThemeProvider>
        <LayoutSidebar>
          <div className="flex flex-wrap space-x-4">
            {memories.length > 0 ? (
              memories.map((memory: any) => (
                <div key={memory._id} className="p-6 border rounded shadow">
                  <h3 className="font-bold">{memory._id}</h3>
                  <p className="text-gray-700">{memory.text}</p>
                  <div className="mt-2 flex space-x-2">
                    <Button
                      className="bg-blue-500 text-white"
                      onClick={() => navigateDetalhe(memory._id)}
                    >
                      Ver Detalhes
                    </Button>
                    <Button
                      className="bg-red-500 text-white"
                      onClick={() => handleDeleteMemory(memory._id)}
                    >
                      Excluir
                    </Button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 p-6">Nenhuma memória encontrada.</p>
            )}

            {/* Botão para adicionar nova memória */}
            <Button
              className="size-40 bg-green-500 text-white"
              onClick={handleAddMemory}
            >
              +
            </Button>
          </div>
        </LayoutSidebar>
      </ThemeProvider>
    </div>
  );
}

export default Memorias;
