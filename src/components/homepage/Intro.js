import React from "react";
import classes from "./Intro.module.css";

const Intro = () => {
  return (
    <section>
      <ul className={classes.name}>
        <h1 className={classes.n1}>I'M</h1>
        <h1 className={classes.n2}>AMAN</h1>
        <h1 className={classes.n3}>KUMAR.</h1>
      </ul>
      <h1 className={classes.tagline}>FRONT-END & WEB DEVELOPER</h1>
    </section>
  );
};

export default Intro;
