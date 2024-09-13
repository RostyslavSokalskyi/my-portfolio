"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

export default function WorkSlideBtns({
  containerStyles,
  btnSTyles,
  iconStyles,
}) {
  const swiper = useSwiper();

  return (
    <div className={containerStyles}>
      <button className={btnSTyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={iconStyles} />
      </button>
      <button className={btnSTyles} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={iconStyles} />
      </button>
    </div>
  );
}
