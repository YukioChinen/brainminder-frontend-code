import { ThemeProvider } from "@/components/theme-provider";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"
import logo from "@/images/logo.svg"
import { Link } from "react-router-dom";

export function InputEmail() {
    return <Input type="email" placeholder="Email" />
  }
  
export function InputSenha() {
    return <Input type="password" placeholder="Senha" />
  }

  function Login() {

    return (
    <ThemeProvider> 
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold text-zinc-950 text-center">Login</h2>
            <form className="mt-4">
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-zinc-950">
                  Email
                </label>
                <input type="email" id="email" name="email"
                  className="text-black w-full px-4 py-2 mt-1 text-sm border rounded-lg focus:ring-blue-500 focus:border-blue-500 border-gray-300"
                  placeholder="Digite seu email" required/>
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-zinc-950">
                  Senha
                </label>
                <input type="password" id="password" name="password"
                  className="text-black w-full px-4 py-2 mt-1 text-sm border rounded-lg focus:ring-blue-500 focus:border-blue-500 border-gray-300"
                  placeholder="Digite sua senha" required/>
              </div>
              <Button className="w-full px-4 py-2 mt-4 text-white rounded-lg">Login</Button>
            </form>
            <div className="flex flex-col items-center justify-center mt-20">
              <img src={logo} alt="Logo" className="size-24" />
              <div className="font-jsmath text-black">BrainMinder</div>
            </div>

            
            <div className="flex items-center justify-center mt-8">
            <div className="text-zinc-950 flex items-center justify-center mr-1">
              Não possui uma conta?
            </div>
            <Link to="/registrar">
              <button className="text-purple-700 flex items-center justify-center font-semibold" >
                Registre-se
              </button>
            </Link>
            
          </div>

            
          </div>
        </div>
      </ThemeProvider>
    );
  }

  export default Login