"use client";
import { translationsAtom } from "@/stores/language-atom";
import { useAtomValue } from "jotai";
import { PlanCard } from "../plan-card";

export const PricingSection = () => {
  const t = useAtomValue(translationsAtom);

  return (
    <section id="pricing" className="w-full flex flex-col py-20">
      <div className="max-w-[1200px] w-full flex flex-col justify-center items-center gap-8 mx-auto">
        <div className="flex flex-col justify-center items-center gap-2">
          <span
            className="py-1 px-3 text-sm rounded-full cursor-default border border-blue-500/20 text-blue-500 bg-blue-500/10 duration-300 hover:bg-blue-500/20"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            {t.pricing.copyright.tag}
          </span>
          <h1
            className="mb-2 sm:text-4xl text-3xl text-center text-pretty font-bold"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            {t.pricing.copyright.title}
          </h1>
          <p
            className="text-sm text-center text-pretty text-gray-600"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            {t.pricing.copyright.description}
          </p>
        </div>
        <div className="w-full grid grid-cols-3 max-mdx:grid-cols-2 max-sm:grid-cols-1 gap-5">
          {t.pricing.plans.map((plan) => (
            <PlanCard
              key={plan.name}
              title={plan.name}
              description={plan.description}
              price={plan.price}
              features={plan.features}
              checkoutButton={{ title: plan.checkoutButton.title }}
              highlight={plan.name === "Business" || plan.name === "Negócios"}
              color={plan.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
