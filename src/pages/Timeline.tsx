import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const Timeline = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="flex justify-center px-4 pt-24 pb-10 bg-amber-50 min-h-screen">
      <div className="w-full max-w-full lg:max-w-6xl">
        <h2 className="text-3xl font-serif font-bold mb-10 text-center text-amber-900">
          Micanopy Timeline
        </h2>
        <div className="relative border-l-2 border-amber-300 pl-6 max-w-3xl mx-auto">
          <div className="mb-10 relative">
            <div className="absolute w-3 h-3 bg-amber-800 -left-[7px] top-1/2 -translate-y-1/2 rounded-full"></div>
            <Card className="bg-amber-100 border-amber-200 rounded-none">
              <CardHeader className="pb-2">
                <p className="text-sm text-amber-700 font-serif">1539</p>
                <CardTitle className="text-xl font-serif text-amber-900">
                  Micanopy is Discovered
                </CardTitle>
              </CardHeader>
              <CardContent className="text-amber-800">
                Spanish explorers find a village in modern day Micanopy
                inhabited by the Potano tribe.
              </CardContent>
            </Card>
          </div>

          <div className="mb-10 relative">
            <div className="absolute w-3 h-3 bg-amber-800 -left-[7px] top-1/2 -translate-y-1/2 rounded-full"></div>
            <Card className="bg-amber-100 border-amber-200 rounded-none">
              <CardHeader className="pb-2">
                <p className="text-sm text-amber-700 font-serif">1821</p>
                <CardTitle className="text-xl font-serif text-amber-900">
                  Micanopy is Founded
                </CardTitle>
              </CardHeader>
              <CardContent className="text-amber-800">
                Micanopy became the first US town formed in the newly acquired
                territory of Florida.
              </CardContent>
            </Card>
          </div>

          <div className="mb-10 relative">
            <div className="absolute w-3 h-3 bg-amber-800 -left-[7px] top-1/2 -translate-y-1/2 rounded-full"></div>
            <Card className="bg-amber-100 border-amber-200 rounded-none">
              <CardHeader className="pb-2">
                <p className="text-sm text-amber-700 font-serif">1835</p>
                <CardTitle className="text-xl font-serif text-amber-900">
                  Second Seminole War
                </CardTitle>
              </CardHeader>
              <CardContent className="text-amber-800">
                Fort Defiance and Fort Micanopy became major strategic
                objectives of the Second Seminole War and many bloody battles
                occured in the region.
              </CardContent>
            </Card>
          </div>

          <div className="mb-10 relative">
            <div className="absolute w-3 h-3 bg-amber-800 -left-[7px] top-1/2 -translate-y-1/2 rounded-full"></div>
            <Card className="bg-amber-100 border-amber-200 rounded-none">
              <CardHeader className="pb-2">
                <p className="text-sm text-amber-700 font-serif">1883</p>
                <CardTitle className="text-xl font-serif text-amber-900">
                  Micanopy gets a Railroad
                </CardTitle>
              </CardHeader>
              <CardContent className="text-amber-800">
                Florida Southern Railway built a railroad connecting Micanopy to
                the nearby city Ocala.
              </CardContent>
            </Card>
          </div>

          <div className="mb-10 relative">
            <div className="absolute w-3 h-3 bg-amber-800 -left-[7px] top-1/2 -translate-y-1/2 rounded-full"></div>
            <Card className="bg-amber-100 border-amber-200 rounded-none">
              <CardHeader className="pb-2">
                <p className="text-sm text-amber-700 font-serif">1920</p>
                <CardTitle className="text-xl font-serif text-amber-900">
                  Cars come to Micanopy
                </CardTitle>
              </CardHeader>
              <CardContent className="text-amber-800">
                The Micanopy Causeway was built which allowed cars to cross
                Paynes Prairie for the first time.
              </CardContent>
            </Card>
          </div>

          <div className="mb-10 relative">
            <div className="absolute w-3 h-3 bg-amber-800 -left-[7px] top-1/2 -translate-y-1/2 rounded-full"></div>
            <Card className="bg-amber-100 border-amber-200 rounded-none">
              <CardHeader className="pb-2">
                <p className="text-sm text-amber-700 font-serif">1930</p>
                <CardTitle className="text-xl font-serif text-amber-900">
                  Montgomery Mansion Burns Down
                </CardTitle>
              </CardHeader>
              <CardContent className="text-amber-800">
                The historic Montgomery home, one of the finest residences in Micanopy
                surrounded by orange groves, was destroyed by fire.
              </CardContent>
            </Card>
          </div>

          <div className="mb-10 relative">
            <div className="absolute w-3 h-3 bg-amber-800 -left-[7px] top-1/2 -translate-y-1/2 rounded-full"></div>
            <Card className="bg-amber-100 border-amber-200 rounded-none">
              <CardHeader className="pb-2">
                <p className="text-sm text-amber-700 font-serif">1950s</p>
                <CardTitle className="text-xl font-serif text-amber-900">
                  Railroad Service Ends
                </CardTitle>
              </CardHeader>
              <CardContent className="text-amber-800">
                The Thrasher Warehouse, built in 1896, was served by a branch of the Atlantic 
                Coast Line Railroad until the 1950s when rail service to Micanopy ended.
              </CardContent>
            </Card>
          </div>

          <div className="mb-10 relative">
            <div className="absolute w-3 h-3 bg-amber-800 -left-[7px] top-1/2 -translate-y-1/2 rounded-full"></div>
            <Card className="bg-amber-100 border-amber-200 rounded-none">
              <CardHeader className="pb-2">
                <p className="text-sm text-amber-700 font-serif">1983</p>
                <CardTitle className="text-xl font-serif text-amber-900">
                  Historic District Created
                </CardTitle>
              </CardHeader>
              <CardContent className="text-amber-800">
                The downtown Micanopy Historic District was listed on the National Register 
                of Historic Places, recognizing the town's historical significance.
              </CardContent>
            </Card>
          </div>

          {/* This is where we start hiding events until "See More" is clicked */}
          {showMore && (
            <>
              <div className="mb-10 relative">
                <div className="absolute w-3 h-3 bg-amber-800 -left-[7px] top-1/2 -translate-y-1/2 rounded-full"></div>
                <Card className="bg-amber-100 border-amber-200 rounded-none">
                  <CardHeader className="pb-2">
                    <p className="text-sm text-amber-700 font-serif">1991</p>
                    <CardTitle className="text-xl font-serif text-amber-900">
                      Hollywood Comes to Town
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-amber-800">
                    The movie "Doc Hollywood" starring Michael J. Fox was filmed in Micanopy, 
                    bringing national attention to the charming small town.
                  </CardContent>
                </Card>
              </div>

              <div className="mb-10 relative">
                <div className="absolute w-3 h-3 bg-amber-800 -left-[7px] top-1/2 -translate-y-1/2 rounded-full"></div>
                <Card className="bg-amber-100 border-amber-200 rounded-none">
                  <CardHeader className="pb-2">
                    <p className="text-sm text-amber-700 font-serif">2021</p>
                    <CardTitle className="text-xl font-serif text-amber-900">
                      Bicentennial Celebration
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-amber-800">
                    Micanopy celebrated its 200th anniversary as Florida's oldest inland 
                    town that has been continuously inhabited.
                  </CardContent>
                </Card>
              </div>

              <div className="mb-10 relative">
                <div className="absolute w-3 h-3 bg-amber-800 -left-[7px] top-1/2 -translate-y-1/2 rounded-full"></div>
                <Card className="bg-amber-100 border-amber-200 rounded-none">
                  <CardHeader className="pb-2">
                    <p className="text-sm text-amber-700 font-serif">2023</p>
                    <CardTitle className="text-xl font-serif text-amber-900">
                      Recognition as a Top Historic Town
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-amber-800">
                    Micanopy was recognized as one of America's Top 10 Historic Small Towns, 
                    highlighting its preservation of Old Florida charm and character.
                  </CardContent>
                </Card>
              </div>

              <div className="mb-10 relative">
                <div className="absolute w-3 h-3 bg-amber-800 -left-[7px] top-1/2 -translate-y-1/2 rounded-full"></div>
                <Card className="bg-amber-100 border-amber-200 rounded-none">
                  <CardHeader className="pb-2">
                    <p className="text-sm text-amber-700 font-serif">October 2024</p>
                    <CardTitle className="text-xl font-serif text-amber-900">
                      Annual Fall Festival
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-amber-800">
                    Micanopy hosted its annual Fall Festival featuring over 200 vendors
                    offering arts, crafts, antiques, plants, and foods, attracting 
                    thousands of visitors to the historic town.
                  </CardContent>
                </Card>
              </div>

              <div className="mb-10 relative">
                <div className="absolute w-3 h-3 bg-amber-800 -left-[7px] top-1/2 -translate-y-1/2 rounded-full"></div>
                <Card className="bg-amber-100 border-amber-200 rounded-none">
                  <CardHeader className="pb-2">
                    <p className="text-sm text-amber-700 font-serif">2024</p>
                    <CardTitle className="text-xl font-serif text-amber-900">
                      Museum Expansion
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-amber-800">
                    The Micanopy Historical Society Museum expanded its collection with 
                    new exhibits showcasing artifacts from local Native tribes and 
                    significant events from the town's rich past.
                  </CardContent>
                </Card>
              </div>

              <div className="mb-10 relative">
                <div className="absolute w-3 h-3 bg-amber-800 -left-[7px] top-1/2 -translate-y-1/2 rounded-full"></div>
                <Card className="bg-amber-100 border-amber-200 rounded-none">
                  <CardHeader className="pb-2">
                    <p className="text-sm text-amber-700 font-serif">2025</p>
                    <CardTitle className="text-xl font-serif text-amber-900">
                      Preservation Initiative
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-amber-800">
                    The town launched a comprehensive initiative to preserve its historic
                    buildings and enhance the downtown area while maintaining its 
                    distinctive Old Florida atmosphere and charm.
                  </CardContent>
                </Card>
              </div>
            </>
          )}
          
          {/* See More / See Less button */}
          <div className="flex justify-center mt-4 mb-4">
            <button
              onClick={toggleShowMore}
              className="bg-amber-600 hover:bg-amber-700 text-white py-2 px-6 rounded-full font-serif transition-all duration-300 flex items-center"
            >
              {showMore ? (
                <>
                  <span className="mr-1">See Less</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                </>
              ) : (
                <>
                  <span className="mr-1">See More</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </>
              )}
            </button>
          </div>
          
          {/* Source button moved here */}
          <div className="mt-4 mb-8 text-center">
            <a
              href="https://en.wikipedia.org/wiki/Micanopy,_Florida#Education"
              target="_blank"
              className="text-amber-700 hover:text-amber-800 font-serif"
            >
              SOURCE
            </a>
          </div>
        </div>
        
        {/* Annual Events Section */}
        <div className="mt-16 mb-10">
          <h2 className="text-3xl font-serif font-bold mb-8 text-center text-amber-900">
            Annual & Upcoming Events
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <Card className="bg-amber-100 border-amber-200">
              <CardHeader className="pb-2">
                <p className="text-sm text-amber-700 font-serif">October</p>
                <CardTitle className="text-xl font-serif text-amber-900">
                  Micanopy Fall Festival
                </CardTitle>
              </CardHeader>
              <CardContent className="text-amber-800">
                <p className="mb-2">Micanopy's biggest annual event features over 200 vendors with arts, crafts, food, and live music along Cholokka Boulevard.</p>
                <p className="font-bold">Next Date: October 25-26, 2025 (50th Anniversary)</p>
              </CardContent>
            </Card>
            
            <Card className="bg-amber-100 border-amber-200">
              <CardHeader className="pb-2">
                <p className="text-sm text-amber-700 font-serif">July</p>
                <CardTitle className="text-xl font-serif text-amber-900">
                  Independence Day Celebration
                </CardTitle>
              </CardHeader>
              <CardContent className="text-amber-800">
                <p className="mb-2">Annual 4th of July festivities with community events, food vendors, and evening fireworks.</p>
                <p className="font-bold">Next Date: July 4, 2025</p>
              </CardContent>
            </Card>
            
            <Card className="bg-amber-100 border-amber-200">
              <CardHeader className="pb-2">
                <p className="text-sm text-amber-700 font-serif">Monthly</p>
                <CardTitle className="text-xl font-serif text-amber-900">
                  Library: Craft 'n' Quilt
                </CardTitle>
              </CardHeader>
              <CardContent className="text-amber-800">
                <p className="mb-2">Monthly gathering at the Micanopy Library where community members share crafting and quilting projects and techniques.</p>
                <p className="font-bold">Dates: First Tuesday of every month</p>
              </CardContent>
            </Card>
            
            <Card className="bg-amber-100 border-amber-200">
              <CardHeader className="pb-2">
                <p className="text-sm text-amber-700 font-serif">Quarterly</p>
                <CardTitle className="text-xl font-serif text-amber-900">
                  Rabbits in the Library!
                </CardTitle>
              </CardHeader>
              <CardContent className="text-amber-800">
                <p className="mb-2">Children's event at the Micanopy Library featuring storytelling and an educational presentation with live rabbits.</p>
                <p className="font-bold">Next Date: March 15, 2025</p>
              </CardContent>
            </Card>
            
            <Card className="bg-amber-100 border-amber-200">
              <CardHeader className="pb-2">
                <p className="text-sm text-amber-700 font-serif">Monthly</p>
                <CardTitle className="text-xl font-serif text-amber-900">
                  Recycling Day
                </CardTitle>
              </CardHeader>
              <CardContent className="text-amber-800">
                <p className="mb-2">Community recycling collection held at the town hall parking lot with educational displays about sustainability.</p>
                <p className="font-bold">Dates: Last Saturday of every month</p>
              </CardContent>
            </Card>
            
            <Card className="bg-amber-100 border-amber-200">
              <CardHeader className="pb-2">
                <p className="text-sm text-amber-700 font-serif">Weekly</p>
                <CardTitle className="text-xl font-serif text-amber-900">
                  Historic Walking Tour
                </CardTitle>
              </CardHeader>
              <CardContent className="text-amber-800">
                <p className="mb-2">Guided walking tour of historic Micanopy, starting at the Historical Museum and covering significant landmarks in town.</p>
                <p className="font-bold">Dates: Every Saturday at 10 AM</p>
              </CardContent>
            </Card>
            
            <Card className="bg-amber-100 border-amber-200">
              <CardHeader className="pb-2">
                <p className="text-sm text-amber-700 font-serif">December</p>
                <CardTitle className="text-xl font-serif text-amber-900">
                  Holiday Festival of Lights
                </CardTitle>
              </CardHeader>
              <CardContent className="text-amber-800">
                <p className="mb-2">Downtown Micanopy transforms with festive lights, decorations, and special shopping hours at local shops.</p>
                <p className="font-bold">Next Date: December 5-20, 2025</p>
              </CardContent>
            </Card>
            
            <Card className="bg-amber-100 border-amber-200">
              <CardHeader className="pb-2">
                <p className="text-sm text-amber-700 font-serif">Spring</p>
                <CardTitle className="text-xl font-serif text-amber-900">
                  Antique Fair & Market
                </CardTitle>
              </CardHeader>
              <CardContent className="text-amber-800">
                <p className="mb-2">Special event celebrating Micanopy's reputation as the antiques capital of Florida with vendors, appraisals, and workshops.</p>
                <p className="font-bold">Next Date: May 8-9, 2025</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;