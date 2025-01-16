import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isLoggedIn =
    location.pathname === "/dashboard" || location.pathname === "/comparison";

  const links = [
    { name: "Home", path: "/" },
    // { name: "Home 2", path: "/home2" },
    { name: "The Works", path: "/works" },
    { name: "Get Enlightened", path: "/enlightened" },
    { name: "The People", path: "/people" },
    {
      name: isLoggedIn ? "Logout" : "Login",
      path: isLoggedIn ? "/" : "/login",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-trading-background/80 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center overflow-hidden">
            <img
              src="/uploads/dc7f00dd-4fc5-4127-a10b-fd8aaa438465.png"
              alt="Logo"
              className="h-32 w-auto md:h-40 md:-my-6 transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link font-funnel text-lg ${
                  location.pathname === link.path
                    ? "text-trading-primary active-nav-link"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-trading-background border-t border-white/10">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-2 text-white hover:text-trading-primary font-funnel ${
                  location.pathname === link.path ? "text-trading-primary" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
