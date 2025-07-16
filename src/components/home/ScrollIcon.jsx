// ----------------------------
// IMPORTS SECTION
// ----------------------------

// React hooks
import { useState, useEffect } from "react";

// Font Awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

// ----------------------------
// COMPONENT DEFINITION
// ----------------------------

/**
 * A dynamic scroll indicator icon that disappears when users scroll down the page.
 * When clicked it scrolls to the next page section after the title section.
 * 
 * @component
 * @returns {React.ReactElement} An animated down-arrow icon that links to the '#about' section
 */
function ScrollIcon() {
  const [isVisible, setIsVisible] = useState(true);

  // Sets up scroll event listener to control icon visibility
  useEffect(() => {
    const handleScroll = () => {
      // Threshold for hiding the icon (200 px from top)
      if (window.scrollY > 200) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    // Cleanup event listener
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a 
      href="#about" 
      className={`absolute left-1/2 -translate-x-1/2 top-[90%] transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      {/* Double angle-down icon with hover effects */}
      <FontAwesomeIcon icon={faAnglesDown} className="fa-3x text-primary hover:text-tertiary transition" />
    </a>
  );
}

export default ScrollIcon;
