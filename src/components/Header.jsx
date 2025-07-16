// ----------------------------
// IMPORTS SECTION
// ----------------------------

// React hooks
import { useState, useEffect } from "react";

// Local data import containing Header items
import data from "/src/data/home";

// Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun , faMoon } from "@fortawesome/free-solid-svg-icons"

// ----------------------------
// COMPONENT DEFINITION
// ----------------------------

/**
 * Fixed header at top of App that displays anchor links to MainLayout sections.
 * 
 * @component
 * @returns {React.ReactElement} Header component
 */
function Header() {
  const header = data.header
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check local storage first, then system preference
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      return JSON.parse(savedMode);
    } else {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
  });

  useEffect(() => {
    // Apply to document root node
    document.documentElement.classList.toggle("dark", !isDarkMode);

    // Save preference
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return (
    <header className="z-50 fixed flex justify-center items-center h-18 w-full bg-background border-b border-primary">
      <ul className="flex gap-20 font-mono font-bold text-headingColor">
        {/* Dynamically render header links */}
        {header.map((item, index) => (
          <li key={index}>
            <a 
              href={`#${item.anchorLink}`}
              className="text-body2Size hover:text-tertiary transition"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
      <button
        className="absolute right-7 top-1/2 -translate-y-1/2 items-center justify-center w-10 h-10 rounded-lg border border-primary"
        onClick={() => {
          setIsDarkMode(!isDarkMode)
        }}
      >
        {isDarkMode ? (
          <FontAwesomeIcon icon={faSun} size="lg" className="text-primary hover:text-tertiary transition" />
        ) : (
          <FontAwesomeIcon icon={faMoon} size="lg" className="text-primary hover:text-tertiary transition" />
        )}
      </button>
    </header>
  );
}

export default Header;
