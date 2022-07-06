import React from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
const URL = "https://www.foreverqueen.ru/en";

export default ({ gallery, loaded,deneme }) => {
  const [details, setDetails] = React.useState(null);
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      detailsChanged(s) {
        setDetails(s.track.details);
      },
      initial: 2,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  function scaleStyle(idx) {
    if (!details) return {};
    const slide = details.slides[idx];
    const scale_size = 0.7;
    const scale = 1 - (scale_size - scale_size * slide.portion);
    return {
      transform: `scale(${scale})`,
      WebkitTransform: `scale(${scale})`,
    };
  }

  return (
    <div ref={sliderRef} className="keen-slider zoom-out">
      {gallery.map((src, idx) => (
        <div
          key={idx}
          className="keen-slider__slide zoom-out__slide"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div
            style={{
              ...scaleStyle(idx),
              maxWidth: "100%",
              objectFit: "fill",
              objectPosition: "left-bottom",
            }}
          >
            <img src={src} className="sliderContainer" onLoad={loaded} />
          </div>
        </div>
      ))}
    </div>
  );
};
