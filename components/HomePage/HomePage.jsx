import React from "react";
import styles from "./homepage.module.css";

const HomePage = () => {
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
            <li>Node.js</li>
            <li>Firebase</li>
            <li>Aws</li>
            <li>Serverless</li>
          </ul>
          <button className={styles.downloadbutton}>Download Cv</button>
          <p> Languages:</p>
          <ul className={styles.stacks}>
            <li>Javascript</li>
            <li>Dart</li>
            <li>Python</li>
          </ul>
        </div>
        <div className={styles.socialIcons}>
          <a href="https://twitter.com/your_twitter">
            <img
              src={"/assets/twitter.png"}
              alt="Twitter"
              className={styles.icon}
            />
          </a>
          <a href="https://github.com/your_github">
            <img
              src={"/assets/github.png"}
              alt="GitHub"
              className={styles.icon}
            />
          </a>
          <a href="https://linkedin.com/in/your_linkedin">
            <img
              src={"/assets/linkedin.png"}
              alt="LinkedIn"
              className={styles.icon}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
