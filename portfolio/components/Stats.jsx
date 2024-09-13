"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 9, // змінено на число для коректної роботи CountUp
    suffix: "+", // додано суфікс
    value: "Months of Experience",
  },
  {
    num: 4,
    value: "Projects Completed",
  },
  {
    num: 12,
    value: "Technologies Used",
  },
];

export default function Stats() {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto ">
        <div className="flex flex-wrapp gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
            >
              <CountUp
                end={item.num}
                duration={5}
                delay={2}
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <span className="text-4xl xl:text-6xl font-extrabold">
                {item.suffix || ""}
              </span>
              <p
                className={`${
                  item.value.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                } leading-snug text-white/80`}
              >
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
