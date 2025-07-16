// ----------------------------
// IMPORTS SECTION
// ----------------------------

// React library
import React from 'react';
// Prop type validation
import PropTypes from 'prop-types';

// ImageOutline component
import ImageOutline from "/src/components/home/ImageOutline";

// Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from "@fortawesome/free-solid-svg-icons"

// ----------------------------
// PROP TYPE DEFINITIONS
// ----------------------------

ProjectBlock.propTypes = {
  imageName: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  repoUrl: PropTypes.string.isRequired,
  techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired
};

// ----------------------------
// COMPONENT DEFINITION
// ----------------------------

/**
 * ProjectBlock displays a project's information with a title, tech-stack, 
 * and description in a bullet-point format.
 * 
 * @component
 * @param {string} imageName - Screenshot of the project
 * @param {string} width - Width of the image in REM units
 * @param {string} title - Title of project
 * @param {string} repoUrl - Project repo URL
 * @param {Array} techStack - Array of project's tech-stack
 * @param {string} description - Description of project
 * @returns {React.ReactElement} Project block component
 */
function ProjectBlock({
  imageName,
  width,
  title,
  repoUrl,
  techStack,
  description
}) {
  return (
    <div className="flex items-center justify-between w-225">
      {/* Project screenshot */}
      <ImageOutline imageName={imageName} width={width} />

      <div className="w-120">
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-subheading1Color hover:text-tertiary transition"
        >
          {/* Project title and link to repo */}
          <h2 className="text-subheading1Size font-bold">{title}</h2>
          <FontAwesomeIcon icon={faLink} size="lg" />
        </a>

        <div className="flex flex-wrap gap-2 text-subheading2Size font-bold text-subheading2Color">
          {/* Dynamically render project's tech-stack */}
          {techStack.map((tech, index) => (
            <React.Fragment key={tech}>
              {index > 0 && ' • '}
              <span>{tech}</span>
            </React.Fragment>
          ))}
        </div>

        {/* Project description in bullet-point format */}
        <ul className="mt-2 list-disc pl-5">
          <li className="text-body2Color text-body2Size">
            {description}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectBlock;
