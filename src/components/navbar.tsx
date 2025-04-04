import { Link, useLocation } from "react-router";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path
      ? "text-amber-800 font-bold"
      : "text-amber-900";
  };

  return (
    <header className="bg-amber-100 border-b border-amber-300 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-serif">
          <Link to="/" className="text-amber-900 hover:text-amber-800">
            Micanopy Gallery
          </Link>
        </h1>

        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <Link
                to="/"
                className={`hover:text-amber-800 font-serif ${isActive("/")}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className={`hover:text-amber-800 font-serif ${isActive(
                  "/gallery"
                )}`}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/timeline"
                className={`hover:text-amber-800 font-serif ${isActive(
                  "/timeline"
                )}`}
              >
                Timeline
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`hover:text-amber-800 font-serif ${isActive(
                  "/about"
                )}`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`hover:text-amber-800 font-serif ${isActive(
                  "/contact"
                )}`}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/submit"
                className={`hover:text-amber-800 font-serif ${isActive(
                  "/submit"
                )}`}
              >
                Submit Photos
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile menu button */}
        <Button
          className="md:hidden bg-amber-800 text-amber-100 hover:bg-amber-700"
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
        <div className="md:hidden border-t border-amber-300 bg-amber-100">
          <ul className="container mx-auto px-4 py-2">
            <li className="py-2">
              <Link
                to="/"
                className={`block hover:text-amber-800 font-serif ${isActive(
                  "/"
                )}`}
              >
                Home
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/gallery"
                className={`block hover:text-amber-800 font-serif ${isActive(
                  "/gallery"
                )}`}
              >
                Gallery
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/timeline"
                className={`block hover:text-amber-800 font-serif ${isActive(
                  "/timeline"
                )}`}
              >
                Timeline
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/about"
                className={`block hover:text-amber-800 font-serif ${isActive(
                  "/about"
                )}`}
              >
                About
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/contact"
                className={`block hover:text-amber-800 font-serif ${isActive(
                  "/contact"
                )}`}
              >
                Contact
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/submit"
                className={`block hover:text-amber-800 font-serif ${isActive(
                  "/submit"
                )}`}
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
