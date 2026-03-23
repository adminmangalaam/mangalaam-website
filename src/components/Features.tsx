import { motion } from "framer-motion";

export default function Features() {
  const features = [
    {
      title: "24/7/365 Support",
      description:
        "Round-the-clock customer support to assist you anytime you need help.",
    },
    {
      title: "Industry Leaders",
      description:
        "Our team consists of experienced professionals from leading tech companies.",
    },
    {
      title: "Quick Service",
      description:
        "Rapid deployment and implementation of solutions for your business.",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <h2 className="text-4xl font-bold mb-8">
              Why You should Choose Our Technology Company?
            </h2>
            <div className="space-y-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gold text-dark font-bold">
                      ✓
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-dark">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="tel:+918856078956"
              className="inline-block bg-gold text-dark px-8 py-3 rounded font-semibold mt-8 hover:bg-yellow-400 transition"
            >
              Get Quote Now
            </a>
          </motion.div>

          <motion.div
            className="h-80 bg-gray-200 rounded-lg flex items-center justify-center"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop"
              alt="Team working"
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
