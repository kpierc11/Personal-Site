import React, { useEffect, useRef, useState } from "react";

function FadeInAnimation(props: {
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) {
  const [isVisible, setVisibility] = useState(false);
  const domRef: any = useRef();
  const hidden = {
    opacity: 0,
    Visibility: "hidden",
    transform: "translateY(20vh)",
  };

  const show = {
    transition: "opacity 0.6s ease-out, transform 1.2s ease-out",
    opacity: 1,
    transform: "none",
    Visibility: "visible",
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setVisibility(entry.isIntersecting);
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <div style={isVisible ? show : hidden} ref={domRef}>
      {props.children}
    </div>
  );
}

export default FadeInAnimation;
