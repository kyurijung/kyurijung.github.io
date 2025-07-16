// ----------------------------
// IMPORTS SECTION
// ----------------------------

// Local data import containing Footer items
import data from "/src/data/home";

// ----------------------------
// COMPONENT DEFINITION
// ----------------------------

/**
 * Footer at bottom of MainLayout that displays copyright info.
 * 
 * @component
 * @returns {React.ReactElement} Footer component
 */
function Footer() {
  const footer = data.footer

  return (
    <div className="pt-5 flex justify-end h-25">
      {/* Horizontal line above footer text */}
      <hr className="absolute left-1/2 -translate-x-1/2 w-[75%] text-primary"></hr>

      {/* Footer text */}
      <p className="absolute pt-3 pr-[13%] text-captionSize text-captionColor">
        © {footer.year}{' '}
        <a
          href={footer.url}
          target="_blank"
          rel="noopener noreferrer" 
          className="underline"
        >
          {footer.website}
        </a>{' '}
        by {footer.author}
      </p>
    </div>
  );
}

export default Footer;
