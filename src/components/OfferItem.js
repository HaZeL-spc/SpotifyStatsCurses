import React, { useEffect, useRef, useState } from "react";

const OfferItem = ({ Icon, classOffer, text, textDescription }) => {
  const [iconsSize, setIconsSize] = useState(200);
  const ref1 = useRef();
  const refImages = useRef();

  const changeIconSize = (e) => {
    if (document.getElementsByTagName("body")[0].clientWidth > 1700) {
      setIconsSize(200);
      return;
    }
    if (document.getElementsByTagName("body")[0].clientWidth > 1300) {
      setIconsSize(150);
      return;
    }
    if (document.getElementsByTagName("body")[0].clientWidth > 992) {
      setIconsSize(130);
      return;
    }
    if (document.getElementsByTagName("body")[0].clientWidth > 768) {
      setIconsSize(100);
      return;
    }
  };

  const isOnScreen = () => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          //do your actions here
          ref1.current.style.filter = "opacity(100%)";
          setTimeout(() => {
            ref1.current.getElementsByClassName(
              "offer-description"
            )[0].style.filter = "opacity(100%)";
            refImages.current.style.filter = "opacity(100%)";
          }, 1000);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.8,
      }
    );
    if (ref1.current) {
      observer.observe(ref1.current);
    }
  };

  useEffect(() => {
    isOnScreen();
    window.addEventListener("resize", changeIconSize);
    return () => {
      window.removeEventListener("resize", changeIconSize);
    };
  }, [ref1]);

  return (
    <>
      <div className={classOffer} ref={ref1}>
        <div className="offer-element">
          <Icon size={iconsSize} />
          <h1 className="offer-header-item">{text}</h1>
        </div>
        <div className="offer-description">{textDescription}</div>
      </div>
      <div className={`${classOffer}` + "-photos"} ref={refImages}>
        <div className="pic1"></div>
        <div className="pic2"></div>
        <div className="pic3"></div>
        <div className="pic4"></div>
      </div>
    </>
  );
};

export default OfferItem;
