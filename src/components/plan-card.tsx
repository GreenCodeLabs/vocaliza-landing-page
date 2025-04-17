import PlanCardBlackBg from "@/assets/backgrounds/plan-card-black-bg.png";
import PlanCardBlueBg from "@/assets/backgrounds/plan-card-blue-bg.png";
import PlanCardYellowBg from "@/assets/backgrounds/plan-card-yellow-bg.png";
import { languageAtom } from "@/stores/language-atom";
import { useAtom } from "jotai";
import Image from "next/image";
import { Icons } from "./ui/icons";

interface PlanCardProps {
  title: string;
  description: string;
  price: number;
  features: string[];
  highlight?: boolean;
  color: string;
  checkoutButton: {
    title: string;
  };
}

export const PlanCard = ({
  title,
  description,
  price,
  features,
  highlight,
  color,
  checkoutButton,
}: PlanCardProps) => {
  const [language] = useAtom(languageAtom);

  const backgroundBasedOnColor = (color: string) => {
    switch (color) {
      case "black":
        return PlanCardBlackBg;
      case "blue":
        return PlanCardBlueBg;
      case "yellow":
        return PlanCardYellowBg;
      default:
        return PlanCardYellowBg;
    }
  };

  return (
    <div
      data-aos="fade-down"
      data-aos-delay="200"
      className="flex flex-col justify-between gap-5 p-5 rounded-2xl bg-white"
    >
      {/* Plan Details */}
      <div className="flex flex-col gap-1">
        <div className="w-full flex justify-between items-center">
          <h4
            className="text-2xl font-medium"
            data-aos="fade-down"
            data-aos-delay="300"
          >
            {title}
          </h4>
          {highlight && (
            <span
              className="px-3 py-1 rounded-full text-xs font-medium text-white bg-blue-500"
              data-aos="fade-left"
              data-aos-delay="800"
            >
              Most Popular
            </span>
          )}
        </div>
        <h3
          className="text-3xl font-semibold"
          data-aos="fade-right"
          data-aos-delay="600"
        >
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(price)}
          <span className="text-sm font-normal text-gray-600">
            {language === "en" ? "/ month" : "/ mês"}
          </span>
        </h3>
        <p
          className="text-sm text-gray-700"
          data-aos="fade-left"
          data-aos-delay="800"
        >
          {description}
        </p>
      </div>

      {/* Plan Features */}
      <div className="w-full flex flex-col gap-1">
        {features.map((feature) => (
          <div
            key={feature}
            className="flex items-center gap-1 text-sm text-gray-600"
            data-aos="fade-right"
            data-aos-delay="1000"
          >
            <Icons.Check className="text-blue-500" /> {feature}
          </div>
        ))}
      </div>

      <button
        data-aos="fade-up"
        data-aos-delay="1000"
        className="w-full py-2 cursor-pointer rounded-2xl bg-gray-100 hover:bg-gray-200 duration-300"
      >
        {checkoutButton.title}
      </button>

      {/* Background */}
      <Image
        src={backgroundBasedOnColor(color)}
        alt="background"
        width={2000}
        height={2000}
        className="w-full h-full absolute top-0 left-0 -z-50 object-cover pointer-events-none rounded-t-2xl"
      />
    </div>
  );
};
