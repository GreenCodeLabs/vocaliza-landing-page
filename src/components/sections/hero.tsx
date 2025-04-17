"use client";
import ArrowDoodle from "@/assets/arrow-doodle.png";
import { languageAtom, translationsAtom } from "@/stores/language-atom";
import { useAtom, useAtomValue } from "jotai";
import Image from "next/image";
import Link from "next/link";
import AnimatedAudioSpectrum from "../ui/animated-audio-spectrum";
import { CheckIcon } from "../ui/icons/check";
import { Tag } from "../ui/tag";

export const HeroSection = () => {
  const [language] = useAtom(languageAtom);
  const t = useAtomValue(translationsAtom);

  return (
    <section id="hero" className="w-full smx:pt-52 pt-40 smx:pb-32 pb-24">
      <main className="sm:max-w-[1200px] max-w-[1440px] w-full h-full flex flex-col justify-center items-center gap-8 mx-auto">
        <div className="flex flex-col justify-center items-center gap-3">
          <AnimatedAudioSpectrum />
          <h1
            data-aos="fade-right"
            className={`${
              language === "en" ? "max-w-4xl" : "max-w-5xl"
            } sm:text-7xl text-4xl text-center font-bold group`}
          >
            {t.hero.copywrite.title}{" "}
            <span className="inline relative text-blue-500">
              {t.hero.copywrite.highlighted}
            </span>
          </h1>
          <p
            className="max-w-2xl w-full text-center text-pretty text-gray-600"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            {t.hero.copywrite.description}
          </p>
        </div>
        <div
          className="flex flex-wrap justify-center items-center gap-5"
          data-aos="fade-right"
          data-aos-delay="800"
        >
          {t.hero.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <div className="flex items-center smx:flex-row flex-col gap-5 relative">
          <Image
            src={ArrowDoodle}
            alt="Start Free Trial Arrow"
            className="w-[65px] h-[88px] absolute -left-[75px] top-[14px] select-none pointer-events-none max-sm:hidden"
            data-aos="fade-right"
            data-aos-delay="1000"
          />
          <Link
            href={t.hero.cta.startAFreeTrial.href}
            className="px-6 py-3 rounded-full font-medium border border-blue-500 text-white bg-blue-500 duration-300 hover:bg-blue-600"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            {t.hero.cta.startAFreeTrial.title}
          </Link>
          <Link
            href={t.hero.cta.requestDemo.href}
            className="px-6 py-3 rounded-full font-medium border border-gray-300 duration-300 hover:bg-gray-300"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            {t.hero.cta.requestDemo.title}
          </Link>
        </div>
        <div className="flex smx:flex-row flex-col items-center gap-5">
          {t.hero.benefits.map((benefit) => (
            <p
              key={benefit}
              className="flex items-center gap-1 text-gray-600"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <CheckIcon className="text-blue-500" /> {benefit}
            </p>
          ))}
        </div>
      </main>
    </section>
  );
};
