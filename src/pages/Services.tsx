import { useState } from "react";
import { Link } from "react-router-dom";
import webDevelopmentIcon from "../assets/web-development.png";
import digitalMarketingIcon from "../assets/digital-marketing.png";
import appAnalyticsIcon from "../assets/seo.png";
import cloudSolutionsIcon from "../assets/cloud-solutions.png";
import cyberSecurityIcon from "../assets/cyber-security.png";

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
      icon: webDevelopmentIcon,
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
      icon: digitalMarketingIcon,
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
      icon: appAnalyticsIcon,
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
      icon: cloudSolutionsIcon,
    },
    {
      name: "Cyber Security",
      description:
        "Protect your digital assets with our comprehensive cyber security solutions.",
      features: [
        "Threat Detection",
        "Data Encryption",
        "Security Audits",
        "Incident Response",
      ],
      icon: cyberSecurityIcon,
    },
  ];

  const [openServiceIndex, setOpenServiceIndex] = useState<number | null>(0);
  const handleToggle = (index: number) => {
    setOpenServiceIndex(index === openServiceIndex ? null : index);
  };

  return (
    <div>
      <div className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div
            className="absolute top-0 left-0 w-full h-full z-1"
            style={{
              backgroundImage: `linear-gradient(to bottom,rgb(253, 185, 19), transparent )`,
            }}
          />
          <h1 className="text-black text-5xl font-bold mb-4 relative z-2">
            Our Services
          </h1>
          <p className="text-gray-500 text-lg relative z-2">
            Comprehensive technology solutions tailored to your needs
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="gap-8">
            {services.map((service) => (
              <div
                key={service.name}
                className="border border-gray-300 rounded-lg p-8 hover:shadow-lg transition mb-8 mx-auto w-[75%]"
              >
                <div
                  className="service-top-container flex items-center justify-between cursor-pointer"
                  onClick={() => handleToggle(services.indexOf(service))}
                >
                  <div className="flex items-center gap-6">
                    <img
                      src={service.icon}
                      alt={service.name}
                      className="w-10 h-10 md:w-16 md:h-16"
                    />
                    <h3 className="text-xl md:text-2xl font-bold">
                      {service.name}
                    </h3>
                  </div>
                  <span>
                    {openServiceIndex === services.indexOf(service) ? (
                      <div className="w-0 h-0 border-x-transparent border-t-transparent border-b-gray-500 border-8"></div>
                    ) : (
                      <div className="w-0 h-0 border-x-transparent border-b-transparent border-t-gray-900 border-8"></div>
                    )}
                  </span>
                </div>
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    openServiceIndex === services.indexOf(service)
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {/* Your content here */}
                  <p className="text-gray-600 mt-4">{service.description}</p>
                  {service.features && (
                    <ul className="mt-4 text-gray-600">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 mb-2"
                        >
                          <span className="text-gold">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
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
          <Link
            to="/contact"
            className="bg-dark text-gold px-8 py-3 rounded font-semibold hover:bg-dark/80 transition"
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </div>
  );
}
