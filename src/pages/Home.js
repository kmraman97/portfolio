import React from "react";
import { Route } from "react-router-dom";
import Intro from "../components/homepage/Intro";

import classes from "./Home.module.css";

const Home = () => {
  return (
    <section className={classes.Home}>
      <Intro />

      <Route path="/Home/new-user">
        <p>Welcome, Home!!</p>
      </Route>
    </section>
  );
};

export default Home;
