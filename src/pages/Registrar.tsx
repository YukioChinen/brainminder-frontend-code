import { ThemeProvider } from "@/components/theme-provider";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import logo from "@/images/logo.svg";
import { Link } from "react-router-dom";

export function ButtonOutline() {
  return (
    <Button
      variant="outline"
      className="w-full px-4 py-2 mt-4 text-white rounded-lg"
    >
      Registrar
    </Button>
  );
}

export function InputField({ type, placeholder, id }: { type: string; placeholder: string; id: string }) {
  return <Input type={type} placeholder={placeholder} id={id} />;
}

function Registrar() {
  return (
    <ThemeProvider>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-zinc-950 text-center">
            Registrar
          </h2>
          <form className="mt-4">
            <div className="mb-4">
              <label htmlFor="first-name" className="block text-sm font-medium text-zinc-950">
                Primeiro Nome
              </label>
              <InputField type="text" placeholder="Digite seu primeiro nome" id="first-name" />
            </div>
            <div className="mb-4">
              <label htmlFor="last-name" className="block text-sm font-medium text-zinc-950">
                Último Nome
              </label>
              <InputField type="text" placeholder="Digite seu último nome" id="last-name" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-zinc-950">
                Email
              </label>
              <InputField type="email" placeholder="Digite seu email" id="email" />
            </div>
            <div className="mb-4">
              <label htmlFor="cpf" className="block text-sm font-medium text-zinc-950">
                CPF
              </label>
              <InputField type="text" placeholder="Digite seu CPF" id="cpf" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-zinc-950">
                Senha
              </label>
              <InputField type="password" placeholder="Digite sua senha" id="password" />
            </div>
            <ButtonOutline />
          </form>
          <div className="flex flex-col items-center justify-center mt-20">
            <img src={logo} alt="Logo" className="size-24" />
            <div className="font-jsmath text-black">BrainMinder</div>
          </div>
          <div className="flex items-center justify-center mt-8">
            <div className="text-zinc-950 flex items-center justify-center mr-1">
              Já possui uma conta?
            </div>
            <Link to="/login">
              <button className="text-purple-700 flex items-center justify-center font-semibold">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Registrar;
