import { useState, useEffect } from "react";
import { galleryItems } from "@/lib/galleryItems";

function Gallery() {
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down enough
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Same as Vintage Seperator as home.tsx 
  const VintageSeparator = ({ className = "" }) => (
    <div className={`flex items-center justify-center py-4 ${className}`}>
      <div className="w-24 h-1 bg-amber-200 mx-4"></div>
      <div className="text-amber-200 text-3xl font-serif">⚜</div>
      <div className="w-24 h-1 bg-amber-200 mx-4"></div>
    </div>
  );

  return (
    <div className="flex flex-col bg-amber-50 min-h-screen"> 
        <div className="flex-grow w-full px-4 pt-24 pb-10 flex flex-col items-center"> 

          <h1 className="text-4xl font-serif font-bold mb-6 text-amber-900 text-center" style={{ textShadow: "1px 1px 2px rgba(120,53,15,0.2)" }}>
            Gallery
          </h1>
          <div className="w-40 h-1 bg-amber-800 mx-auto mb-6"></div>
          <p className="text-xl text-amber-800 font-serif max-w-3xl mx-auto text-center mb-10">
              Viewing the history, landmarks, and natural beauty of Florida's oldest inland town.
          </p>

          <VintageSeparator className="mb-10" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl"> 
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col bg-white border-2 border-amber-300 overflow-hidden shadow-md hover:shadow-xl hover:border-amber-400 transition-all duration-300 group"
              >
                {/* Image Container with Vintage Effects */}
                <div className="h-60 overflow-hidden border-b-4 border-double border-amber-200 relative flex-shrink-0">
                  <img
                    src={item.src}
                    alt={item.description || `Gallery item ${item.id}`} 
                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500 filter sepia-[0.6] group-hover:sepia-0"
                  />
                  <div className="absolute inset-0 border-8 border-amber-50 opacity-50 pointer-events-none"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/5 opacity-80 pointer-events-none"></div>
                </div>

                {/* Content Container with Vintage Accents  */}
                <div className="p-6 relative flex flex-col flex-grow bg-amber-50/30" style={{ backgroundImage: "url('/images/old-paper.jpg')", backgroundBlendMode: "overlay", backgroundSize: "cover" }}>
                  <div className="absolute -top-1 -right-1 w-4 h-4 border-r-2 border-t-2 border-amber-400 opacity-60"></div>
                  <div className="absolute -bottom-1 -left-1 w-4 h-4 border-l-2 border-b-2 border-amber-400 opacity-60"></div>

                  <p className="text-base text-amber-800 font-serif flex-grow"> 
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div> 
        </div> 

        <div className="h-16 bg-amber-800 flex items-center justify-center mt-auto w-full"> 
           <VintageSeparator />
        </div>


        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-amber-800 text-amber-100 p-3 border-2 border-double border-amber-300 shadow-lg z-50 hover:bg-amber-700 transition-colors"
            aria-label="Back to top"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
            <span className="text-xs font-serif tracking-wide block leading-none">TOP</span>
          </button>
        )}
    </div> 
  );
}

export default Gallery;