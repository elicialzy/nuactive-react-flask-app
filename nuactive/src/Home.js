import React, { Component } from "react";
import App from "./App";
import {
  Box,
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

class Home extends Component {
  // calls the login method in authentication service
  login = () => {
    this.props.auth.login();
  };
  // calls the logout method in authentication service
  logout = () => {
    this.props.auth.logout();
  };
  render() {
    // calls the isAuthenticated method in authentication service
    const { isAuthenticated } = this.props.auth;
    const divStyle = {
      fontSize: 25,
    };
    return (
      <div>
        {isAuthenticated() && (
          <div className="container">
            <h5>
              You're logged in!{" "}
              <a style={{ cursor: "pointer" }} onClick={this.logout}>
                <Button primary label="Logout" />
              </a>
            </h5>
            <App />
          </div>
        )}
        {!isAuthenticated() && (
          <div className="container">
            <Box
              direction="column"
              pad="large"
              width="medium"
              align="center"
              gap="small"
              justify="center"
              margin={{
                vertical: "15%",
                horizontal: "38%",
              }}
              animation="fadeIn"
              background={{ color: "light-1", opacity: true }}
            >
              <h5 style={divStyle}>Welcome to nuactive!</h5>
              <a style={{ cursor: "pointer" }} onClick={this.login}>
                <Button primary label="Log in" color="neutral-3" />
              </a>{" "}
              <Box height="small" width="medium" overflow="hidden">
                <Carousel fill>
                  <Image
                    fit="cover"
                    src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg"
                  />
                  <Image
                    fit="cover"
                    src="https://i.pinimg.com/originals/a1/67/7a/a1677ab3a4ae09bb2b6f35565e15e3bf.jpg"
                  />
                  <Image
                    fit="cover"
                    src="//v2.grommet.io/assets/IMG_4210.jpg"
                  />
                </Carousel>
              </Box>
            </Box>
          </div>
        )}
      </div>
    );
  }
}

export default Home;
