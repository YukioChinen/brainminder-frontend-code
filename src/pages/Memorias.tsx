import LayoutSidebar from "@/apps/layoutSidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface Memory {
  id: number;
  title: string;
  summary: string;
  context: string;
  text: string;
  date: string;
}

const initialMemories: Memory[] = [
  {
    id: 1,
    title: "Memory 1",
    summary: "Summary 1",
    context: "Context 1",
    text: "Some text",
    date: "01/01/2024",
  },
  {
    id: 2,
    title: "Memory 2",
    summary: "Summary 2",
    context: "Context 2",
    text: "Some text",
    date: "01/02/2024",
  },
  {
    id: 3,
    title: "Memory 3",
    summary: "Summary 3",
    context: "Context 3",
    text: "Some text",
    date: "01/03/2024",
  },
];

function Memorias() {
  const [memories, setMemories] = useState<Memory[]>(initialMemories);
  const [newMemory, setNewMemory] = useState<Memory>({
    id: 0,
    title: "",
    summary: "",
    context: "",
    text: "",
    date: "",
  });

  const handleCreateMemory = () => {
    const newMemoryData = {
      ...newMemory,
      id: memories.length + 1, // Assign a new ID based on the current length
      date: new Date().toLocaleDateString(), // Set current date as the date
    };
    setMemories([...memories, newMemoryData]);
    setNewMemory({
      id: 0,
      title: "",
      summary: "",
      context: "",
      text: "",
      date: "",
    }); // Reset the form
  };

  return (
    <ThemeProvider>
      <LayoutSidebar>
        <div className="flex flex-wrap">
          {memories.map((memory) => (
            <div key={memory.id} className="p-6">
              <Button className="size-40">
                <div className="font-bold">{memory.title}</div>
                <time className="text-sm">{memory.date}</time>
                <p className="text-sm">{memory.summary}</p>
              </Button>
            </div>
          ))}
          {/* Bloco para adicionar nova memória */}
          <div className="p-6">
            <Button
              className="size-40"
              onClick={() => {
                setNewMemory({
                  ...newMemory,
                  title: "",
                  summary: "",
                  context: "",
                  text: "",
                });
              }}
            >
              +
            </Button>
          </div>

          {/* Formulário para criar nova memória */}
          <div className="p-6">
            <h3 className="text-lg font-bold">Criar Nova Memória</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Título"
                value={newMemory.title}
                onChange={(e:any) =>
                  setNewMemory({ ...newMemory, title: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Resumo"
                value={newMemory.summary}
                onChange={(e:any) =>
                  setNewMemory({ ...newMemory, summary: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Contexto"
                value={newMemory.context}
                onChange={(e:any) =>
                  setNewMemory({ ...newMemory, context: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Texto"
                value={newMemory.text}
                onChange={(e:any) =>
                  setNewMemory({ ...newMemory, text: e.target.value })
                }
              />
              <Button onClick={handleCreateMemory}>Criar Memória</Button>
            </div>
          </div>
        </div>
      </LayoutSidebar>
    </ThemeProvider>
  );
}

export default Memorias;
