import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

export function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Only smooth scroll if we are not already at the top
    if (window.scrollY > 0) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
