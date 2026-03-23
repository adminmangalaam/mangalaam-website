import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import sliderImage1 from "../assets/tech-solutions-desktop.jpg";
import sliderImage2 from "../assets/digital-transformation-desktop.jpg";
import sliderImage3 from "../assets/innovative-it-solutions-desktop.jpg";

export default function Hero() {
  const sliderData = [
    {
      smallTitle: "We Provide",
      mainTitle: "TECH SOLUTIONS",
      sliderImage: sliderImage1,
      description:
        "Provide innovative technology solutions for your business growth and digital transformation",
    },
    {
      smallTitle: "Innovate with Us",
      mainTitle: "DIGITAL TRANSFORMATION",
      sliderImage: sliderImage2,
      description:
        "Empowering your business with cutting-edge digital transformation services",
    },
    {
      smallTitle: "Grow Your Business",
      mainTitle: "INNOVATIVE IT SOLUTIONS",
      sliderImage: sliderImage3,
      description:
        "Unlock your business potential with our innovative IT solutions tailored for growth",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleBulletClick = (index: any) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative overflow-hidden">
      <div className="overflow-hidden h-[calc(100vh-72px)]">
        <AnimatePresence initial={false} custom={currentIndex}>
          {sliderData.map(
            (sliderItem, index) =>
              index === currentIndex && (
                <motion.section
                  key={index}
                  className="absolute inset-0 bg-dark text-white flex items-center justify-center"
                  style={{
                    backgroundImage: `linear-gradient(to top, rgba(0, 53, 141, 0.7), rgba(0,0,0,0.7)), url(${sliderItem.sliderImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100%" }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.div
                    className="max-w-7xl mx-auto px-4 text-center"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                  >
                    <p className="font-semibold mb-2 uppercase text-white">
                      {sliderItem.smallTitle}
                    </p>
                    <h1 className="text-4xl md:text-7xl font-bold mb-6 text-gold">
                      {sliderItem.mainTitle}
                    </h1>
                    <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
                      {sliderItem.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link
                        to="/services"
                        className="border-2 border-gold text-gold px-8 py-3 rounded font-semibold hover:bg-gold hover:text-dark transition"
                      >
                        Our Services
                      </Link>
                    </div>
                  </motion.div>
                </motion.section>
              ),
          )}
        </AnimatePresence>
      </div>

      {/* Vertical Navigation Bullets */}
      <div className="absolute bottom-[40px] left-1/2 md:top-1/2 gap-[40px] transform -translate-x-1/2 md:-translate-y-1/2 md:right-4 flex md:flex-col md:-translate-x-0 z-10 md:translate-y-0 md:left-auto lg:gap-4">
        {sliderData.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full border-2 ${
              index === currentIndex
                ? "bg-gold border-gold"
                : "bg-transparent border-gray-400"
            }`}
            onClick={() => handleBulletClick(index)}
          />
        ))}
      </div>
    </div>
  );
}
