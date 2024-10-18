import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, it's Jacob Fang</h1>
        <p className={styles.description}>
          I'm a web developer with 1 year experience. Reach out if you'd like to know me more!
        </p>
        <a href="mailto:jacob.fang.jie@gmail.com" 
            className={styles.contactBtn}>
            Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};