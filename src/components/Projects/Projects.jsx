import { Link } from "react-router-dom";
import img from "../../assets/blog1.jpg";
import img1 from "../../assets/blog3.jpg";
import img2 from "../../assets/blog3.jpg";
import img3 from "../../assets/blog1.jpg";
import { useState } from "react";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="md:px-16 p-8 text-white ">
      <h4 className="uppercase tracking-[7px] text-center text-base font-medium">
        Our Masterpieces
      </h4>
      <h5 className="text-[25px] lg:text-[46px] font-medium poppins-semibold-italic text-center py-4">
        Traversing the Landscape of <br className="lg:block hidden" /> Our
        Creative Ventures
      </h5>
      <div className="md:py-10 py-6">
        <ul className="list-disc space-y-10">
          <li
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
                          <Link to="/ui-ix-design">

            <div className="flex items-center gap-40">
              {/* <Link to="/ui-ix-design"> */}
                <h3 className="lg:text-[46px] text-[26px]  poppins-semibold ">
                  UI/UX Design
                </h3>
              {/* </Link> */}
              {hoveredIndex === 0 && (
                <img
                  src={img}
                  alt="Image"
                  className=" hover:border-4  hover:border-amber-400 absolute 
                  md:block hidden right-32  max-w-full h-48 my-8 z-10 rounded-3xl"
                />
              )}
            </div>
            </Link>

            <hr />
          </li>

          <li
            onMouseEnter={() => setHoveredIndex(1)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
                          <Link to="/video-editing">

            <div className="flex items-center gap-40 ">
              {/* <Link to="/video-editing"> */}
                <h3 className="lg:text-[46px] text-[26px]  poppins-semibold ">
                  Video Editing
                </h3>
              {/* </Link> */}
              {hoveredIndex === 1 && (
                <img
                  src={img1}
                  alt="Image"
                  className=" absolute md:block hidden right-32  max-w-full h-48 my-8 z-10 rounded-3xl"
                />
              )}
            </div>
            </Link>

            <hr />
          </li>

          <li
            onMouseEnter={() => setHoveredIndex(2)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
                          <Link to="graphic-design">

            <div className="flex items-center gap-40 ">
              {/* <Link to="graphic-design"> */}
                <h3 className="lg:text-[46px] text-[26px]  poppins-semibold ">
                  Graphic Design
                </h3>
              {/* </Link> */}
              {hoveredIndex === 2 && (
                <img
                  src={img2}
                  alt="Image"
                  className=" absolute md:block hidden right-32  max-w-full h-48 my-8 z-10 rounded-3xl"
                />
              )}
            </div>
            </Link>

            <hr />
          </li>
          <li
            onMouseEnter={() => setHoveredIndex(3)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
                          <Link to="web-design">

            <div className="flex items-center gap-40 ">
              {/* <Link to="web-design"> */}
                <h3 className="lg:text-[46px] text-[26px]  poppins-semibold ">
                  Web Design
                </h3>
              {/* </Link> */}
              {hoveredIndex === 3 && (
                <img
                  src={img3}
                  alt="Image"
                  className=" absolute md:block hidden right-32  max-w-full h-48 my-8 z-10 rounded-3xl"
                />
              )}
            </div>
            </Link>

            <hr />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
