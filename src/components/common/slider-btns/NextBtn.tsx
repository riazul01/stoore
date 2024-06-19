// import { useEffect, useRef } from "react";
import { MdArrowForwardIos } from "react-icons/md";

interface NextBtnProps {
  currentSlide?: number;
  slideCount?: number;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const NextBtn = ({ className, onClick }: NextBtnProps) => {
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
      <MdArrowForwardIos className="text-xl text-[#153535]" />
    </div>
  );
};

export default NextBtn;
