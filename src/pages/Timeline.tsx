import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Timeline = () => {
  return (
    <div className="flex justify-center px-4 pt-24 pb-10">
      <div className="w-full max-w-2xl">
        <h2 className="text-3xl font-serif font-bold mb-10 text-center text-amber-900">
          Micanopy Timeline
        </h2>
        <div className="relative border-l-2 border-amber-300 pl-6">
          <div className="mb-10 relative">
            <div className="absolute w-3 h-3 bg-amber-800 rounded-full -left-[7px] top-1/2 -translate-y-1/2"></div>
            <Card className="bg-amber-50/50 border-amber-200">
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
            <div className="absolute w-3 h-3 bg-amber-800 rounded-full -left-[7px] top-1/2 -translate-y-1/2"></div>
            <Card className="bg-amber-50/50 border-amber-200">
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
            <div className="absolute w-3 h-3 bg-amber-800 rounded-full -left-[7px] top-1/2 -translate-y-1/2"></div>
            <Card className="bg-amber-50/50 border-amber-200">
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
            <div className="absolute w-3 h-3 bg-amber-800 rounded-full -left-[7px] top-1/2 -translate-y-1/2"></div>
            <Card className="bg-amber-50/50 border-amber-200">
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
            <div className="absolute w-3 h-3 bg-amber-800 rounded-full -left-[7px] top-1/2 -translate-y-1/2"></div>
            <Card className="bg-amber-50/50 border-amber-200">
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
        </div>
        <div className="mt-8 text-center">
          <a
            href="https://en.wikipedia.org/wiki/Micanopy,_Florida#Education"
            target="_blank"
            className="text-amber-700 hover:text-amber-800 font-serif"
          >
            SOURCE
          </a>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
