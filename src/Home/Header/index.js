import React, { Component } from "react";
import glamorous from "glamorous";
import { HashLink as HLink } from "react-router-hash-link";

class Header extends Component {
  render() {
    return (
      <Container>
        <NavBar>
          <LogoContainer>
            <div>
              <h1>Panhandle Building Inspection</h1>
            </div>
          </LogoContainer>

          <NavContainer>
            <Item>
              <HashLink to={"#services"}>Services</HashLink>
            </Item>
            <Item>
              <HashLink to={"#steps"}>Steps</HashLink>
            </Item>
            <Item>
              <HashLink to={"#contact"}>Contact</HashLink>
            </Item>
          </NavContainer>
        </NavBar>
      </Container>
    );
  }
}

const Container = glamorous.div({
  display: "flex",
  width: "100%",
  height: "100vh",
  flexDirection: "column",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundImage:
    "linear-gradient(rgba(58,96,110,0.3),rgba(58,96,110,0.3)), url(/images/oldHouse.jpeg)"
});

const mediaQuery = "@media screen and (max-width: 900px)";

const NavBar = glamorous.div({
  minHeight: 100,
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  padding: "0px 60px",
  justifyContent: "space-between",
  [mediaQuery]: {
    justifyContent: "center"
  }
});

const LogoContainer = glamorous.div(props => ({
  width: "100%",
  maxWidth: 375,
  minWidth: 300,
  [mediaQuery]: {
    paddingTop: 20
  }
}));

const NavContainer = glamorous.div(props => ({
  width: 400,
  padding: 20,
  minWidth: 300,
  display: "flex",
  justifyContent: "space-between"
}));

const Item = glamorous.div({
  fontSize: 18,
  fontWeight: 100,
  color: "#F2F2F2"
});

const HashLink = glamorous(HLink)(props => ({
  color: "#f1efef",
  whiteSpace: "nowrap",
  textDecoration: "none !important",
  ":hover": {
    color: "#2BD1B5"
  }
}));

export default Header;
