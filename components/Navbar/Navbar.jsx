import React, { useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
const Navbar = () => {
  const [selectedTab, setSelectedTab] = useState("Home");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className={styles.navbar}>
      <ul className={styles.tabs}>
        <Link href={"/"}>
          <li
            className={`${styles.tab} ${
              selectedTab === "Home" && styles.active
            }`}
            onClick={() => handleTabClick("Home")}
          >
            Home
          </li>
        </Link>

        <Link href={"/projects"}>
          <li
            className={`${styles.tab} ${
              selectedTab === "Projects" && styles.active
            }`}
            onClick={() => handleTabClick("Projects")}
          >
            Projects
          </li>
        </Link>
        <Link href={"/architectures"}>
          <li
            className={`${styles.tab} ${
              selectedTab === "Architectures" && styles.active
            }`}
            onClick={() => handleTabClick("Architectures")}
          >
            Architectures
          </li>
        </Link>
        <li
          className={`${styles.tab} ${
            selectedTab === "Contact" && styles.active
          }`}
          onClick={() => handleTabClick("Contact")}
        >
          Contact
        </li>
      </ul>
      <div className={styles.slider}></div>
    </div>
  );
};

export default Navbar;
