import Navbar from "@/components/navbar";
import { Outlet } from "react-router";
import Footer from "./footer";

function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-8">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
