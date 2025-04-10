import { galleryItems } from "@/lib/galleryItems";

function Gallery() {
  return (
    <div className="flex flex-col items-center bg-amber-50 min-h-screen px-4 pt-24 pb-10">
      <h1 className="text-4xl font-serif font-bold mb-10 text-amber-900 text-center">
        Gallery
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {galleryItems.map((image) => (
          <div
            key={image.id}
            className="bg-amber-100 border border-amber-200 rounded-none overflow-hidden shadow"
          >
            <img
              src={image.src}
              alt={`Gallery image ${image.id}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-amber-800 font-serif">
                {image.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-10 px-6 py-2 bg-amber-900 text-white rounded hover:bg-amber-800 font-serif">
        See More
      </button>
    </div>
  );
}

export default Gallery;
