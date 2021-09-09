import { useRef, useEffect } from "react";
import scrollReveal from "scrollreveal";

const ScrollRevealContainer = ({ children, move }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current)
      scrollReveal().reveal(sectionRef.current, {
        // reset: true,
        // delay: 200,
        // duration: 1000,
        // opacity: 0,
        // origin:
        //   move === "left"
        //     ? "left"
        //     : move === "right"
        //     ? "right"
        //     : move === "top"
        //     ? "top"
        //     : "bottom",
        // distance: "400px",
      });
  }, [sectionRef, move]);

  return <section ref={sectionRef}>{children}</section>;
};
export default ScrollRevealContainer;
