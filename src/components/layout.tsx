import Navbar from "@/components/navbar";
import { Outlet } from "react-router";
import Footer from "./footer";

function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
