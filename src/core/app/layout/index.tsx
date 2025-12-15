import { Outlet } from "react-router-dom";

import Navbar from "./components/navbar";

function RootLayout() {
  return (
    <div className="transition-all relative min-h-screen flex flex-col justify-between overflow-hidden supports-[overflow:clip]:overflow-clip">
      <div className="relative w-full ">
        <Navbar />
        <div className="relative w-auto h-full mx-auto p-2 mt-5">
          <main className="w-full mx-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

export default RootLayout;
