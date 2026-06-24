import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { Navbar } from "@/app/components/layout/navbar";
import { Footer } from "@/app/components/layout/footer";

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
    <div className="min-h-[100dvh] flex flex-col overflow-x-hidden bg-background">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
