import React from "react";
import styles from "./Projects.module.css";

const projects = [
  {
    id: 1,
    title: "Rafiki ",
    stack: ["Flutter", "Firebase"],
    modules: [
      "Authentication Using FirebaseAuth",
      "Data Fetching From Firebase RealTime Database",
    ],
    description:
      "A Simple Therapy Companion For Patients With Depression,Where they get to meet Therapists Who can Help them Recover",
    imageUrl: "/assets/rafiki.png",
    url: "https://project1.example.com",
  },
  {
    id: 2,
    title: "Nester",
    stack: ["Flutter", "Firebase"],
    modules: [
      "Authentication Using FirebaseAuth",
      "Data Fetching From Firebase RealTime Database",
      "QR Based Attendatnce",
    ],
    description: "Description of Project 2",
    imageUrl: "/assets/nester.png",
    url: "https://project2.example.com",
  },
  {
    id: 3,
    title: "Ramii",
    stack: ["Flutter", "Amplify", "GraphQl"],
    description: "Users Android Interface for Ramii Ecommerce Site",
    modules: [
      "Authentication Using Aws Cognito",
      "Data Fetching From Aws AppSync Via GraphQl Queries",
      "Order Creation using GraphQl Mutations",
      "Payment Intergration via Daraja Mpesa Api",
    ],
    imageUrl: "/assets/ramii.png",
    url: "https://play.google.com/store/apps/details?id=co.ke.ramii",
  },
  {
    id: 4,
    title: "RamiiVendor",
    stack: ["Flutter", "Amplify", "GraphQl"],
    modules: [
      "Authentication Using Aws Cognito",
      "Data Fetching From Aws AppSync Via GraphQl Queries",
      "Order Creation using GraphQl Mutations",
      "Payment Intergration via Daraja Mpesa Api",
    ],
    description:
      "Vendor Facing  Android Interface for Ramii Ecommerce Site That Allows Vendors To Add Items To the Ramii Platform",
    imageUrl: "/assets/splashicon.png",
    url: "https://play.google.com/store/apps/details?id=co.ke.ramiivendor",
  },

  {
    id: 3,
    title: "RamiiWeb",
    stack: ["React", "Next", "GraphQl"],
    modules: [
      "Authentication Using Aws Cognito",
      "Data Fetching From Aws AppSync Via GraphQl Queries",
      "Order Creation using GraphQl Mutations",
      "Payment Intergration via Daraja Mpesa Api",
    ],
    description:
      "Users Web Interface for Ramii Ecommerce Site That Allows Users Access the Platform",
    imageUrl: "/assets/ramii.png",
    url: "https://www.ramii.co.ke",
  },
];

const Projects = () => {
  const openProjectInNewTab = (url) => {
    window.open(url, "_blank");
  };
  const projectsData = [...projects].reverse();

  return (
    <div className={styles.projectscontainer}>
      <div className={styles.projectlist}>
        {projectsData.map((project) => (
          <div
            key={project.id}
            className={styles.projectitem}
            onClick={() => openProjectInNewTab(project.url)}
          >
            <div>
              <img
                className={styles.projectimage}
                src={project.imageUrl}
                alt={project.title}
              />
            </div>
            <div className={styles.projectinfo}>
              <div className={styles.projectitle}>{project.title}</div>

              <div className={styles.projectsection}>
                <h5>Stack</h5>
                <ul>
                  {project.stack.map((stack, index) => (
                    <li key={index}>{stack}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.projectsection}>
                <h5>Modules</h5>
                <ul>
                  {project.modules.map((module, index) => (
                    <li key={index}>{module}</li>
                  ))}
                </ul>
              </div>

              <h5>Description</h5>

              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
