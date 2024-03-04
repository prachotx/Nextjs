import Dashboard from "@/components/main-components/Dashboard";
import Sidebar from "@/components/main-components/Sidebar";


export const metadata = {
  title: 'Dashboard'
}

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <Dashboard />
    </div>
  );
}
