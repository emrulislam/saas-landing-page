import heroImg from "../assets/hero-image.png";

export default function Home() {
  return (
    <section id="home" className="py-20 bg-base-100">
      <div className="container mx-auto px-6">
        <div className="card lg:card-side bg-base-100 shadow-lg rounded-xl items-center">
          
          {/* Left Side - Text */}
          <div className="card-body lg:w-1/2 text-center lg:text-left flex flex-col justify-center items-center lg:items-start">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-primary">
              Supercharge Your Workflow
            </h1>
            <p className="py-4 text-sm md:text-lg opacity-80 max-w-md text-base-content">
              The ultimate SaaS platform designed to help teams collaborate,
              innovate, and grow faster.
            </p>
            <div className="card-actions flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mt-4">
              <button className="btn btn-primary w-full sm:w-auto rounded-full shadow-md hover:scale-105 transition-transform duration-300">
                Get Started
              </button>
              <button className="btn btn-secondary w-full sm:w-auto rounded-full shadow-sm hover:scale-105 transition-transform duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <figure className="lg:w-1/2 p-6 flex justify-center">
            <img
              src={heroImg}
              alt="Hero Illustration"
              className="max-w-xs md:max-w-md"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
