"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

export const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I specialise in creating modern, functional and beautiful websites that meet your business needs. I use the latest technologies and frameworks to ensure high performance and excellent user experience.",
    href: "",
  },
  {
    num: "02",
    title: "SEO",
    description:
      "Improve the loading speed and overall performance of your system. I analyse and implement solutions to reduce load times, increase SEO rankings, and improve the mobile experience.",
    href: "",
  },
  {
    num: "03",
    title: "Responsive Design",
    description:
      "Your website will look great on any device thanks to my responsive design. I will ensure that your website is accessible and user-friendly on all screens - from mobile phones to desktops.",
    href: "",
  },
  {
    num: "04",
    title: "API ",
    description:
      "    I will ensure seamless interaction between your website and other systems through API integration. I can help you integrate payment systems, and other components that extend the functionality of your website. ",
    href: "",
  },
];

export default function Services() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col justify-center gap-6 group"
            >
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.num}
                </div>
                <Link
                  href={service.href}
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex items-center justify-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white ">
                {service.title}
              </h2>
              <p className="text-white/60">{service.description}</p>
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
