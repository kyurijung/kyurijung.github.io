// ----------------------------
// IMPORTS SECTION
// ----------------------------

// Prop type validation
import PropTypes from 'prop-types';

// Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from "@fortawesome/free-solid-svg-icons"

// ----------------------------
// PROP TYPE DEFINITIONS
// ----------------------------

ExperienceBlock.propTypes = {
  company: PropTypes.string.isRequired,
  url: PropTypes.number.isRequired,
  roles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

// ----------------------------
// COMPONENT DEFINITION
// ----------------------------

/**
 * ExperienceBlock displays a company's experience information
 * including multiple roles and their descriptions in a bullet-point format.
 * 
 * @component
 * @param {string} company - Name of the company
 * @param {string} url - Company website URL
 * @param {Array} roles - Array of role objects
 * @returns {React.ReactElement} Experience block component
 */
function ExperienceBlock({
  company,
  url,
  roles
}) {
  return (
    <div>
      {/* Company Header with Link */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-subheading1Color hover:text-tertiary transition leading-none"
      >
        <h2 className="text-subheading1Size font-bold">{company}</h2>
        <FontAwesomeIcon icon={faLink} size="lg" />
      </a>

      {/* Roles */}
      {roles.map((role, index) => (
        <div key={index} className="mt-2">

          {/* Role Title and Dates */}
          <div className="flex items-baseline justify-between w-225">
            <h3 className="text-subheading2Size font-bold text-subheading2Color">{role.title}</h3>
            <h3 className="text-subheading3Size font-medium text-subheading3Color">{role.dates}</h3>
          </div>

          {/* Role Description Points */}
          <ul className="ml-4 mt-2 space-y-1 list-disc pl-5 w-213">
            {role.points.map((point, pointIndex) => (
              <li key={pointIndex} className="text-body2Size text-body2Color">
                {point.description}
              </li>
            ))}
          </ul>

        </div>
      ))}
    </div>
  );
}

export default ExperienceBlock;
