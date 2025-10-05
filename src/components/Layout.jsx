import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useLenis } from "./hooks/use-lenis";

function Layout() {
  // Initialize smooth scrolling
  useLenis();

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
