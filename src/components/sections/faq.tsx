"use client";
import { translationsAtom } from "@/stores/language-atom";
import { useAtomValue } from "jotai";
import { motion } from "motion/react";
import { useState } from "react";
import { Icons } from "../ui/icons";

export const FaqSection = () => {
  const t = useAtomValue(translationsAtom);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full flex flex-col py-20">
      <div className="max-w-[1200px] w-full flex flex-col justify-center items-center gap-8 mx-auto">
        <div className="flex flex-col justify-center items-center gap-2">
          <span
            className="py-1 px-3 text-sm rounded-full cursor-default border border-blue-500/20 text-blue-500 bg-blue-500/10 duration-300 hover:bg-blue-500/20"
            data-aos="fade-down"
          >
            {t.faq.copywrite.tag}
          </span>
          <h1
            className="mb-2 sm:text-4xl text-3xl text-center text-pretty font-bold"
            data-aos="fade-left"
          >
            {t.faq.copywrite.title}
          </h1>
          <p
            className="text-sm text-center text-pretty text-gray-600"
            data-aos="fade-right"
          >
            {t.faq.copywrite.description}
          </p>
        </div>
        <div className="w-full flex flex-col">
          {t.faq.questions.map((faq, index) => (
            <button
              key={index}
              type="button"
              onClick={() => toggleFAQ(index)}
              className="w-full p-4 cursor-pointer text-left group border-b border-gray-200"
              data-aos="fade-right"
            >
              <div className="w-full flex justify-between items-center text-pretty font-medium">
                {faq.question}
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icons.ChevronDown />
                </motion.div>
              </div>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="mt-2 text-sm text-pretty text-gray-600">
                  {faq.answer}
                </p>
              </motion.div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
