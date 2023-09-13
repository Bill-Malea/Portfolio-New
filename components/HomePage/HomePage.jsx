import React from "react";
import styles from "./homepage.module.css";

const HomePage = () => {
  const openProjectInNewTab = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className={styles.homePage}>
      <div className={styles.centeredContent}>
        <img
          src={"/assets/bill.png"}
          alt="bill"
          className={styles.roundedImage}
        />
        <div className={styles.name}>Bill Malea</div>
        <div className={styles.techStacks}>
          <p>Tech Stacks</p>
          <ul className={styles.stacks}>
            <li>Flutter</li>
            <li>React</li>
            <li>Next</li>
            <li>Node.js</li>
            <li>Firebase</li>
            <li>Aws</li>
            <li>Serverless</li>
          </ul>
          <button
            className={styles.downloadbutton}
            onClick={() =>
              openProjectInNewTab(
                "https://drive.google.com/file/d/1Gx3gqegcNs8DtlqygrDCghvdM0nEDYKI/view?usp=drive_link"
              )
            }
          >
            Download Cv
          </button>
          <p> Languages</p>
          <ul className={styles.stacks}>
            <li>Javascript</li>
            <li>Dart</li>
            <li>Python</li>
          </ul>
        </div>
        <div className={styles.socialIcons}>
          <img
            onClick={() => openProjectInNewTab("https://twitter.com/billmalea")}
            src={"/assets/twitter.png"}
            alt="Twitter"
            className={styles.icon}
          />

          <img
            onClick={() => openProjectInNewTab("https://github.com/Bill-Malea")}
            src={"/assets/github.png"}
            alt="GitHub"
            className={styles.icon}
          />

          <img
            onClick={() =>
              openProjectInNewTab(
                "https://www.linkedin.com/in/bill-malea-b56b19124/"
              )
            }
            src={"/assets/linkedin.png"}
            alt="LinkedIn"
            className={styles.icon}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
