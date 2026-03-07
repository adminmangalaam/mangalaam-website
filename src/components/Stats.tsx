import { AnimatedCounter } from "./AnimatedCounter";

export default function Stats() {
  return (
    <section className="bg-gold text-dark py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
        <div>
          <p className="text-3xl md:text-5xl font-bold">
            <AnimatedCounter from={0} to={99} />K
          </p>
          <p className="text-sm md:text-base font-semibold">
            Projects Completed
          </p>
        </div>
        <div className="border-l-2 border-r-2 border-dark/20">
          <p className="text-3xl md:text-5xl font-bold">
            <AnimatedCounter from={0} to={100} />%
          </p>
          <p className="text-sm md:text-base font-semibold">
            Satisfaction Rate
          </p>
        </div>
        <div>
          <p className="text-3xl md:text-5xl font-bold">
            <AnimatedCounter from={0} to={50} />+
          </p>
          <p className="text-sm md:text-base font-semibold">
            Expert Team Members
          </p>
        </div>
      </div>
    </section>
  );
}
