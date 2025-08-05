import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Navbar } from "@/components/Navbar";
import { DashboardContent } from "@/components/DashboardContent";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen w-full bg-gradient-to-br from-primary/5 via-background to-accent/10 relative overflow-hidden">
        {/* Background gradient effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/15"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/5 via-transparent to-slate-500/10"></div>
        
        {/* Floating orbs for ambient effect */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary/15 rounded-full blur-2xl"></div>
        
        <div className="flex w-full relative z-10">
          <AppSidebar />
          <div className="flex-1 flex flex-col">
            <Navbar />
            <main className="flex-1">
              <DashboardContent />
            </main>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
