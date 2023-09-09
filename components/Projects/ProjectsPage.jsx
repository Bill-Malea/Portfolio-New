import React from "react";
import styles from "./Projects.module.css";

const projectsData = [
  {
    id: 1,
    title: "Rafiki ",
    description: "Description of Project 1",
    imageUrl: "/assets/whatsapp.png",
    url: "https://project1.example.com",
  },
  {
    id: 2,
    title: "Nester",
    description: "Description of Project 2",
    imageUrl: "/assets/twitter.png",
    url: "https://project2.example.com",
  },
];

const Projects = () => {
  const openProjectInNewTab = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className={styles.projectscontainer}>
      <div className={styles.projectlist}>
        {projectsData.map((project) => (
          <div key={project.id} className={styles.projectitem}>
            <div>
              <img
                className={styles.projectimage}
                src={project.imageUrl}
                alt={project.title}
              />
            </div>
            <div className={styles.projectinfo}>
              <div
                className={styles.projectitle}
                onClick={() => openProjectInNewTab(project.url)}
              >
                {project.title}
              </div>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
