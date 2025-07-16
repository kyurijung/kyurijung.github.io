// ----------------------------
// IMPORTS SECTION
// ----------------------------

// Local data import containing Projects info
import data from "/src/data/projects";

// ProjectBlock component
import ProjectBlock from "/src/components/projects/ProjectBlock";

// ----------------------------
// COMPONENT DEFINITION
// ----------------------------

/**
 * Projects page section with dynamically rendered projects.
 * 
 * @section
 * @returns {React.ReactElement} Projects section
 */
function Projects() {
  return (
    <div id="projects" className="scroll-mt-18 pt-10 pb-15">
      {/* Section heading */}
      <h2 className="ml-40 mb-15 text-headingSize font-bold text-headingColor leading-none">{data.sectionName}</h2>

      <section className="ml-52 space-y-15">
        {/* Dynamically render each project with image and repo link */}
        {data.projects.map((project, index) => (
          <ProjectBlock
            key={index}
            imageName={project.imageName}
            width={project.imageWidth}
            title={project.title}
            repoUrl={project.url}
            techStack={project.tech}
            description={project.description}
          />
        ))}
      </section>
    </div>
  );
}

export default Projects;
