const Gallery = () => {
  const images = [
    {
      url: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg',
      title: 'Hair Styling',
      category: 'Hair',
    },
    {
      url: 'https://images.pexels.com/photos/3997386/pexels-photo-3997386.jpeg',
      title: 'Facial Treatment',
      category: 'Skincare',
    },
    {
      url: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg',
      title: 'Makeup',
      category: 'Makeup',
    },
    {
      url: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg',
      title: 'Spa',
      category: 'Wellness',
    },
    {
      url: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg',
      title: 'Nail Art',
      category: 'Nails',
    },
    {
      url: 'https://images.pexels.com/photos/3992860/pexels-photo-3992860.jpeg',
      title: 'Bridal',
      category: 'Special',
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-rose-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Our Gallery</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of stunning transformations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="gallery-item group relative overflow-hidden rounded-2xl aspect-square cursor-pointer"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-3 py-1 bg-rose-500 text-white text-sm rounded-full mb-2">
                    {image.category}
                  </span>
                  <h3 className="text-white text-2xl font-bold">{image.title}</h3>
                </div>
              </div>
              <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
