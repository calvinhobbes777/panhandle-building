import React, { Component } from "react";
import glamorous from "glamorous";

class Footer extends Component {
  render() {
    return (
      <Container id="contact">
        <Contact>
          <h2>Contact</h2>
          <a style={{ color: "black" }} href="tel:208-946-7318">
            208-946-7318
          </a>
          <br />
          <a style={{ color: "black" }} href="mailto:someone@example.com">
            adam@email.com
          </a>
          <br />
          <address>Sandpoint, ID 83864</address>
        </Contact>
        <Logo>
          <img
            width="150px"
            src="https://vignette.wikia.nocookie.net/empireatwar/images/4/44/1756_-_empire_insignia_logo_star_wars.png/revision/latest?cb=20150125035321"
            alt=""
          />
        </Logo>
        <Image>
          <h3 style={{ margin: "8px 0px 0px 0px" }}>Adam Reynolds</h3>
          <img
            className="pic"
            width="150px"
            src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/10622892_535277083282925_3226308286873379314_n.jpg?oh=7cd1e360f4db233d3b335b1831a59d8e&oe=5ADC46AF"
            alt=""
          />
          <p style={{ fontSize: "17px" }}>Liscensed and Certified Inspector</p>
        </Image>
      </Container>
    );
  }
}

const Container = glamorous.div({
  padding: "10px",
  backgroundImage:
    "linear-gradient(rgba(132,5,43,0.15),rgba(132,5,43,0.15)), url('/images/wood.jpg')",
  backgroundSize: "cover",
  borderTop: "3px solid black",
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between"
});

const mediaQuery = "@media screen and (max-width:680px)";

const Contact = glamorous.div({
  padding: "15px",
  display: "flex",
  flexDirection: "column",
  fontSize: "24px",
  textAlign: "center",
  justifyContent: "center"
});

const Logo = glamorous.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  [mediaQuery]: {
    display: "none"
  }
});

const media = "@media screen and (max-width:411px)";

const Image = glamorous.div({
  padding: "0px 20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  [media]: {
    display: "none"
  }
});

export default Footer;
