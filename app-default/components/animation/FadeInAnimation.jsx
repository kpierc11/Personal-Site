"use client";
import { useEffect, useRef, useState } from "react";

function FadeInAnimation({ children }) {
  const [isVisible, setVisibility] = useState(false);
  const domRef = useRef(null);
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
  }, []);

  return (
    <div style={isVisible ? show : hidden} ref={domRef}>
      {children}
    </div>
  );
}

export default FadeInAnimation;
