import { useState, useEffect } from "react";
import { Link } from "react-router";

import townPhoto from "@/assets/images/town-photo.jpg";
import museum from "@/assets/images/Museum.jpg";
import antique from "@/assets/images/antique.jpg";
import herlongMansion from "@/assets/images/herlong-mansion.png";
import paynes from "@/assets/images/paynes-prarie.png";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);

  // Track scroll position for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 800);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Town data for Micanopy
  const townData = {
    townName: "Micanopy",
    tagline: "Florida's Oldest Inland Town - Est. 1821",
    heroImageUrl: townPhoto,
    stats: [
      { label: "Founded", value: "1821" },
      { label: "Population", value: "~600"},
      { label: "Historic District", value: "470 acres" },
      { label: "Antique Shops", value: "12+" },
    ],
    attractions: [
      {
        id: 1,
        name: "Herlong Mansion",
        description:
          "Historic bed & breakfast showcasing early 20th century elegance and Southern charm.",
        imageUrl: herlongMansion,
        category: "landmark",
      },
      {
        id: 2,
        name: "Micanopy Museum",
        description:
          "Preserving the rich heritage of Florida's oldest inland town through artifacts and exhibits.",
        imageUrl: museum,
        category: "culture",
      },
      {
        id: 3,
        name: "Antique District",
        description:
          "Browse through charming shops filled with treasures from bygone eras.",
        imageUrl: antique,
        category: "landmark",
      },
      {
        id: 4,
        name: "Paynes Prairie Preserve",
        description:
          "A vast savanna with wild horses, bison, and abundant wildlife just minutes from town.",
        imageUrl: paynes,
        category: "nature",
      },
    ],
    upcomingEvents: [
      {
        id: 1,
        name: "Micanopy Fall Harvest Festival",
        date: "October 2025",
        description:
          "Annual celebration featuring artisans, craftspeople, music, and local food.",
      },
      {
        id: 2,
        name: "Historic Walking Tour",
        date: "Every Saturday, 10am",
        description:
          "Guided tour through Micanopy's storied past and historic buildings.",
      },
      {
        id: 3,
        name: "Antique Fair",
        date: "First Sunday monthly",
        description:
          "Special displays and sales throughout the town's renowned antique district.",
      },
    ],
    categoryDescriptions: {
      all: "All places of interest in and around town",
      landmark: "Historical buildings and notable locations",
      nature: "Parks, preserves, and natural wonders",
      culture: "Museums, art galleries, and cultural sites"
    }
  };

  // Filter attractions based on selected category
  const filteredAttractions =
    selectedCategory === "all"
      ? townData.attractions
      : townData.attractions.filter(
          (attraction) => attraction.category === selectedCategory
        );

  // Vintage separator component for reuse
  const VintageSeparator = ({ className = "" }) => (
    <div className={`flex items-center justify-center py-4 ${className}`}>
      <div className="w-24 h-1 bg-amber-200 mx-4"></div>
      <div className="text-amber-200 text-3xl font-serif">⚜</div>
      <div className="w-24 h-1 bg-amber-200 mx-4"></div>
    </div>
  );

  return (
    <div className="bg-amber-50 text-amber-900 min-h-screen">
      {/* Hero Section with Vintage Styling */}
      <section
        className="relative h-screen max-h-[800px] bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${townData.heroImageUrl})` }}
      >
        <div className="absolute inset-0 bg-amber-900 opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-amber-50 px-4">
          <div className="border-8 border-double border-amber-200/80 p-8 max-w-4xl mx-auto text-center bg-amber-900/70 shadow-2xl">
            <h1 className="text-6xl md:text-7xl font-serif mb-4 text-center tracking-wide" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
              {townData.townName}
            </h1>
            <div className="w-40 h-1 bg-amber-200 mx-auto mb-6"></div>
            <p className="text-2xl font-serif max-w-3xl text-center mb-4" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.5)" }}>
              {townData.tagline}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <Link
              to="/gallery"
              className="px-8 py-4 bg-amber-800 text-amber-100 border-2 border-double border-amber-200 rounded-none hover:bg-amber-700 transition-colors text-lg font-serif uppercase tracking-widest"
            >
              Explore Gallery
            </Link>
            <Link
              to="/timeline"
              className="px-8 py-4 bg-transparent text-amber-100 border-2 border-double border-amber-200 rounded-none hover:bg-amber-800/50 transition-colors text-lg font-serif uppercase tracking-widest"
            >
              Town Timeline
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <div className="text-amber-100 text-4xl animate-bounce" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.5)" }}>
            <i className="fas fa-chevron-down"></i>
          </div>
        </div>
      </section>

      {/* Vintage Separator */}
      <div className="relative h-24 overflow-hidden bg-amber-800">
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[url('/images/vintage-pattern.png')] bg-repeat"></div>
        </div>
        <VintageSeparator />
      </div>

      {/* Town Stats Section with Enhanced Vintage Cards */}
      <section className="py-20 bg-amber-100 relative min-h-[400px]" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-center relative inline-block">
              Town Heritage
            </h2>
            <div className="w-40 h-1 bg-amber-800 mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {townData.stats.map((stat, index) => (
              <div
                key={index}
                className="bg-amber-50 p-8 border-2 border-amber-300 shadow-md hover:shadow-lg transition-shadow text-center relative"
                style={{ backgroundImage: "url('/images/old-paper.jpg')", backgroundBlendMode: "overlay", backgroundSize: "cover" }}
              >
                <div className="absolute top-2 right-2 text-2xl text-amber-700 opacity-50">
                </div>
                <h3 className="text-xl font-serif mb-2">{stat.label}</h3>
                <p className="text-4xl font-serif text-amber-800">
                  {stat.value}
                </p>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-r-2 border-b-2 border-amber-500 opacity-50"></div>
                <div className="absolute -top-1 -left-1 w-4 h-4 border-l-2 border-t-2 border-amber-500 opacity-50"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vintage Quote Section */}
      <section className="py-16 bg-amber-800 text-amber-100" data-aos="fade">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <VintageSeparator className="mb-6" />
          <p className="text-3xl font-serif italic" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.3)" }}>
            "Micanopy is a place where time slows down, where the past is
            celebrated, and where every building tells a story."
          </p>
          <div className="w-16 h-1 bg-amber-200 mx-auto my-6"></div>
          <p className="text-xl">— Local Historian</p>
          <VintageSeparator className="mt-6" />
        </div>
      </section>

      {/* Featured Attractions Section with Vintage Styling */}
      <section className="py-20 bg-amber-50 relative min-h-[600px]" data-aos="fade-up">
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[url('/pages/images/old-paper.jpg')] bg-cover"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-4xl font-serif mb-4 md:mb-0 relative">
              Discover Micanopy
              <span className="absolute -bottom-3 left-0 w-full h-1 bg-amber-300"></span>
            </h2>
            <Link
              to="/gallery"
              className="text-amber-800 hover:text-amber-600 font-serif text-lg flex items-center border-b-2 border-amber-300 hover:border-amber-500 transition-colors"
            >
              View Complete Gallery <span className="ml-2">→</span>
            </Link>
          </div>

          {/* Category Filters with Vintage Styling */}
          <div className="flex flex-col items-center mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              <button
                className={`px-6 py-3 font-serif text-lg border-2 ${
                  selectedCategory === "all"
                    ? "bg-amber-800 text-amber-100 border-amber-700"
                    : "bg-amber-100 text-amber-800 border-amber-300 hover:bg-amber-200"
                } rounded-t-sm rounded-b-none tracking-wide`}
                onClick={() => setSelectedCategory("all")}
              >
                All
              </button>
              <button
                className={`px-6 py-3 font-serif text-lg border-2 ${
                  selectedCategory === "landmark"
                    ? "bg-amber-800 text-amber-100 border-amber-700"
                    : "bg-amber-100 text-amber-800 border-amber-300 hover:bg-amber-200"
                } rounded-t-sm rounded-b-none tracking-wide`}
                onClick={() => setSelectedCategory("landmark")}
              >
                Landmarks
              </button>
              <button
                className={`px-6 py-3 font-serif text-lg border-2 ${
                  selectedCategory === "nature"
                    ? "bg-amber-800 text-amber-100 border-amber-700"
                    : "bg-amber-100 text-amber-800 border-amber-300 hover:bg-amber-200"
                } rounded-t-sm rounded-b-none tracking-wide`}
                onClick={() => setSelectedCategory("nature")}
              >
                Natural Beauty
              </button>
              <button
                className={`px-6 py-3 font-serif text-lg border-2 ${
                  selectedCategory === "culture"
                    ? "bg-amber-800 text-amber-100 border-amber-700"
                    : "bg-amber-100 text-amber-800 border-amber-300 hover:bg-amber-200"
                } rounded-t-sm rounded-b-none tracking-wide`}
                onClick={() => setSelectedCategory("culture")}
              >
                Cultural Heritage
              </button>
            </div>
            {/* Description for selected category */}
            <p className="text-amber-700 italic mt-2 text-center">
              {townData.categoryDescriptions[selectedCategory as keyof typeof townData.categoryDescriptions]}
            </p>
          </div>

          {/* Attractions Grid with Vintage Photo Styling */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {filteredAttractions.map((attraction) => (
              <div
                key={attraction.id}
                className="flex flex-col bg-white border-2 border-amber-300 overflow-hidden shadow-md hover:shadow-xl hover:border-amber-400 transition-all duration-300 group"
                data-aos="fade-up"
              >
                {/* Image container */}
                <div className="h-60 overflow-hidden border-b border-amber-200 relative flex-shrink-0"> {/* Added flex-shrink-0 to prevent image container from shrinking */}
                  <img
                    src={attraction.imageUrl}
                    alt={attraction.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500 filter sepia hover:sepia-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60 pointer-events-none"></div>
                  <div className="absolute inset-0 border-8 border-white opacity-20 pointer-events-none"></div>
                </div>
                {/* Content container */}
                <div className="p-6 relative flex flex-col flex-grow">
                  <div className="absolute -top-1 -right-1 w-4 h-4 border-r-2 border-t-2 border-amber-400 opacity-50"></div>
                  <div className="absolute -bottom-1 -left-1 w-4 h-4 border-l-2 border-b-2 border-amber-400 opacity-50"></div>

                  <h3 className="text-xl font-serif mb-2">{attraction.name}</h3>
                  <p className="text-amber-800 mb-4">
                    {attraction.description}
                  </p>
                  {/* Category Tag*/}
                  <span
                    className={`mt-auto inline-block py-1 text-sm border w-24 text-center truncate ${ // <- Added w-24, text-center, truncate
                      attraction.category === "landmark"
                        ? "border-amber-300 bg-amber-100 text-amber-800"
                        : attraction.category === "nature"
                        ? "border-green-300 bg-green-50 text-green-800"
                        : attraction.category === "food"
                        ? "border-red-300 bg-red-50 text-red-800"
                        : "border-purple-300 bg-purple-50 text-purple-800"
                    }`}
                  >
                    {attraction.category.charAt(0).toUpperCase() +
                      attraction.category.slice(1)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Upcoming Events Section with Vintage Calendar Style */}
      <section className="py-20 bg-amber-800 text-amber-50 relative" data-aos="fade">
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[url('/images/vintage-pattern.png')] bg-repeat"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4">Community Events</h2>
            <div className="w-24 h-1 bg-amber-200 mx-auto mb-4"></div>
            <p className="text-xl max-w-3xl mx-auto">
              Experience the charm of Micanopy through our community gatherings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {townData.upcomingEvents.map((event, index) => (
              <div
                key={event.id}
                className="bg-amber-900 p-8 border-2 border-double border-amber-700 shadow-md hover:shadow-lg transition-all group relative"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="absolute top-4 right-4 text-2xl text-amber-200 opacity-70">
                </div>
                <h3 className="text-2xl font-serif mb-2">{event.name}</h3>
                <div className="w-12 h-0.5 bg-amber-200 mb-4"></div>
                <p className="text-amber-200 font-serif mb-4">{event.date}</p>
                <p className="text-amber-100">{event.description}</p>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-r-2 border-b-2 border-amber-500 opacity-30"></div>
                <div className="absolute -top-1 -left-1 w-4 h-4 border-l-2 border-t-2 border-amber-500 opacity-30"></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/timeline"
              className="inline-block px-8 py-4 bg-transparent text-amber-100 border-2 border-double border-amber-200 hover:bg-amber-700 transition-colors text-lg font-serif uppercase tracking-wider"
            >
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section with Vintage Photo Background */}
      <section
        className="py-24 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/micanopy-street.jpg')" }}
        data-aos="fade"
      >
        <div className="absolute inset-0 bg-amber-900 opacity-70"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-amber-100">
          <h2 className="text-4xl md:text-5xl font-serif mb-6" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.5)" }}>
            Share Your Micanopy Memories
          </h2>
          <div className="w-24 h-1 bg-amber-200 mx-auto mb-6"></div>
          <p className="text-xl mb-10 max-w-3xl mx-auto" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.3)" }}>
            Do you have historical photographs, family stories, or memories
            about our town? Help us preserve Micanopy's rich heritage by
            contributing to our gallery.
          </p>
          <Link
            to="/submit"
            className="inline-block px-8 py-4 bg-amber-100 text-amber-900 border-2 border-double border-amber-200 hover:bg-white transition-colors text-lg font-serif uppercase tracking-wider shadow-md"
          >
            Submit Your Content
          </Link>
        </div>
      </section>

      {/* Vintage Footer Decoration */}
      <div className="h-16 bg-amber-800 flex items-center justify-center">
        <VintageSeparator />
      </div>

      {/* Back to Top Button with Vintage Styling */}
      {showBackToTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-amber-800 text-amber-100 p-3 border-2 border-double border-amber-300 shadow-lg z-50 hover:bg-amber-700 transition-colors"
          aria-label="Back to top"
        >
          <span className="block text-xl">↑</span>
          <span className="text-xs font-serif tracking-wide">TOP</span>
        </button>
      )}
    </div>
  );
}


export default Home;