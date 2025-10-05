import clsx from "clsx";
import { CardPropsData } from "@/types/data.types";

type CardProps = CardPropsData & {
  className?: string;
  sale?: number;
};

const Card = ({
  className,
  period,
  price,
  full_price,
  is_best,
  text,
  sale,
}: CardProps) => {
  const cardClasses = clsx(
    "rounded-[16px] flex flex-col border-2 pb-6 md:pb-8 rounded-[16px] transition-all duration-300 hover:border-[#81FE95] hover:scale-[1.03]",
    {
      "bg-[#2E3536]  border-[#FDB056] items-center ": is_best,
      "bg-[#232829] border-[#484D4E] ": !is_best,
    },
    className,
  );

  return (
    <div
      className={clsx(cardClasses, is_best && "lg:flex-row lg:items-center ")}
    >
      <div className={clsx("flex-grow flex flex-col items-center ")}>
        {sale && (
          <div
            className={clsx("w-full flex items-center  md:pl-13", {
              "justify-end gap-3.5 md:justify-between pr-[2%]": is_best,
              "justify-end md:justify-start pr-[5%]": !is_best,
            })}
          >
            <p className="text-white text-[clamp(0.8rem,1.1vw,1.4rem)] w-11 h-6 md:w-17 md:h-10 bg-[#FD5656]  flex items-center justify-center rounded-b-[8px] sm:rounded-b-[12px] md:rounded-b-[16px]">
              {`- ${sale}`}%
            </p>
            {is_best && (
              <span className="text-[#FDB056]  font-bold  ">ХИТ!</span>
            )}
          </div>
        )}
        <div
          className={clsx("flex items-center justify-center ", {
            "max-w-[570px] gap-2 md:gap-10": is_best,
            " flex-row sm:flex-col gap-4 mt-2": !is_best,
          })}
        >
          <div
            className={clsx("flex flex-col ", {
              "max-w-[140px] sm:max-w-[250px]": is_best,
            })}
          >
            <h3 className="text-white text-[clamp(1rem,2.5vw,1.65rem)]">
              {period}
            </h3>
            <div
              className={clsx("mt-auto", is_best && "lg:mt-0 lg:text-right")}
            >
              {price !== null && <p className="text-[#FDB056] font-bold text-[clamp(2rem,2.5vw,3.1rem)]">
                {price} ₽
              </p>}
              {full_price !== null && (
                <p className="text-[#8B8E8F] line-through text-[clamp(0.9rem,2.5vw,1.5rem)]">
                  {full_price} ₽
                </p>
              )}
            </div>
          </div>
          <p className="text-[#DCDCDC] text-[0.9rem] md:text-[1rem] sm:max-w-[328px] max-w-[120px] text-center">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Card;
