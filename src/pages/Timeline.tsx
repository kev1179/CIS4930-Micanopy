import { useState, useEffect } from "react"; 
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; 

const timelineEvents = [
  { year: "1539", title: "Micanopy is Discovered", description: "Spanish explorers find a village in modern day Micanopy inhabited by the Potano tribe." },
  { year: "1821", title: "Micanopy is Founded", description: "Micanopy became the first US town formed in the newly acquired territory of Florida." },
  { year: "1835", title: "Second Seminole War", description: "Fort Defiance and Fort Micanopy became major strategic objectives of the Second Seminole War and many bloody battles occured in the region." },
  { year: "1883", title: "Micanopy gets a Railroad", description: "Florida Southern Railway built a railroad connecting Micanopy to the nearby city Ocala." },
  { year: "1920", title: "Cars come to Micanopy", description: "The Micanopy Causeway was built which allowed cars to cross Paynes Prairie for the first time." },
  { year: "1930", title: "Montgomery Mansion Burns Down", description: "The historic Montgomery home, one of the finest residences in Micanopy surrounded by orange groves, was destroyed by fire." },
  { year: "1950s", title: "Railroad Service Ends", description: "The Thrasher Warehouse, built in 1896, was served by a branch of the Atlantic Coast Line Railroad until the 1950s when rail service to Micanopy ended." },
  { year: "1983", title: "Historic District Created", description: "The downtown Micanopy Historic District was listed on the National Register of Historic Places, recognizing the town's historical significance." },

  { year: "1991", title: "Hollywood Comes to Town", description: "The movie \"Doc Hollywood\" starring Michael J. Fox was filmed in Micanopy, bringing national attention to the charming small town.", hidden: true },
  { year: "2021", title: "Bicentennial Celebration", description: "Micanopy celebrated its 200th anniversary as Florida's oldest inland town that has been continuously inhabited.", hidden: true },
  { year: "2023", title: "Recognition as a Top Historic Town", description: "Micanopy was recognized as one of America's Top 10 Historic Small Towns, highlighting its preservation of Old Florida charm and character.", hidden: true },
  { year: "October 2024", title: "Annual Fall Festival", description: "Micanopy hosted its annual Fall Festival featuring over 200 vendors offering arts, crafts, antiques, plants, and foods, attracting thousands of visitors to the historic town.", hidden: true },
  { year: "2024", title: "Museum Expansion", description: "The Micanopy Historical Society Museum expanded its collection with new exhibits showcasing artifacts from local Native tribes and significant events from the town's rich past.", hidden: true },
  { year: "2025", title: "Preservation Initiative", description: "The town launched a comprehensive initiative to preserve its historic buildings and enhance the downtown area while maintaining its distinctive Old Florida atmosphere and charm.", hidden: true },
];

const annualEvents = [
    { month: "October", title: "Micanopy Fall Festival", description: "Micanopy's biggest annual event features over 200 vendors with arts, crafts, food, and live music along Cholokka Boulevard.", nextDate: "October 25-26, 2025 (50th Anniversary)" },
    { month: "July", title: "Independence Day Celebration", description: "Annual 4th of July festivities with community events, food vendors, and evening fireworks.", nextDate: "July 4, 2025" },
    { month: "Monthly", title: "Library: Craft 'n' Quilt", description: "Monthly gathering at the Micanopy Library where community members share crafting and quilting projects and techniques.", nextDate: "First Tuesday of every month" },
    { month: "Quarterly", title: "Rabbits in the Library!", description: "Children's event at the Micanopy Library featuring storytelling and an educational presentation with live rabbits.", nextDate: "March 15, 2025" }, 
    { month: "Monthly", title: "Recycling Day", description: "Community recycling collection held at the town hall parking lot with educational displays about sustainability.", nextDate: "Last Saturday of every month" },
    { month: "Weekly", title: "Historic Walking Tour", description: "Guided walking tour of historic Micanopy, starting at the Historical Museum and covering significant landmarks in town.", nextDate: "Every Saturday at 10 AM" },
    { month: "December", title: "Holiday Festival of Lights", description: "Downtown Micanopy transforms with festive lights, decorations, and special shopping hours at local shops.", nextDate: "December 5-20, 2025" },
    { month: "Spring", title: "Antique Fair & Market", description: "Special event celebrating Micanopy's reputation as the antiques capital of Florida with vendors, appraisals, and workshops.", nextDate: "May 8-9, 2025" },
];


