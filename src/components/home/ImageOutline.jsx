// ----------------------------
// IMPORTS SECTION
// ----------------------------

// Prop type validation
import PropTypes from 'prop-types';

// ----------------------------
// PROP TYPE DEFINITIONS
// ----------------------------

ImageOutline.propTypes = {
  imageName: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
};

// ----------------------------
// COMPONENT DEFINITION
// ----------------------------

/**
 * ImageOutline renders an image with an offset border effect.
 * The border appears behind the image and is visually offset to the bottom-right.
 * 
 * @component
 * @param {string} props.imageName - The base name of the image file (without extension)
 * @param {number} props.width - Width of the image in REM units
 * @returns {React.ReactElement} An image with styled offset border
 * 
 * @example
 * // Basic usage
 * <ImageOutline imageName="<imageName>" width={<width>} />
 */
function ImageOutline({ imageName, width }) {
  return (
    <div className="overflow-visible w-fit">
      <div className="border-4 border-primary h-fit -mr-3 -mb-3" style={{ width: `${width}rem` }}>
        <img
          className="w-full relative right-3 bottom-3"
          src={`/src/assets/images/${imageName}.png`}
        />
      </div>
    </div>
  );
}

export default ImageOutline;
