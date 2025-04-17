"use client";
import { translationsAtom } from "@/stores/language-atom";
import { useAtomValue } from "jotai";
import Image from "next/image";
import CountriesFlags from "@/assets/countries-flags.png";

export const FeaturesSection = () => {
  const t = useAtomValue(translationsAtom);

  return (
    <section id="features" className="w-full py-20">
      <div className="max-w-[1200px] w-full flex flex-col gap-5 mx-auto">
        {/* Cards 1 */}
        <div className="w-full grid max-md:grid-cols-1 grid-cols-[1.5fr_2fr] gap-5">
          <div
            data-aos="fade-up"
            className="w-full h-[300px] flex flex-col justify-center items-center gap-5 relative rounded-2xl bg-white"
          >
            <picture className="select-none">
              <source
                srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/2728/512.webp"
                type="image/webp"
              />
              <Image
                src={t.features.cards.aiPoweredConversations.icon}
                alt="✨"
                width="52"
                height="52"
                className="pointer-events-none select-none"
                data-aos="fade-right"
                data-aos-delay="500"
              />
            </picture>
            <div className="flex flex-col items-center gap-2">
              <h3
                className="text-2xl text-center font-medium text-blue-500"
                data-aos="fade-right"
                data-aos-delay="500"
              >
                {t.features.cards.aiPoweredConversations.title}
              </h3>
              <p
                className="max-w-[388px] text-sm text-center text-gray-600"
                data-aos="fade-left"
                data-aos-delay="500"
              >
                {t.features.cards.aiPoweredConversations.description}
              </p>
            </div>
            <Image
              src={t.features.cards.aiPoweredConversations.background}
              alt=""
              className="w-full h-full object-cover absolute top-0 left-0 -z-10 select-none rounded-2xl"
            />
          </div>
          <div
            data-aos="fade-left"
            className="w-full h-[300px] flex flex-col justify-center items-center gap-5 relative rounded-2xl bg-white"
          >
            <picture className="select-none">
              <source
                srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f680/512.webp"
                type="image/webp"
              />
              <Image
                src={t.features.cards.flyHigher.icon}
                alt="🚀"
                width="52"
                height="52"
                className="pointer-events-none select-none"
                data-aos="fade-left"
                data-aos-delay="500"
              />
            </picture>
            <div className="flex flex-col items-center gap-2">
              <h3
                className="text-2xl text-center font-medium text-blue-500"
                data-aos="fade-left"
                data-aos-delay="500"
              >
                {t.features.cards.flyHigher.title}
              </h3>
              <p
                className="max-w-xs text-sm text-center text-gray-600"
                data-aos="fade-right"
                data-aos-delay="500"
              >
                {t.features.cards.flyHigher.description}
              </p>
            </div>
            <Image
              src={t.features.cards.flyHigher.background}
              alt=""
              className="w-full h-full object-cover absolute top-0 left-0 -z-10 select-none rounded-2xl"
            />
          </div>
        </div>

        {/* Cards 2 */}
        <div className="w-full grid max-md:grid-cols-1 grid-cols-[1fr_1fr] gap-5">
          <div
            data-aos="fade-right"
            className="w-full h-[300px] flex flex-col justify-center items-center gap-5 relative rounded-2xl bg-white"
          >
            <picture className="select-none">
              <source
                srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f62f/512.webp"
                type="image/webp"
              />
              <Image
                src={t.features.cards.voiceCustomization.icon}
                alt="😯"
                width="52"
                height="52"
                className="pointer-events-none"
                data-aos="fade-down"
                data-aos-delay="500"
              />
            </picture>
            <div className="flex flex-col items-center gap-2">
              <h3
                className="text-2xl text-center font-medium text-blue-500"
                data-aos="fade-right"
                data-aos-delay="500"
              >
                {t.features.cards.voiceCustomization.title}
              </h3>
              <p
                className="max-w-xs text-sm text-center text-gray-600"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                {t.features.cards.voiceCustomization.description}
              </p>
            </div>
            <Image
              src={t.features.cards.voiceCustomization.background}
              alt=""
              className="w-full h-full object-cover absolute top-0 left-0 -z-10 select-none rounded-2xl"
            />
          </div>
          <div
            data-aos="fade-left"
            className="w-full h-[300px] flex flex-col gap-5 relative rounded-2xl bg-white"
          >
            <div className="w-full h-full flex flex-col gap-4 p-6">
              <h3
                className="text-2xl font-medium text-white"
                data-aos="fade-right"
                data-aos-delay="500"
              >
                {t.features.cards.multilingualSupport.title}
              </h3>
              <p
                className="max-w-xs text-sm text-white"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                {t.features.cards.multilingualSupport.description}
              </p>
              <div
                className="w-max p-2 rounded-lg border border-white/20 bg-white/20"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <Image
                  src={CountriesFlags}
                  alt="countries flags"
                  className="w-40"
                />
              </div>
            </div>
            <Image
              src={t.features.cards.multilingualSupport.background}
              alt=""
              className="w-full h-full object-cover absolute top-0 left-0 -z-10 select-none rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
