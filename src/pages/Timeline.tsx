const Timeline = () => {
  return (
    <div className="flex justify-center py-10 px-4">
      <div className="w-full max-w-2xl">
        <br></br>
        <h2 className="text-3xl font-bold mb-10 text-center">Micanopy Timeline</h2>
        <div className="relative border-l-2 border-gray-300 pl-6">

          <div className="mb-10 relative">
            <div className="absolute w-2 h-2 bg-blue-500 rounded-full -left-3 top-1.5"></div>
            <p className="text-sm text-gray-500">1539</p>
            <h3 className="text-xl font-semibold">Micanopy is Discovered</h3>
            <p className="text-gray-700">Spanish explorers find a village in modern day Micanopy inhabited by the Potano tribe.</p>
          </div>

          <div className="mb-10 relative">
            <div className="absolute w-2 h-2 bg-blue-500 rounded-full -left-3 top-1.5"></div>
            <p className="text-sm text-gray-500">1821</p>
            <h3 className="text-xl font-semibold">Micanopy is Founded</h3>
            <p className="text-gray-700">Micanopy became the first US town formed in the newly acquired territory of Florida.</p>
          </div>

          <div className="mb-10 relative">
            <div className="absolute w-2 h-2 bg-blue-500 rounded-full -left-3 top-1.5"></div>
            <p className="text-sm text-gray-500">1835</p>
            <h3 className="text-xl font-semibold">Second Seminole War</h3>
            <p className="text-gray-700">Fort Defiance and Fort Micanopy became major strategic objectives of the Second Seminole War and many bloody battles
              occured in the region.
            </p>
          </div>

          <div className="mb-10 relative">
            <div className="absolute w-2 h-2 bg-blue-500 rounded-full -left-3 top-1.5"></div>
            <p className="text-sm text-gray-500">1883</p>
            <h3 className="text-xl font-semibold">Micanopy gets a Railroad</h3>
            <p className="text-gray-700">Florida Southern Railway built a railroad connecting Micanopy to the nearby city Ocala.</p>
          </div>

          <div className="mb-10 relative">
            <div className="absolute w-2 h-2 bg-blue-500 rounded-full -left-3 top-1.5"></div>
            <p className="text-sm text-gray-500">1920</p>
            <h3 className="text-xl font-semibold">Cars come to Micanopy</h3>
            <p className="text-gray-700">The Micanopy Causeway was built which allowed cars to cross Paynes Prairie for the first time.</p>
          </div>
          
        </div>
          <a href="https://en.wikipedia.org/wiki/Micanopy,_Florida#Education" target="_blank" className="text-blue-700">SOURCE</a>
      </div>
    </div>
  );
};

export default Timeline;

