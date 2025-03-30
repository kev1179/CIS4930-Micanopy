import { Link, useLocation } from "react-router";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link to="/" className="hover:text-primary">
            Micanopy Gallery
          </Link>
        </h1>

        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <Link to="/" className={`hover:text-primary ${isActive("/")}`}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className={`hover:text-primary ${isActive("/gallery")}`}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/timeline"
                className={`hover:text-primary ${isActive("/timeline")}`}
              >
                Timeline
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`hover:text-primary ${isActive("/about")}`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`hover:text-primary ${isActive("/contact")}`}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/submit"
                className={`hover:text-primary ${isActive("/submit")}`}
              >
                Submit Photos
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile menu button */}
        <Button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          variant="ghost"
          size="icon"
        >
          {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </Button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <ul className="container mx-auto px-4 py-2">
            <li className="py-2">
              <Link
                to="/"
                className={`block hover:text-primary ${isActive("/")}`}
              >
                Home
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/gallery"
                className={`block hover:text-primary ${isActive("/gallery")}`}
              >
                Gallery
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/timeline"
                className={`block hover:text-primary ${isActive("/timeline")}`}
              >
                Timeline
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/about"
                className={`block hover:text-primary ${isActive("/about")}`}
              >
                About
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/contact"
                className={`block hover:text-primary ${isActive("/contact")}`}
              >
                Contact
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/submit"
                className={`block hover:text-primary ${isActive("/submit")}`}
              >
                Submit Photos
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
