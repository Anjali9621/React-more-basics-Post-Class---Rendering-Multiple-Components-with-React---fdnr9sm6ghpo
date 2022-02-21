import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  return (
    <div id="main">
      <h1 data-ns-test="project-name">Movie Database</h1>
      <p data-ns-test="project-description">
        descriptions of movies and allows visually impaired people to follow a
        movie along with their peers.
      </p>
    </div>
  );
};

export default App;
