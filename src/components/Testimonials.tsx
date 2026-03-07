export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      company: "Tech StartUp Inc",
      text: "The team provided excellent support during our website redesign. Their attention to detail and quick turnaround time made all the difference.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      rating: 5,
    },
    {
      name: "John Anderson",
      company: "Digital Solutions Ltd",
      text: "Outstanding service and technical expertise. They understood our requirements perfectly and delivered beyond expectations.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      rating: 5,
    },
  ];

  return (
    <section className="bg-darkGray text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          What Customers are Saying?
        </h2>
        <p className="text-center text-gray-400 mb-12"></p>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-dark rounded-lg p-8">
              <div className="flex gap-4 items-start mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-gold text-sm">{testimonial.company}</p>
                  <div className="flex gap-1 mt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-gold">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
