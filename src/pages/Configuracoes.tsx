import LayoutSidebar from "@/apps/layoutSidebar"
import { ThemeProvider } from "@/components/theme-provider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"


export function InputNome() {
  return <Input type="text" placeholder="Nome" />
}

export function InputEmail() {
  return <Input type="email" placeholder="Email" />
}

export function InputCPF() {
  return <Input type="text" placeholder="CPF" />
}

export function InputTel() {
  return <Input type="tel" placeholder="Telefone" />
}

export function InputSenha() {
  return <Input type="password" placeholder="Senha" />
}

export function ButtonSecondary() {
  return <Button variant="secondary">Cancelar</Button>
}

export function ButtonOutline() {
  return <Button variant="outline">Alterar Imagem</Button>
}


function Memorias() {
  return (
    <div>
        <ThemeProvider>
          <LayoutSidebar>
            <div>
              <div className="size-max flex flex-col items-center justify-center">
                <div>
                  <Avatar className="size-44"> 
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex-center p-2">
                    <ButtonOutline/>
                  </div>
                </div>
                <div className="p-2">
                  Nome:
                  <InputNome />
                </div>
                <div className="p-2">
                  Email:
                  <InputEmail />
                </div>
                <div className="p-2">
                  CPF:
                  <InputCPF />
                </div>
                <div className="p-2">
                  Telefone:
                  <InputTel />
                </div>
                <div className="p-2">
                  Senha:
                  <InputSenha/>
                </div>
                <div className="p-2 flex">
                  <div className="p-2">
                    <Button>Alterar</Button>
                  </div>
                  <div className="p-2">
                    <ButtonSecondary/>
                  </div>
                  
                </div>
                
              </div>
            </div>
            
          


          </LayoutSidebar>
          
        </ThemeProvider>
    </div>
  )
}

export default Memorias


