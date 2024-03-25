import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";

const ProjectIsotop = () => {
  const isotope = useRef();
  const [projects, setProjects] = useState([]);
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".works-items", {
        itemSelector: ".works-col",
        percentPosition: true,
        masonry: {
          columnWidth: ".works-col",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
  }, []);

  const fetchProjects = async () => {
    try {
      // Fetch projects from your API
      const response = await fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae");
      const data = await response.json();
      setProjects(data.user.projects); // Assuming projects array is inside a "projects" key in the response
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };

  const activeBtn = (value) => (value === filterKey ? "active" : "");

  return (
    <Fragment>
      <div className="works-box">
        <div className="filter-links">
          <a
            className={`c-pointer ${activeBtn("*")}`}
            onClick={handleFilterKeyChange("*")}
            data-href=".works-col"
          >
            All
          </a>
          {/* Add filter links dynamically */}
          {/* Assuming we have some way to categorize projects */}
          {["React JS", "Next JS", "MERN", "CSS"].map(
            (category) => (
              <a
                key={category}
                className={`c-pointer ${activeBtn(category)}`}
                onClick={handleFilterKeyChange(category)}
                data-href={`.sorting-${category.toLowerCase().replace(" ", "-")}`}
              >
                {category}
              </a>
            )
          )}
        </div>
        <div className="works-items works-list-items row">
          {/* Map over projects and generate project items dynamically */}
          {projects.map((project) => (
            <div
              key={project._id}
              className={`works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-${(project.category?project.category.toLowerCase().replace(" ", "-") : "")}`}
            >
              <div className="works-item">
                <Link href={`/work-single/${project._id}`}>
                  <a>
                    <span className="image">
                      <span className="img">
                        <img src={project.image.url} alt={project.title} />
                        <span className="overlay" />
                      </span>
                    </span>
                    <span className="desc">
                      <span className="name">{project.title}</span>
                      {/* <span className="category">
                        {project.category}
                      </span> */}
                      <span className="category">{project.techStack.join(', ')}</span>
                      <span className="category">{project.liveurl}</span>
                      <span className="category">{project.githuburl}</span>
                    </span>
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default ProjectIsotop;


// import Isotope from "isotope-layout";
// import Link from "next/link";
// import { Fragment, useEffect, useRef, useState } from "react";

// const ProjectIsotop = ({ projects }) => {
//   const isotope = useRef();
//   const [filterKey, setFilterKey] = useState("*");
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     setTimeout(() => {
//       isotope.current = new Isotope(".works-items", {
//         itemSelector: ".works-col",
//         percentPosition: true,
//         masonry: {
//           columnWidth: ".works-col",
//         },
//         animationOptions: {
//           duration: 750,
//           easing: "linear",
//           queue: false,
//         },
//       });
//     }, 1000);
//   }, []);

//   useEffect(() => {
//     if (isotope.current) {
//       filterKey === "*"
//         ? isotope.current.arrange({ filter: "*" })
//         : isotope.current.arrange({ filter: `.${filterKey}` });
//     }
//   }, [filterKey]);

//   useEffect(() => {
//     const allCategories = projects.reduce((acc, project) => {
//       project.techStack.forEach((category) => {
//         const lowercaseCategory = category.toLowerCase();
//         if (!acc.includes(lowercaseCategory)) {
//           acc.push(lowercaseCategory);
//         }
//       });
//       return acc;
//     }, []);
//     console.log("All categories:", allCategories);
//     setCategories(allCategories);
//   }, [projects]);

//   const handleFilterKeyChange = (key) => () => {
//     setFilterKey(key);
//   };

//   const allCategories = [...new Set(projects.flatMap((project) => project.techStack))];

//   return (
//     <Fragment>
//       <div className="works-box">
//       <div className="filter-links">
//           <a
//             className={`c-pointer ${filterKey === "*" ? "active" : ""}`}
//             onClick={handleFilterKeyChange("*")}
//           >
//             All
//           </a>
//           {allCategories.map((category) => (
//             <a
//               key={category}
//               className={`c-pointer ${filterKey === category.toLowerCase() ? "active" : ""}`}
//               onClick={handleFilterKeyChange(category.toLowerCase())}
//             >
//               {category}
//             </a>
//           ))}
//         </div>
//         <div className="works-items works-list-items row">
//           {/* Render projects here */}
//         </div>
//         <div className="works-items works-list-items row">
//           {projects.map((project) => (
//             <div
//               key={project._id}
//               className={`works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 ${project.techStack
//                 .map((stack) => stack.toLowerCase().replace(" ", "-"))
//                 .join(" ")}`}
//             >
//               <div className="works-item">
//                 <Link href={`/work-single/${project._id}`}>
//                   <a>
//                     <span className="image">
//                       <span className="img">
//                         <img src={project.image.url} alt={project.title} />
//                         <span className="overlay" />
//                       </span>
//                     </span>
//                     <span className="desc">
//                       <span className="name">{project.title}</span>
//                       <span className="category">{project.techStack.join(', ')}</span>
//                     </span>
//                   </a>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </Fragment>
//   );
// };

// export default ProjectIsotop;
