import { useState } from "react";
import { Link } from "react-router";
import townPhoto from "./images/town-photo.jpg";
import museum from "./images/Museum.jpg";
import antique from "./images/antique.jpg";
import herlongMansion from "./images/herlong-mansion.png";
import paynes from "./images/paynes-prarie.png";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Town data for Micanopy
  const townData = {
    townName: "Micanopy",
    tagline: "Florida's Oldest Inland Town - Est. 1821",
    heroImageUrl: townPhoto,
    stats: [
      { label: "Founded", value: "1821" },
      { label: "Population", value: "~600" },
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
        name: "Micanopy Historical Museum",
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
  };

  // Filter attractions based on selected category
  const filteredAttractions =
    selectedCategory === "all"
      ? townData.attractions
      : townData.attractions.filter(
          (attraction) => attraction.category === selectedCategory
        );

  return (
    <div className="bg-amber-50 text-amber-900">
      {/* Hero Section with Vintage Styling */}
      <section
        className="relative h-screen max-h-[800px] bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${townData.heroImageUrl})` }}
      >
        <div className="absolute inset-0 bg-amber-900 opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-amber-50 px-4">
          <div className="border-8 border-double border-amber-200/80 p-8 max-w-4xl mx-auto text-center bg-amber-900/60">
            <h1 className="text-6xl font-serif mb-4 text-center">
              {townData.townName}
            </h1>
            <div className="w-40 h-1 bg-amber-200 mx-auto mb-4"></div>
            <p className="text-2xl font-serif max-w-3xl text-center mb-4">
              {townData.tagline}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <Link
              to="/gallery"
              className="px-8 py-4 bg-amber-800 text-amber-100 border border-amber-200 rounded-none hover:bg-amber-700 transition-colors text-lg font-serif uppercase tracking-widest"
            >
              Explore Gallery
            </Link>
            <Link
              to="/timeline"
              className="px-8 py-4 bg-transparent text-amber-100 border border-amber-200 rounded-none hover:bg-amber-800/50 transition-colors text-lg font-serif uppercase tracking-widest"
            >
              Town Timeline
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <div className="text-amber-100 text-4xl animate-bounce">
            <i className="fas fa-chevron-down"></i>
          </div>
        </div>
      </section>

      {/* Vintage Separator */}
      <div className="relative h-24 overflow-hidden bg-amber-800">
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[url('/images/vintage-pattern.png')] bg-repeat"></div>
        </div>
        <div className="h-full flex items-center justify-center">
          <div className="w-24 h-1 bg-amber-200 mx-4"></div>
          <div className="text-amber-200 text-3xl font-serif">⚜</div>
          <div className="w-24 h-1 bg-amber-200 mx-4"></div>
        </div>
      </div>

      {/* Town Stats Section with Vintage Cards */}
      <section className="py-20 bg-amber-100 relative">
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[url('/images/old-paper.jpg')] bg-cover"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <h2 className="text-4xl font-serif text-center mb-16">
            Town Heritage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {townData.stats.map((stat, index) => (
              <div
                key={index}
                className="bg-amber-50 p-8 border border-amber-300 shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <h3 className="text-xl font-serif mb-2">{stat.label}</h3>
                <p className="text-4xl font-serif text-amber-800">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vintage Quote Section */}
      <section className="py-16 bg-amber-800 text-amber-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-3xl font-serif italic">
            "Micanopy is a place where time slows down, where the past is
            celebrated, and where every building tells a story."
          </p>
          <div className="w-16 h-1 bg-amber-200 mx-auto my-6"></div>
          <p className="text-xl">— Local Historian</p>
        </div>
      </section>

      {/* Featured Attractions Section with Vintage Styling */}
      <section className="py-20 bg-amber-50 relative">
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[url('/images/old-paper.jpg')] bg-cover"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-4xl font-serif mb-4 md:mb-0">
              Discover Micanopy
            </h2>
            <Link
              to="/gallery"
              className="text-amber-800 hover:text-amber-600 font-serif text-lg flex items-center border-b-2 border-amber-300"
            >
              View Complete Gallery <span className="ml-2">→</span>
            </Link>
          </div>

          {/* Category Filters with Vintage Styling */}
          <div className="flex flex-wrap justify-center mb-12 gap-3">
            <button
              className={`px-6 py-3 font-serif text-lg border ${
                selectedCategory === "all"
                  ? "bg-amber-800 text-amber-100 border-amber-700"
                  : "bg-amber-100 text-amber-800 border-amber-300 hover:bg-amber-200"
              }`}
              onClick={() => setSelectedCategory("all")}
            >
              All
            </button>
            <button
              className={`px-6 py-3 font-serif text-lg border ${
                selectedCategory === "landmark"
                  ? "bg-amber-800 text-amber-100 border-amber-700"
                  : "bg-amber-100 text-amber-800 border-amber-300 hover:bg-amber-200"
              }`}
              onClick={() => setSelectedCategory("landmark")}
            >
              Landmarks
            </button>
            <button
              className={`px-6 py-3 font-serif text-lg border ${
                selectedCategory === "nature"
                  ? "bg-amber-800 text-amber-100 border-amber-700"
                  : "bg-amber-100 text-amber-800 border-amber-300 hover:bg-amber-200"
              }`}
              onClick={() => setSelectedCategory("nature")}
            >
              Natural Beauty
            </button>
            <button
              className={`px-6 py-3 font-serif text-lg border ${
                selectedCategory === "culture"
                  ? "bg-amber-800 text-amber-100 border-amber-700"
                  : "bg-amber-100 text-amber-800 border-amber-300 hover:bg-amber-200"
              }`}
              onClick={() => setSelectedCategory("culture")}
            >
              Cultural Heritage
            </button>
          </div>

          {/* Attractions Grid with Vintage Photo Styling */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredAttractions.map((attraction) => (
              <div
                key={attraction.id}
                className="bg-white border border-amber-300 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="h-60 overflow-hidden border-b border-amber-200 relative">
                  <img
                    src={attraction.imageUrl}
                    alt={attraction.name}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500 sepia hover:sepia-0"
                  />
                  <div className="absolute inset-0 border-8 border-white opacity-20 pointer-events-none"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif mb-2">{attraction.name}</h3>
                  <p className="text-amber-800 mb-4">
                    {attraction.description}
                  </p>
                  <span
                    className={`inline-block px-4 py-1 text-sm border ${
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
      <section className="py-20 bg-amber-800 text-amber-100 relative">
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
            {townData.upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-amber-900 p-8 border border-amber-700 shadow-md hover:shadow-lg transition-all"
              >
                <h3 className="text-2xl font-serif mb-2">{event.name}</h3>
                <div className="w-12 h-0.5 bg-amber-200 mb-4"></div>
                <p className="text-amber-200 font-serif mb-4">{event.date}</p>
                <p className="text-amber-100">{event.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/timeline"
              className="inline-block px-8 py-4 bg-transparent text-amber-100 border border-amber-200 hover:bg-amber-700 transition-colors text-lg font-serif uppercase tracking-wider"
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
      >
        <div className="absolute inset-0 bg-amber-900 opacity-70"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-amber-100">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Share Your Micanopy Memories
          </h2>
          <div className="w-24 h-1 bg-amber-200 mx-auto mb-6"></div>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Do you have historical photographs, family stories, or memories
            about our town? Help us preserve Micanopy's rich heritage by
            contributing to our gallery.
          </p>
          <Link
            to="/submit"
            className="inline-block px-8 py-4 bg-amber-100 text-amber-900 border border-amber-200 hover:bg-white transition-colors text-lg font-serif uppercase tracking-wider"
          >
            Submit Your Content
          </Link>
        </div>
      </section>

      {/* Newsletter Section with Vintage Paper Background */}
      <section className="py-20 bg-amber-50 relative">
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[url('/images/old-paper.jpg')] bg-cover"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <h2 className="text-4xl font-serif mb-4">Stay Connected</h2>
          <div className="w-24 h-1 bg-amber-800 mx-auto mb-6"></div>
          <p className="text-xl text-amber-800 mb-10">
            Subscribe to our town gazette to receive updates about events,
            historical findings, and community news.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow px-5 py-4 bg-white border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-amber-900"
            />
            <button className="px-8 py-4 bg-amber-800 text-amber-100 border border-amber-700 hover:bg-amber-700 transition-colors font-serif uppercase tracking-wider">
              Subscribe
            </button>
          </div>
          <p className="mt-4 text-amber-700 text-sm font-serif">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Vintage Footer Decoration */}
      <div className="h-16 bg-amber-800 flex items-center justify-center">
        <div className="text-amber-200 text-3xl font-serif">⚜</div>
      </div>
    </div>
  );
}

export default Home;
