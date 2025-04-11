import {SidebarProvider} from "@/components/sidebar";
import AppSidebar from "@/app/(main)/_components/AppSidebar";
import Disclaimer from "@/app/_components/Disclaimer";


export default function RootLayout({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar/>

      <main className="py-2 px-4">
        {children}
        <Disclaimer/>
      </main>
    </SidebarProvider>
  );
}
