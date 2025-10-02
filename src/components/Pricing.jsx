import PricingCard from "../components/PricingCard";

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-base-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-primary">
          Pricing Plans
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-center items-stretch">
          <PricingCard
            title="Basic"
            price="$9/mo"
            features={["High-resolution image generation"]}
            unavailable={["Cloud integration", "Collaboration tools"]}
          />

          {/* Premium - visually emphasized */}
          <div className="relative z-10 scale-105 lg:scale-110">
            <PricingCard
              title="Premium"
              price="$29/mo"
              popular={true}
              features={[
                "High-resolution image generation",
                "Customizable style templates",
                "Batch processing",
                "AI-driven image enhancements",
              ]}
              unavailable={[
                "Seamless cloud integration",
                "Real-time collaboration tools",
              ]}
            />
          </div>

          <PricingCard
            title="Enterprise"
            price="$99/mo"
            features={[
              "Everything in Premium",
              "Dedicated Account Manager",
              "Custom AI models",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
