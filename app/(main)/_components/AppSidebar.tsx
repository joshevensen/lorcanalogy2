'use client'

import Link from "next/link";
import Image from "next/image";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel, SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem, SidebarRail, useSidebar,
} from "@/components/sidebar";
import {
  IconCards,
  IconPrinter,
  IconNews,
  IconLink,
  IconBook2,
  IconListCheck,
  IconTable,
  IconUserHexagon,
  IconChevronUp
} from "@tabler/icons-react";
import DisneyLorcana from "@/app/_components/DisneyLorcana";
import Lorcanalogy from "@/app/_components/Lorcanalogy";
import {Separator} from "@/components/separator";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/dropdown-menu";

const navMenu = [
  {
    name: 'Tools',
    items: [
      {icon: IconTable, href: '/cards', label: 'Cards'},
      {icon: IconListCheck, href: '/collection', label: 'Collection'},
      {icon: IconCards, href: '/decks', label: 'Decks'},
      {icon: IconPrinter, href: '/proxies', label: 'Proxies'},
    ]
  },
  {
    name: 'Resources',
    items: [
      {icon: IconNews, href: '/articles', label: 'Articles'},
      {icon: IconLink, href: '/links', label: 'Links'},
      {icon: IconBook2, href: '/glossary', label: 'Glossary'},
    ]
  }
]

export default function AppSidebar() {
  const { open } = useSidebar()

  return (
    <Sidebar
      collapsible="icon"
      side="left"
      variant="floating"
    >
      <SidebarContent>
        <SidebarHeader>
          {open ? (<>
              <Image src='/logo.png' alt='Lorcanalogy' width={1080} height={500}/>
              <p className={'text-center text-3xl'}><Lorcanalogy/></p>
              <p className={'text-sm text-center'}>An Unofficial Guide to playing <DisneyLorcana/> by a guy with too much
                time
                on his hands and the ability to make websites.</p>
            </>) :
            (
              <Image src='/favicon.png' alt='Lorcanalogy' width={512} height={512}/>
            )
          }
        </SidebarHeader>

        <Separator/>

        {navMenu.map((group) => (
          <SidebarGroup key={group.name}>
            <SidebarGroupLabel>{group.name}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton asChild>
                      <Link href={item.href}>
                        <item.icon/>
                        <span>{item.label}</span></Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>


      <Separator/>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <IconUserHexagon/> Josh E.
                  <IconChevronUp className="ml-auto"/>
                </SidebarMenuButton>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                side="top"
                align="end"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem>
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail/>
    </Sidebar>
  )
}