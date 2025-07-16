// ----------------------------
// IMPORTS SECTION
// ----------------------------

// Local data import containing Header items
import data from "/src/data/home";

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
    </header>
  );
}

export default Header;
