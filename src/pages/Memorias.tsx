import LayoutSidebar from "@/apps/layoutSidebar"
import { ThemeProvider } from "@/components/theme-provider";
import { Button } from "@/components/ui/button"



function Memorias() {
  return (
        <ThemeProvider>
          <LayoutSidebar> 
            <div className="flex flex-wrap ">
              <div className="p-6">
                <Button className="size-40">
                  <div className="">1</div>
                  <time className="">13 de setembro de 2024</time>
                </Button>
              </div>
              <div className="p-6">
                <Button className="size-40">2</Button>
              </div>
              <div className="p-6">
                <Button className="size-40">3</Button>
              </div>
              <div className="p-6">
                <Button className="size-40">
                  +
                </Button>
              </div>
            </div>
            
          </LayoutSidebar>
          
        </ThemeProvider>
  )
}

export default Memorias
