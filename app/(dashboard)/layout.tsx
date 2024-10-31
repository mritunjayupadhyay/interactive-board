import Navbar from "./_components/navbar";
import OrgSidebar from "./_components/org-sidebar";
import Sidebar from "./_components/sidebar";

interface IDashboardLayoutProps {
    children: React.ReactNode;
}

const DashboardLayout = ({ children }: IDashboardLayoutProps) => {
    return (
        <main className="h-full">
            <Sidebar />
            <div className="pl-[60px] h-[100vh]">
                <div className="flex h-full">
                    <OrgSidebar />
                    <div className="h-full flex-1">
                        <Navbar />
                    {children}
                    </div>
                </div>
                
            </div>
        </main>
    )
}

export default DashboardLayout;