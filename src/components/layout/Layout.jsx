import { Outlet } from "react-router-dom";
import Header from "./AppHeader";
import Footer from "./AppFooter";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

