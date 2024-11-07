import LayoutSidebar from "@/apps/layoutSidebar"
import { ThemeProvider } from "@/components/theme-provider";


function Memorias() {
  return (
    <div>
        <ThemeProvider>
          <LayoutSidebar children={undefined} />
          
        </ThemeProvider>
    </div>
  )
}

export default Memorias
