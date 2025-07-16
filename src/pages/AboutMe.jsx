// ----------------------------
// IMPORTS SECTION
// ----------------------------

// Local data import containing AboutMe info
import data from "/src/data/about-me";

// ImageOutline component
import ImageOutline from "/src/components/home/ImageOutline";

// ----------------------------
// COMPONENT DEFINITION
// ----------------------------

/**
 * About Me page section containing bio and portrait.
 * 
 * @section
 * @returns {React.ReactElement} About Me section
 */
function AboutMe() {
  return (
    <div id="about" className="scroll-mt-18 pt-10 pb-15">
      {/* Section heading */}
      <h2 className="ml-40 mb-7 text-headingSize font-bold text-headingColor leading-none">{data.sectionName}</h2>

      <div className="ml-48 flex items-center justify-between w-225">
        {/* Bio */}
        <div className="w-120">
          <text className="text-body1Size text-body1Color">
            {data.career}
            <br />
            <br />
            {data.hobbies}
          </text>
        </div>

        {/* Portrait */}
        <ImageOutline imageName={data.imageName} width={19} />
      </div>
    </div>
  );
}

export default AboutMe;
