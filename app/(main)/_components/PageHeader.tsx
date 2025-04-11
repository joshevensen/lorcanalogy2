'use client'

import * as React from "react";
import {cn} from "@/lib/utils";
import {SidebarTrigger, useSidebar} from "@/components/sidebar";

function PageTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="page-title"
      className={cn("font-bold text-xl", className)}
      {...props}
    />
  )
}

function PageHeader({children}: React.ComponentProps<"div">) {
  const { isMobile } = useSidebar()

  return (
    <div className={'flex items-center gap-2 py-3'}>
      {isMobile && <SidebarTrigger/>}
      {children}
    </div>
  )
}

export {
  PageTitle,
  PageHeader,
}
