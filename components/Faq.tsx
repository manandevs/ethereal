"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "What services does Awake Agency offer?",
    answer:
      "We offer branding, web design, development, and digital strategy services tailored to modern businesses.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Most projects take between 4–8 weeks depending on scope, feedback cycles, and complexity.",
  },
  {
    question: "How is pricing structured at Awake Agency?",
    answer:
      "Pricing is project-based and customized to your needs. We provide transparent quotes after discovery.",
  },
  {
    question: "Do you offer ongoing support after project completion?",
    answer:
      "Yes! We offer maintenance, optimization, and long-term support plans after launch.",
  },
  {
    question: "How often will I receive updates on my project?",
    answer:
      "You’ll receive regular weekly updates, plus milestone reviews and open communication throughout.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-11 2xl:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-10 md:gap-20">
          {/* Header */}
          <div className="w-full mx-auto text-center flex justify-center items-center">
            <h2 className="max-w-7xl text-4xl font-medium leading-tight sm:text-5xl md:text-6xl">
              Got questions?{" "}
              <br />
              <span className="italic font-normal">We’ve got answers</span>
            </h2>
          </div>

          {/* Accordion */}
          <div className="flex flex-col gap-6 max-w-3xl mx-auto">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="rounded-2xl border border-border p-6"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between text-left text-xl font-medium"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>

                    <div className="h-10 w-10 bg-[#ffffffe3] text-black rounded-4xl flex justify-center items-center cursor-pointer">
                      <Plus
                        className={`h-6 w-6 transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      />
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 mt-4"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden text-muted-foreground">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