const Timeline = () => {
  const [showMore, setShowMore] = useState(false);
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

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  // Filter visible timeline events
  const visibleTimelineEvents = showMore ? timelineEvents : timelineEvents.filter(event => !event.hidden);

  // Reusable Vintage Separator Component (Should be imported from shared location)
  const VintageSeparator = ({ className = "" }) => (
    <div className={`flex items-center justify-center py-4 ${className}`}>
      <div className="w-24 h-1 bg-amber-200 mx-4"></div>
      <div className="text-amber-200 text-3xl font-serif">⚜</div>
      <div className="w-24 h-1 bg-amber-200 mx-4"></div>
    </div>
  );

  // Reusable Vintage Card Component
  const VintageInfoCard = ({ title, subTitle, children, className = "" }: { title: string, subTitle: string, children: React.ReactNode, className?: string }) => (
    <div
        className={`bg-white border-2 border-amber-300 overflow-hidden shadow-md hover:shadow-lg hover:border-amber-400 transition-all duration-300 group ${className}`}
    >
      <div className="p-5 sm:p-6 relative">
        <div className="absolute -top-1 -right-1 w-4 h-4 border-r-2 border-t-2 border-amber-400 opacity-60"></div>
        <div className="absolute -bottom-1 -left-1 w-4 h-4 border-l-2 border-b-2 border-amber-400 opacity-60"></div>

        <p className="text-sm font-semibold text-amber-700 font-serif mb-1 uppercase tracking-wider">{subTitle}</p>
        <h3 className="text-xl sm:text-2xl font-serif font-bold text-amber-900 mb-2">{title}</h3> {/* Increased size */}
        <div className="text-base text-amber-800 font-serif">{children}</div>
      </div>
    </div>
  );


  return (
    <div className="flex flex-col bg-amber-50 min-h-screen">
      <div className="flex-grow w-full px-4 pt-24 pb-10 flex flex-col items-center">

        <h1 className="text-4xl font-serif font-bold mb-6 text-amber-900 text-center" style={{ textShadow: "1px 1px 2px rgba(120,53,15,0.2)" }}>
           Micanopy Timeline 
        </h1>
        <div className="w-40 h-1 bg-amber-800 mx-auto mb-6"></div>
        <p className="text-xl text-amber-800 font-serif max-w-3xl mx-auto text-center mb-10">
            Tracing the milestones of Florida's oldest inland town.
        </p>

        <VintageSeparator className="mb-16" />

        {/* Timeline */}
        <div className="relative w-full max-w-3xl mx-auto border-l-4 border-amber-300 pl-8"> 
          {visibleTimelineEvents.map((event, index) => (
            <div key={index} className="mb-12 relative">
              <div className="absolute w-5 h-5 bg-amber-100 border-2 border-amber-800 rounded-full -left-[48px] top-8 flex items-center justify-center">
                 <div className="w-2 h-2 bg-amber-800 rounded-full"></div> 
              </div>
              <VintageInfoCard title={event.title} subTitle={event.year}>
                 <p>{event.description}</p>
              </VintageInfoCard>
            </div>
          ))}

          {/* Shoe More / Fewer */}
          {timelineEvents.some(e => e.hidden) && ( 
            <div className="flex justify-center mt-8 mb-4">
              <button
                onClick={toggleShowMore}
                className="px-8 py-3 bg-amber-800 text-amber-100 border-2 border-double border-amber-200 rounded-none hover:bg-amber-700 transition-colors text-base font-serif uppercase tracking-widest shadow-md hover:shadow-lg"
              >
                {showMore ? "Show Fewer Milestones" : "Show More Milestones"}
              </button>
            </div>
          )}

          {/* Wiki Link  */}
          <div className="mt-8 mb-12 text-center">
             <a
               href="https://en.wikipedia.org/wiki/Micanopy,_Florida" 
               target="_blank"
               rel="noopener noreferrer"
               className="inline-block px-4 py-1 border-b-2 border-amber-400 text-amber-800 hover:text-amber-600 hover:border-amber-600 transition-colors font-serif"
             >
               Learn More (Wikipedia)
             </a>
          </div>
        </div> 

        {/* Events Section */}
        <div className="w-full max-w-7xl mx-auto mt-16 mb-10 px-4"> 

          <VintageSeparator className="mb-10"/>
          <h2 className="text-4xl font-serif font-bold mb-6 text-amber-900 text-center" style={{ textShadow: "1px 1px 2px rgba(120,53,15,0.2)" }}>
             Annual & Upcoming Events
          </h2>
           <div className="w-40 h-1 bg-amber-800 mx-auto mb-12"></div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-stretch">
             {annualEvents.map((event, index) => (
                 <VintageInfoCard key={index} title={event.title} subTitle={event.month} className="flex flex-col">
                    <div className="flex flex-col flex-grow">
                        <p className="mb-4 flex-grow">{event.description}</p>
                        <p className="font-semibold text-amber-700 mt-auto pt-2 border-t border-amber-200">
                            Next: {event.nextDate}
                        </p>
                    </div>
                 </VintageInfoCard>
             ))}
          </div>
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

export default Timeline;