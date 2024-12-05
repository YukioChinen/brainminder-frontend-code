import * as React from "react"
import { Folder, ScrollText, Settings2, User } from "lucide-react"

import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navSecondary: [
    {
      title: "Configurações",
      url: "/configuracoes",
      icon: Settings2,
    },
    {
      title: "Usuários",
      url: "/usuarios",
      icon: User,
    },
    {
      title: "Memórias",
      url: "/memorias",
      icon: Folder,
    },
    {
      title: "Relatórios",
      url: "/relatorios",
      icon: ScrollText,
    }
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarContent>
        <NavSecondary items={data.navSecondary} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
