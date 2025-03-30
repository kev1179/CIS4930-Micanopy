import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">Micanopy Gallery</h2>
            <p className="text-gray-300">
              Preserving Micanopy's legacy, one story at a time.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <Link to="/" className="text-gray-300 hover:text-white">
                Home
              </Link>
              <Link to="/gallery" className="text-gray-300 hover:text-white">
                Gallery
              </Link>
              <Link to="/timeline" className="text-gray-300 hover:text-white">
                Timeline
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-white">
                About
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-white">
                Contact
              </Link>
              <Link to="/submit" className="text-gray-300 hover:text-white">
                Submit
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Connect</h3>
            <p className="text-gray-300">
              Follow us on social media for updates and more stories from
              Micanopy's rich history.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Micanopy Gallery. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
