import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Regular Client',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      text: 'LuxeGlow transformed my wedding day into a fairytale! The bridal makeup was absolutely stunning, and I felt like a princess. Their attention to detail is unmatched.',
      rating: 5,
    },
    {
      name: 'Emily Davis',
      role: 'Spa Enthusiast',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
      text: 'The spa treatments here are pure bliss! I visit monthly for their signature facial and massage. The ambiance is so relaxing, and the staff is incredibly professional.',
      rating: 5,
    },
    {
      name: 'Jessica Williams',
      role: 'Beauty Blogger',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      text: 'As someone who reviews beauty services regularly, LuxeGlow stands out for their expertise and use of premium products. Highly recommended for anyone seeking quality care!',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-rose-50 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-rose-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real stories from our satisfied clients
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <Quote className="w-12 h-12 text-rose-300 mb-4" strokeWidth={2} />

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400" strokeWidth={2} />
                ))}
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
