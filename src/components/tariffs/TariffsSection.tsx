'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Card from '@/components/card/Card';
import Timer from '@/components/timer/Timer';
import ExclamationMark from '@/components/Icon/ExclamationMark';
import Form from '@/components/form/Form';
import { CardPropsData } from '@/types/data.types';
import image1 from '@/assets/img1.png';

interface TariffsSectionProps {
  cardData: CardPropsData[];
}

const TariffsSection = ({ cardData }: TariffsSectionProps) => {
  const initialTime = 120;
  const [seconds, setSeconds] = useState(initialTime);

  useEffect(() => {
    if (seconds <= 0) {
      return;
    }
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  const bestCard = cardData.find((card) => card.is_best);
  const otherCards = cardData.filter((card) => !card.is_best);

  const showDiscount = seconds > 0;

  const calculateSale = (fullPrice: number, price: number) => {
    if (!showDiscount || !fullPrice) return;
    return Math.round(((fullPrice - price) / fullPrice) * 100) || 0;
  };

  return (
    <>
      <div className="h-min flex w-full flex-col items-center gap-[4px]  bg-[#1D5B43] p-4 text-white ">
        <p className="text-[clamp(1.1rem,2.5vw,2rem)] text-center">
          Успейте открыть пробную неделю
        </p>
        <Timer seconds={seconds} />
      </div>
      <section className="bg-[#232829] w-full mx-auto pb-37 px-4 lg:px-0">
        <div className="max-w-[1216px] mx-auto pt-10 ">
          <p className="text-[clamp(1.4rem,2.5vw,2.5rem)] text-white ">
            Выбери подходящий для себя{' '}
            <span className="text-[#FDB056]">тариф</span>
          </p>
          <div className="w-full flex flex-col lg:flex-row gap-5 h-min items-center justify-between mt-5 mb-5 md:mt-25">
            <div className="relative w-[124px] h-[250px] sm:w-[380px] sm:h-[767px]">
              <Image
                src={image1}
                alt="image1"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="w-full max-w-[748px] h-min flex-col justify-between">
              <div className="flex w-full max-w-[748px] flex-col gap-5">
                {bestCard && (
                  <Card
                    {...bestCard}
                    sale={
                      bestCard.full_price
                        ? calculateSale(bestCard.full_price, bestCard.price)
                        : 0
                    }
                    full_price={showDiscount ? bestCard.full_price : undefined}
                  />
                )}
                <div className="flex w-full flex-col gap-5 lg:flex-row">
                  {otherCards.map((card) => (
                    <Card
                      key={card.id}
                      {...card}
                      sale={
                        card.full_price
                          ? calculateSale(card.full_price, card.price)
                          : 0
                      }
                      className="w-full lg:w-1/3"
                      full_price={!showDiscount ? undefined : card.full_price}
                    />
                  ))}
                </div>
              </div>
              <div className=" flex w-full max-w-[499px]  h-min gap-2 text-[clamp(0.75rem,2.5vw,1rem)] rounded-2xl bg-[#2D3233] py-[clamp(0.9rem,2.5vw,1.1rem)] pl-[clamp(0.8rem,2.5vw,1.3rem)] pr-5 mt-[clamp(0.8rem,2.5vw,1.3rem)]">
                <ExclamationMark className="text-[#FDB056]" />
                <p className="w-full  text-[#DCDCDC] max-w-[427px]">
                  Следуя плану на 3 месяца и более, люди получают в 2 раза
                  лучший результат, чем за 1 месяц
                </p>
              </div>
              <Form />
            </div>
          </div>
          <div className="mt-25 rounded-[16px] p-5 border-1 border-[#484D4E] flex flex-col gap-5">
            <p className="w-full h-[41px] sm:h-[68px] max-w-[461px] flex items-center justify-center rounded-[16px] border-[#81FE95] border-1 text-[#81FE95] text-[clamp(1rem,2.5vw,1.8rem)]">
              гарантия возврата 30 дней
            </p>
            <p className="text-[#DCDCDC] text-[clamp(0.8rem,2.5vw,1.5rem)]">
              Мы уверены, что наш план сработает для тебя и ты увидишь видимые
              результаты уже через 4 недели! Мы даже готовы полностью вернуть
              твои деньги в течение 30 дней с момента покупки, если ты не
              получишь видимых результатов.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TariffsSection;
