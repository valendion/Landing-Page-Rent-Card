import { useState, useEffect } from "react";

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Muncul setelah scroll melewati 1 viewport (100vh)
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-8 right-8
        w-12 h-12
        rounded-full
        bg-blue-500 hover:bg-blue-600
        text-white
        shadow-lg hover:shadow-xl
        flex items-center justify-center
        text-xl
        transition-all duration-300 ease-in-out
        hover:-translate-y-1
        cursor-pointer
        z-50
        ${isVisible ? "opacity-100 visible" : "opacity-0 invisible"}
      `}
      aria-label="Back to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
}

export default BackToTop;
