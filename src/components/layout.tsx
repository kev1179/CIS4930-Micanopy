import { Outlet } from "react-router";
import Footer from "./footer";

import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/sonner";

function Layout() {
  return (
    <div className="flex min-h-screen flex-col w-full">
      <Navbar />

      <main>
        <Outlet />
        <Toaster />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
