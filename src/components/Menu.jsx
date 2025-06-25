import { useRef, useState } from "react";
import { sliderLists } from "../../constants/index";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Menu = () => {
  const contentRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  useGSAP(() => {
    gsap.from('#title', {opacity: 0, duration: 1});
    gsap.from('.cocktail', {scale: 0.7, xPercent: -100, duration: 0.8})
    gsap.from('.details', {opacity: 0, yPercent: 50, duration: 1})
  }, [currentIndex])

  return (
    <section id="menu" aria-labelledby="menu-heading">
      <img
        src="/images/slider-left-leaf.png"
        alt="left-leaf"
        id="m-left-leaf"
      />
      <img
        src="/images/slider-right-leaf.png"
        alt="right-leaf"
        id="m-right-leaf"
      />

      <h2 id="menu-heading" className="sr-only">
        Cocktail Menu
      </h2>

      <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
        {sliderLists.map((cocktail, index) => {
          return (
            <button
              key={index}
              className={`${
                index === currentIndex
                  ? "text-white border-white"
                  : "text-white/50 border-white/50"
              }`}
              onClick={() => {
                setCurrentIndex(index);
              }}
            >
              {cocktail.name}
            </button>
          );
        })}
      </nav>

      <div className="content">
        <div className="arrows">
          <button
            className="text-left"
            onClick={() => {
              setCurrentIndex(
                (currentIndex - 1 + sliderLists.length) % sliderLists.length
              );
            }}
          >
            <span>
              {
                sliderLists[
                  (currentIndex - 1 + sliderLists.length) % sliderLists.length
                ].name
              }
            </span>
            <img
              src="/images/right-arrow.png"
              alt="right-arrow"
              aria-hidden={true}
            />
          </button>

          <button
            className="text-left"
            onClick={() => {
              setCurrentIndex((currentIndex + 1) % sliderLists.length);
            }}
          >
            <span>
              {sliderLists[(currentIndex + 1) % sliderLists.length].name}
            </span>
            <img
              src="/images/left-arrow.png"
              alt="left-arrow"
              aria-hidden={true}
            />
          </button>
        </div>

        <div className="cocktail">
          <img
            src={sliderLists[currentIndex].image}
            className="object-contain"
          />
        </div>
      </div>

      <div className="recipe">
        <div ref={contentRef} className="info">
          <p>Recipe for:</p>
          <p id="title">{sliderLists[currentIndex].name}</p>
        </div>

        <div className="details">
          <h2>{sliderLists[currentIndex].title}</h2>
          <p>{sliderLists[currentIndex].description}</p>
        </div>
      </div>
    </section>
  );
};

export default Menu;
