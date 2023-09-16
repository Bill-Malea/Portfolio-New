import React from "react";
import styles from "./Architectures.module.css";

const projectsData = [
  {
    id: 1,
    title: "Ramii Architecture",
    description:
      "A serverless Architecture Running Ramii Wen and Ramii android platforms",
    imageUrl: "/assets/ramii.png",
    url: "https://project2.example.com",
  },
  {
    id: 2,
    title: "BetSafi Architecture",
    description: "A Serveless architecture for A betting Site ",
    imageUrl: "/assets/betsafi.png",
    url: "https://github.com/Bill-Malea/BetSafi",
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
