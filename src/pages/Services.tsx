export default function ServicesPage() {
  const services = [
    {
      name: "Web Development",
      description:
        "Build modern, scalable web applications with the latest technologies and best practices.",
      features: [
        "Responsive Design",
        "SEO Optimized",
        "Fast Performance",
        "Security Focused",
      ],
      icon: "🌐",
    },
    {
      name: "Digital Marketing",
      description:
        "Grow your online presence with data-driven digital marketing strategies.",
      features: [
        "Social Media Marketing",
        "SEO Services",
        "Content Marketing",
        "PPC Campaigns",
      ],
      icon: "📱",
    },
    {
      name: "App Analytics",
      description:
        "Make informed decisions with comprehensive app analytics and insights.",
      features: [
        "User Analytics",
        "Performance Monitoring",
        "Data Visualization",
        "Custom Reports",
      ],
      icon: "📊",
    },
    {
      name: "Cloud Solutions",
      description:
        "Scale your infrastructure with reliable cloud computing solutions.",
      features: [
        "Cloud Hosting",
        "Database Management",
        "Backup & Recovery",
        "24/7 Support",
      ],
      icon: "☁️",
    },
  ];

  return (
    <div>
      <div className="bg-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-gray-400 text-lg">
            Comprehensive technology solutions tailored to your needs
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.name}
                className="border border-gray-300 rounded-lg p-8 hover:shadow-lg transition"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{service.name}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="text-gold">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-gold text-dark py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="mb-8">
            Let's talk about how we can help your business grow.
          </p>
          <button className="bg-dark text-gold px-8 py-3 rounded font-semibold hover:bg-dark/80 transition">
            Contact Us Today
          </button>
        </div>
      </div>
    </div>
  );
}
