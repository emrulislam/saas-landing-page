export default function CTA() {
  return (
    <section className="bg-primary text-primary-content py-24 px-4 sm:px-6 lg:px-8 text-center  shadow-lg">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
        Ready to boost your business?
      </h2>
      {/* Supporting text */}
      <p className="text-lg sm:text-xl mb-8 max-w-xl mx-auto text-base-content/90">
        Join thousands of happy users leveraging our tools to save time and grow faster.
      </p>
      {/* Buttons */}
      <div className="flex justify-center gap-4 flex-wrap">
        <button className="btn btn-secondary btn-lg rounded-full shadow-md hover:scale-105 transition-transform duration-300">
          Get Started Now
        </button>
        <button className="btn btn-ghost btn-lg rounded-full shadow-sm hover:scale-105 transition-transform duration-300">
          Learn More
        </button>
      </div>
    </section>
  );
}


