// import { useEffect, useRef } from "react";
import { MdArrowBackIosNew } from "react-icons/md";

interface PrevBtnProps {
  currentSlide?: number;
  slideCount?: number;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const PrevBtn = ({ className, onClick }: PrevBtnProps) => {
  //   const slidesPerScreen = useRef(4);

  //   useEffect(() => {
  //     const screenWidth = window.innerWidth;
  //     if (screenWidth > 1580) {
  //       slidesPerScreen.current = 4;
  //     } else if (screenWidth > 1280 && screenWidth <= 1580) {
  //       slidesPerScreen.current = 3;
  //     } else if (screenWidth <= 1280) {
  //       slidesPerScreen.current = 2;
  //     }
  //   }, []);

  return (
    <div className={className} onClick={onClick}>
      <MdArrowBackIosNew className="text-lg text-[#153535]" />
    </div>
  );
};

export default PrevBtn;
