import { FaBolt, FaShieldAlt, FaUsers, FaCloud } from "react-icons/fa";

export default function Features() {
  const features = [
    {
      icon: <FaBolt className="text-primary text-5xl" />,
      title: "Blazing Fast",
      desc: "Optimized performance to keep your workflow lightning quick.",
      badge: "New",
    },
    {
      icon: <FaShieldAlt className="text-primary text-5xl" />,
      title: "Secure",
      desc: "Enterprise-grade security features to protect your data.",
      badge: null,
    },
    {
      icon: <FaUsers className="text-primary text-5xl" />,
      title: "Team Collaboration",
      desc: "Work seamlessly with your team in real-time.",
      badge: "Hot",
    },
    {
      icon: <FaCloud className="text-primary text-5xl" />,
      title: "Cloud Ready",
      desc: "Access your projects anytime, anywhere with cloud support.",
      badge: null,
    },
  ];

  return (
    <section id="features" className="py-20 bg-base-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Powerful Features to Supercharge Your Workflow
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <div
              key={i}
              className="card bg-base-100 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 relative p-6 flex flex-col items-center text-center"
            >
              {feature.badge && (
                <span className="badge badge-primary absolute top-3 right-3 text-xs">
                  {feature.badge}
                </span>
              )}
              <div className="mb-4">{feature.icon}</div>
              <h3 className="card-title text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm opacity-80">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
