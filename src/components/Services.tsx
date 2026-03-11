import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef } from "react";
import webDevelopmentIcon from "../assets/web-development.png";
import digitalMarketingIcon from "../assets/digital-marketing.png";
import appAnalyticsIcon from "../assets/seo.png";

export default function Services() {
  const animationContainerRef = useRef<HTMLDivElement>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        smooth: "easeInOut",
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      duration: 0.8,
      transition: { duration: 0.8, smooth: "easeInOut" },
    },
  };

  const services = [
    {
      name: "Web 2.0 Development",
      description:
        "Create modern, responsive websites and web applications tailored to your business needs. Create modern, responsive websites and web applications tailored to your business needs. ",
      bullets: ["Custom Web Development", "E-commerce Solutions"],
      icon: "🌐",
      image: webDevelopmentIcon,
    },
    {
      name: "Digital Marketing",
      description:
        "Boost your online presence with effective digital marketing strategies and campaigns. Boost your online presence with effective digital marketing strategies and campaigns.",
      bullets: ["SEO Optimization", "Social Media Marketing"],
      icon: "📱",
      image: digitalMarketingIcon,
    },
    {
      name: "App Analytics",
      description:
        "Gain insights from your app data to make informed business decisions and improvements. Gain insights from your app data to make informed business decisions and improvements.",
      bullets: ["User Behavior Analysis", "Performance Monitoring"],
      icon: "📊",
      image: appAnalyticsIcon,
    },
  ];

  return (
    <section className="bg-white text-dark py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-center mb-4 text-[#00358d]">
          Our Services
        </h2>
        <p className="text-center text-gray-500 mb-12 w-[600px] mx-auto">
          Comprehensive technology solutions tailored to your needs.
          Comprehensive technology solutions tailored to your needs.
          Comprehensive technology solutions tailored to your needs.
        </p>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={container}
          ref={animationContainerRef}
          initial="hidden"
          whileInView="show"
        >
          {services.map((service) => (
            <motion.div
              key={service.name}
              className="group h-[400px] cursor-pointer text-center p-4 hover:border-[#fec002] hover:shadow-xl rounded-lg transition duration-300"
              variants={item}
            >
              <div className="relative mb-4 rounded-lg overflow-hidden">
                <img
                  className="w-[64px] inline-block mt-[32px] mb-4"
                  src={service.image}
                  alt={service.name}
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{service.name}</h3>
              <p className="text-gray-500">{service.description}</p>
              {service.bullets && (
                <ul className="mt-4 text-gray-500 inline-block">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2 mb-2">
                      <span className="text-gold">✓</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </motion.div>
        <Link
          to="/services"
          className="inline-block bg-gold mt-12 text-dark px-8 py-3 rounded font-semibold mt-12 hover:bg-yellow-400 transition"
        >
          View Our All Services
        </Link>
      </div>
    </section>
  );
}
