// ----------------------------
// IMPORTS SECTION
// ----------------------------

// Local data import containing Experience info
import data from "/src/data/experience";

// ExperienceBlock component
import ExperienceBlock from "/src/components/experience/ExperienceBlock";

// ----------------------------
// COMPONENT DEFINITION
// ----------------------------

/**
 * Experience page section with dynamically rendered work experience.
 * 
 * @section
 * @returns {React.ReactElement} Experience section
 */
function Experience() {
  return (
    <div id="experience" className="scroll-mt-18 pt-10 pb-10">
      {/* Section heading */}
      <h2 className="ml-40 mb-10 text-headingSize font-bold text-headingColor leading-none">{data.sectionName}</h2>

      <section className="ml-48 space-y-10">
        {/* Dynamically render each organizational experience with role(s) */}
        {data.experiences.map((experience, index) => (
          <ExperienceBlock
            key={index}
            company={experience.company}
            url={experience.url}
            roles={experience.roles}
          />
        ))}
      </section>
    </div>
  );
}

export default Experience;
