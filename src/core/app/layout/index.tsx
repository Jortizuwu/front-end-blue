import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";

function RootLayout() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 w-full mx-auto px-2 pt-4 pb-20 md:pb-4">
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
