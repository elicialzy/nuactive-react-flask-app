import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { Component, useEffect, useState } from "react";
import {
  Box,
  Nav,
  Button,
  Collapsible,
  Heading,
  Grommet,
  Layer,
  Carousel,
  Image,
  ResponsiveContext,
} from "grommet";
import "./App.css";

export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          {/* <li>
            <Link to="/">Home</Link>
          </li> */}
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/activities">Activities</Link>
          </li>
          <li>
            <Link to="/rewards">Rewards</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          {/* <Route exact path="/">
            <Home />
          </Route> */}
          <Route path="/about">
            <About />
          </Route>
          <Route path="/activities">
            <Activities />
          </Route>
          <Route path="/rewards">
            <Rewards />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function About() {
  const ABOUT_URL = "http://127.0.0.1:5000/about";

  const [content, setContent] = useState("About");

  const getBackendContent = async () => {
    try {
      const res = await fetch(ABOUT_URL);
      const text = await res.text();
      setContent(text);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBackendContent();
  }, []);

  return (
    <div>
      <h2>{content}</h2>
    </div>
  );
}

function Activities() {
  return (
    <div>
      <h2>Activities</h2>
    </div>
  );
}

function Rewards() {
  return (
    <div>
      <h2>Rewards</h2>
    </div>
  );
}
