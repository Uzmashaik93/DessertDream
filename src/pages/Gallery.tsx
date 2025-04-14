function Gallery() {
  const imageArray = [
    "/images/image1.jpeg",
    "/images/image2.jpeg",
    "/images/image3.jpeg",
    "/images/image4.jpeg",
    "/images/image5.jpeg",
    "/images/image6.jpeg",
    "/images/image7.jpeg",
    "/images/image8.jpeg",
    "/images/image9.jpeg",
    "/images/image10.jpeg",
    "/images/image11.jpeg",
    "/images/image12.jpeg",
    "/images/image13.jpeg",
    "/images/image14.jpeg",
    "/images/image15.jpeg",
    "/images/image16.jpeg",
    "/images/image17.jpeg",
    "/images/image18.jpeg",
    "/images/image19.jpeg",
    "/images/image20.jpeg",
    "/images/image21.jpeg",
    "/images/image22.jpeg",
    "/images/image23.jpeg",
    "/images/image24.jpeg",
    "/images/image25.jpeg",
    "/images/image26.jpeg",
    "/images/image27.jpeg",
    "/images/image28.jpeg",
    "/images/image29.jpeg",
    "/images/image30.jpeg",
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10">
        {imageArray.map((image, i) => {
          return (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-black/0 to-black/80"
            >
              <img
                src={image}
                className="w-full aspect-square object-cover transform group-hover:scale-105 transition-transform duration-700"
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center justify-between"></div>
                </div>
              </div>

              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;
