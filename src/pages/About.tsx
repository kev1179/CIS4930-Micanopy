import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import coverPhoto from "@/assets/images/about-cover.jpg";
import townPhoto from "@/assets/images/town-photo.jpg";
import herlongMansion from "@/assets/images/herlong-mansion.png";

const About = () => {
  return (
    <div className="flex flex-col items-center bg-amber-50 min-h-screen">
      <section
        className="relative w-full h-[500px] bg-cover bg-center pt-24"
        style={{ backgroundImage: `url(${coverPhoto})` }}
      >
        <div className="absolute inset-0 bg-amber-900 opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-amber-50 px-4">
          <div className="border-8 border-double border-amber-200/80 p-8 max-w-4xl mx-auto text-center bg-amber-900/60">
            <h1 className="text-5xl font-serif mb-4">
              Preserving Micanopy's Living History
            </h1>
          </div>
        </div>
      </section>

      <div className="flex flex-col items-center px-4 py-16">
        {/* Mission Statement */}
        <div className="w-full max-w-4xl mb-16 text-center">
          <p className="text-lg text-amber-800">
            Micanopy Gallery serves as a digital time capsule for Micanopy,
            Florida's oldest inland town. Our mission is to collect, preserve,
            and share the rich tapestry of stories that make our community
            unique.
          </p>
        </div>

        <div className="w-full max-w-4xl grid gap-12">
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="md:col-span-2 bg-amber-100 border-amber-200 rounded-none">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-amber-900">
                  Our Story
                </CardTitle>
              </CardHeader>
              <CardContent className="text-amber-800">
                <p>
                  Founded in 2025, Micanopy Gallery began as a collaborative
                  project to ensure Micanopy's historical legacy remains
                  accessible for future generations. From antique shops to
                  historic buildings, from family stories to community
                  celebrations, our digital gallery captures the essence of
                  Florida's most remarkable small town.
                </p>
              </CardContent>
            </Card>
            <div className="relative h-[250px] md:h-full overflow-hidden border-8 border-double border-amber-200/80">
              <img
                src={townPhoto}
                alt="Historic Micanopy"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </section>

          {/* About Micanopy */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="md:col-span-2 bg-amber-100 border-amber-200 rounded-none">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-amber-900">
                  About Micanopy
                </CardTitle>
              </CardHeader>
              <CardContent className="text-amber-800">
                <p>
                  Established in 1821, Micanopy holds the distinction of being
                  Florida's oldest inland town. Named after a Seminole chief,
                  our town has preserved its historic character through
                  generations. With its antique shops, historic buildings, and
                  tree-lined streets, Micanopy's charming atmosphere continues
                  to charm visitors and residents alike.
                </p>
              </CardContent>
            </Card>
            <div className="relative h-[250px] md:h-full overflow-hidden border-8 border-double border-amber-200/80">
              <img
                src={herlongMansion}
                alt="Herlong Mansion"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </section>

          {/* Community Impact */}
          <section>
            <Card className="bg-amber-100 border-amber-200 rounded-none">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-amber-900">
                  Community Impact
                </CardTitle>
              </CardHeader>
              <CardContent className="text-amber-800">
                <p className="mb-4">
                  This digital gallery represents a collective effort to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Document and preserve local history</li>
                  <li>Share stories across generations</li>
                  <li>Support local businesses and tourism</li>
                  <li>Celebrate and promote Micanopy's growth</li>
                </ul>
                <p className="mt-4">
                  Our gallery is built by the community, for the community.
                  Residents can contribute historical photos, documents, and
                  stories. Each submission is carefully curated and added to our
                  growing collection, creating a comprehensive digital archive
                  of Micanopy's heritage.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Our Team */}
          <section>
            <Card className="bg-amber-100 border-amber-200 rounded-none">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-amber-900">
                  Our Team
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-amber-200 mb-4 mx-auto rounded-full"></div>
                    <h3 className="font-serif text-amber-900 font-semibold">
                      Randol Recio
                    </h3>
                    <p className="text-amber-800">Software Engineer</p>
                  </div>
                  <div className="text-center">
                    <div className="w-32 h-32 bg-amber-200 mb-4 mx-auto rounded-full"></div>
                    <h3 className="font-serif text-amber-900 font-semibold">
                      Tyler Landtroop
                    </h3>
                    <p className="text-amber-800">Software Engineer</p>
                  </div>
                  <div className="text-center">
                    <div className="w-32 h-32 bg-amber-200 mb-4 mx-auto rounded-full"></div>
                    <h3 className="font-serif text-amber-900 font-semibold">
                      Ai-Ly Mai
                    </h3>
                    <p className="text-amber-800">Software Engineer</p>
                  </div>
                  <div className="text-center">
                    <div className="w-32 h-32 bg-amber-200 mb-4 mx-auto rounded-full"></div>
                    <h3 className="font-serif text-amber-900 font-semibold">
                      Maiah Jaffa
                    </h3>
                    <p className="text-amber-800">Software Engineer</p>
                  </div>
                  <div className="text-center">
                    <div className="w-32 h-32 bg-amber-200 mb-4 mx-auto rounded-full"></div>
                    <h3 className="font-serif text-amber-900 font-semibold">
                      Kevin Mosley
                    </h3>
                    <p className="text-amber-800">Software Engineer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
