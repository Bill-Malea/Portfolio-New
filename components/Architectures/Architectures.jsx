import React from "react";
import styles from "./Architectures.module.css";

const projectsData = [
  {
    id: 1,
    title: "Mpesa Payment",
    description: "Description of Project 1",
    imageUrl: "/assets/whatsapp.png",
    url: "https://project1.example.com",
  },
  {
    id: 2,
    title: "Ramii Architecture",
    description: "Description of Project 2",
    imageUrl: "/assets/twitter.png",
    url: "https://project2.example.com",
  },
];

const Architecture = () => {
  const openProjectInNewTab = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className={styles.archcontainer}>
      <div className={styles.archlist}>
        {projectsData.map((project) => (
          <div key={project.id} className={styles.architem}>
            <div>
              <img
                className={styles.archimage}
                src={project.imageUrl}
                alt={project.title}
              />
            </div>
            <div className={styles.archinfo}>
              <div
                className={styles.archtitle}
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

export default Architecture;
