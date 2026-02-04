import React from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Essential",
    price: "$2,500",
    description: "Perfect for early-stage startups looking to make a mark.",
    features: ["Brand Identity System", "5-Page Webflow Site", "Basic SEO Setup", "1 Revision Round"],
    buttonText: "Start Basic",
    highlight: false,
  },
  {
    name: "Growth",
    price: "$5,000",
    description: "For scaling businesses that need a comprehensive digital presence.",
    features: ["Complete Brand Strategy", "10-Page Custom Site", "CMS Integration", "Advanced SEO & Analytics", "3 Revision Rounds"],
    buttonText: "Go Pro",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for large-scale organizations with complex needs.",
    features: ["Full Product Design", "Custom Web Application", "Smart Contract Audits", "24/7 Priority Support", "Dedicated Team"],
    buttonText: "Contact Us",
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-12">
          {/* Header */}
          <div className="text-center max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-medium mb-4">
              Transparent <span className="font-serif italic font-normal text-indigo-500">investment</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Choose the perfect plan to elevate your digital reality.
              No hidden fees, just pure value.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-2
                ${
                  plan.highlight
                    ? "bg-black text-white border-black dark:bg-white dark:text-black dark:border-white shadow-2xl scale-105 z-10"
                    : "bg-white text-black border-gray-200 dark:bg-white/5 dark:text-white dark:border-white/10"
                }`}
              >
                <div className="mb-6">
                  <h3 className="text-xl font-medium mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-sm opacity-60">/project</span>}
                  </div>
                  <p className={`mt-4 text-sm leading-relaxed ${plan.highlight ? "text-gray-300 dark:text-gray-600" : "text-gray-500"}`}>
                    {plan.description}
                  </p>
                </div>

                <ul className="flex-1 flex flex-col gap-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <div className={`p-0.5 rounded-full ${plan.highlight ? "bg-white text-black dark:bg-black dark:text-white" : "bg-black text-white dark:bg-white dark:text-black"}`}>
                        <Check size={10} strokeWidth={3} />
                      </div>
                      <span className="opacity-80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-full text-sm font-medium transition-colors
                  ${
                    plan.highlight
                      ? "bg-white text-black hover:bg-gray-200 dark:bg-black dark:text-white dark:hover:bg-gray-800"
                      : "bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;