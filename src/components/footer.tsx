import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-amber-800 text-amber-100 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-serif mb-4">Micanopy Gallery</h2>
            <p className="text-amber-200 font-serif">
              Preserving Micanopy's legacy, one story at a time.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-xl mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <Link
                to="/"
                className="text-amber-200 hover:text-amber-50 font-serif"
              >
                Home
              </Link>
              <Link
                to="/gallery"
                className="text-amber-200 hover:text-amber-50 font-serif"
              >
                Gallery
              </Link>
              <Link
                to="/timeline"
                className="text-amber-200 hover:text-amber-50 font-serif"
              >
                Timeline
              </Link>
              <Link
                to="/about"
                className="text-amber-200 hover:text-amber-50 font-serif"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-amber-200 hover:text-amber-50 font-serif"
              >
                Contact
              </Link>
              <Link
                to="/submit"
                className="text-amber-200 hover:text-amber-50 font-serif"
              >
                Submit
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-xl mb-4">Connect</h3>
            <p className="text-amber-200 font-serif">
              Follow us on social media for updates and more stories from
              Micanopy's rich history.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-amber-700">
          <p className="text-amber-300 text-sm font-serif text-center">
            &copy; {new Date().getFullYear()} Micanopy Gallery. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
