import NavbarProvider from "@/context/navbar-context";
import NavigationBar from "../ui/navbar/navigation-bar";

export default function Header() {
  return (
    <header className="fixed z-60 top-0 left-1/2 -translate-x-1/2 font-extrabold text-gold">
      <NavbarProvider>
        <NavigationBar />
      </NavbarProvider>
    </header>
  );
}
