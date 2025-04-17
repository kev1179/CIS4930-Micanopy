import { useState, useEffect } from "react"; 

import coverPhoto from "@/assets/images/about-cover.jpg";
import townPhoto from "@/assets/images/town-photo.jpg";
import herlongMansion from "@/assets/images/herlong-mansion.png";
import tyler from "@/assets/headshots/tylerlandtroop.jpeg";
import maiah from "@/assets/headshots/maiah_jaffa_headshot.jpg";
import randol from "@/assets/headshots/randolrecio.jpg";
import aily from "@/assets/headshots/aily_headshot.jpg";


const About = () => {
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const VintageSeparator = ({ className = "" }: { className?: string }) => (
    <div className={`flex items-center justify-center py-4 ${className}`}>
      <div className="w-24 h-1 bg-amber-200 mx-4"></div>
      <div className="text-amber-200 text-3xl font-serif">⚜</div>
      <div className="w-24 h-1 bg-amber-200 mx-4"></div>
    </div>
  );

  const VintageInfoCard = ({ title, children, className = "" }: { title?: string, children: React.ReactNode, className?: string }) => (
    <div
        className={`bg-white border-2 border-amber-300 overflow-hidden shadow-md hover:shadow-lg hover:border-amber-400 transition-all duration-300 group ${className}`}
    >
      <div className="p-6 relative">
        <div className="absolute -top-1 -right-1 w-4 h-4 border-r-2 border-t-2 border-amber-400 opacity-60"></div>
        <div className="absolute -bottom-1 -left-1 w-4 h-4 border-l-2 border-b-2 border-amber-400 opacity-60"></div>

        {title && ( 
             <h3 className="text-2xl sm:text-3xl font-serif font-bold text-amber-900 mb-4">{title}</h3>
        )}
        <div className="text-base text-amber-800 font-serif space-y-4">{children}</div>
      </div>
    </div>
  );

  // Image Display
  const SectionImage = ({ imgSrc, alt }: { imgSrc?: string, alt: string }) => (
      <div className="h-60 overflow-hidden border-b-4 border-double border-amber-200 relative flex-shrink-0">
          <img
              src={imgSrc}
              alt={alt}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter sepia-[0.3] group-hover:sepia-0" 
          />
           <div className="absolute inset-0 border-8 border-amber-50 opacity-50 pointer-events-none"></div>
      </div>
  );

  // Team Member Display
  const TeamMember = ({ name, role, imgSrc }: { name: string, role: string, imgSrc?: string }) => (
      <div className="text-center flex flex-col items-center">
          <div className="w-32 h-32 mb-4 relative overflow-hidden rounded-full border-4 border-amber-300 shadow-sm group">
              {imgSrc ? (
                  <img
                      src={imgSrc}
                      alt={name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 filter sepia-[0.3] group-hover:sepia-0"
                  />
              ) : (
                  <div className="w-full h-full bg-amber-100 flex items-center justify-center">
                      <span className="text-4xl text-amber-400 font-serif">?</span>
                  </div>
              )}
          </div>
          <h3 className="text-lg font-serif text-amber-900 font-semibold">{name}</h3>
          <p className="text-amber-700 text-sm font-serif">{role}</p>
      </div>
  );


  return (
    <div className="flex flex-col bg-amber-50 min-h-screen">

      {/* Hero Section */}
      <section
        className="relative w-full h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${coverPhoto})` }}
      >
        <div className="absolute inset-0 bg-amber-900 opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-amber-50 px-4">
          <div className="border-8 border-double border-amber-200/80 p-8 max-w-4xl mx-auto text-center bg-amber-900/70 shadow-2xl">
            <h1 className="text-5xl md:text-6xl font-serif mb-4 tracking-wide" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
              Preserving Micanopy's Living History
            </h1>
             <div className="w-40 h-1 bg-amber-200 mx-auto mt-4"></div>
          </div>
        </div>
      </section>

      <div className="flex-grow w-full px-4 pt-16 pb-10 flex flex-col items-center">

        {/* Mission Statement */}
        <section className="w-full max-w-4xl my-12 text-center">
           <VintageSeparator className="mb-8"/>
           <h2 className="text-3xl font-serif font-bold text-amber-900 mb-4">Our Mission</h2>
           <p className="text-lg text-amber-800 leading-relaxed">
            Micanopy Gallery serves as a digital time capsule for Micanopy,
            Florida's oldest inland town. Our mission is to collect, preserve,
            and share the rich tapestry of stories, images, and memories that make our community
            unique for generations to come.
          </p>
           <VintageSeparator className="mt-8"/>
        </section>

        {/* Main Content Sections */}
        <div className="w-full max-w-6xl grid gap-16">

          {/* Our Story Section */}
          <section className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center"> 
            <div className="md:col-span-3">
                <VintageInfoCard title="Our Story">
                    <p>
                    Founded in 2025, Micanopy Gallery began as a collaborative
                    project born from a shared passion for ensuring Micanopy's historical legacy remains vibrant and
                    accessible for future generations. From the charming antique shops lining Cholokka Boulevard to
                    the stately historic buildings whispering tales of the past, from cherished family stories passed down
                    through time to the lively community celebrations that bind us together – our digital gallery
                    aims to capture the enduring essence of Florida's most remarkable small town.
                    </p>
                </VintageInfoCard>
            </div>
            <div className="md:col-span-2"> 
                <SectionImage imgSrc={townPhoto} alt="Historic Micanopy Street"/>
            </div>
          </section>

          <VintageSeparator/>

          {/* About Micanopy Section */}
          <section className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2 md:order-first">
              <SectionImage imgSrc={herlongMansion} alt="Herlong Mansion"/>
            </div>
             <div className="md:col-span-3">
                <VintageInfoCard title="About Micanopy">
                    <p>
                    Established in 1821, Micanopy holds the proud distinction of being
                    Florida's oldest inland town. Named after a respected Seminole chief,
                    our town has diligently preserved its unique historic character through
                    generations. With its renowned antique shops, beautifully maintained historic buildings,
                    and tranquil canopy roads shaded by ancient oaks, Micanopy's timeless atmosphere continues
                    to charm visitors and residents alike, offering a glimpse into Old Florida life.
                    </p>
                </VintageInfoCard>
            </div>
          </section>

          <VintageSeparator/>

          {/* Community Impact Section */}
          <section className="w-full max-w-4xl mx-auto"> {/* Centered this section */}
            <VintageInfoCard title="Community Impact">
                <p className="mb-4">
                  This digital gallery represents a collective effort to:
                </p>
                {/* Improved list styling */}
                <ul className="list-none pl-4 space-y-2">
                  <li className="flex items-start"><span className="text-amber-700 mr-2 mt-1">⚜</span> Document and preserve local history for education and research.</li>
                  <li className="flex items-start"><span className="text-amber-700 mr-2 mt-1">⚜</span> Share Micanopy's unique stories across generations, connecting past and present.</li>
                  <li className="flex items-start"><span className="text-amber-700 mr-2 mt-1">⚜</span> Support local businesses and enhance heritage tourism appeal.</li>
                  <li className="flex items-start"><span className="text-amber-700 mr-2 mt-1">⚜</span> Foster community pride and celebrate Micanopy's ongoing story.</li>
                </ul>
                <p className="mt-6 italic">
                  Our gallery is built by the community, for the community.
                  Residents are invited to contribute historical photos, documents, and personal
                  stories. Each submission is carefully reviewed and curated, adding to our
                  growing digital archive of Micanopy's rich heritage.
                </p>
            </VintageInfoCard>
          </section>

           <VintageSeparator/>

          {/* Our Team */}
          <section className="w-full max-w-5xl mx-auto">
             <VintageInfoCard title="Our Team">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10 justify-items-center">
                  <TeamMember name="Randol Recio" role="Software Engineer" imgSrc={randol}/>
                  <TeamMember name="Tyler Landtroop" role="Software Engineer" imgSrc={tyler} />
                  <TeamMember name="Ai-Ly Mai" role="Software Engineer" imgSrc={aily} />
                  <TeamMember name="Maiah Jaffa" role="Software Engineer" imgSrc={maiah} />
                  <TeamMember name="Kevin Mosley" role="Software Engineer" />
                </div>
             </VintageInfoCard>
          </section>
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
};

export default About;