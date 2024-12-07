import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LayoutSidebar from "@/apps/layoutSidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { api } from "@/components/api.tsx";

function AdicionarMemorias() {
  const navigate = useNavigate();

  // Estados para os campos do formulário
  const [keyWords, setKeyWords] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Converte as palavras-chave em um array
      const formattedKeyWords = keyWords
        .split(",") // Separa por vírgulas
        .map((kw) => kw.trim()) // Remove espaços em excesso
        .filter((kw) => kw); // Remove strings vazias

      // Envia os dados para a API
      await api.post(`/formatedMemories`, {
        keyWords: formattedKeyWords,
        text,
      });

      // Redireciona para a lista de memórias após sucesso
      navigate("/memorias");
    } catch (err) {
      console.error("Erro ao adicionar memória:", err);
      setError("Não foi possível adicionar a memória.");
    }
  };

  return (
    <div>
      <ThemeProvider>
        <LayoutSidebar>
          <div className="mr-10 w-full mt-10 bg-neutral-800 p-4 rounded-xl border border-neutral-400">
            <h2 className="text-xl font-bold text-white mb-4">Adicionar Memória</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && <p className="text-red-500">{error}</p>}
              <div>
                <label className="block text-sm text-neutral-500">Palavras-chave (separadas por vírgulas)</label>
                <input
                  type="text"
                  className="w-full p-2 rounded-md text-black"
                  value={keyWords}
                  onChange={(e) => setKeyWords(e.target.value)}
                  placeholder="Exemplo: palavra1, palavra2, palavra3"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-neutral-500">Texto</label>
                <input
                  type="text"
                  className="w-full p-2 rounded-md text-black"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Digite seu texto"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-200"
              >
                Adicionar Memória
              </button>
            </form>
          </div>
        </LayoutSidebar>
      </ThemeProvider>
    </div>
  );
}

export default AdicionarMemorias;
