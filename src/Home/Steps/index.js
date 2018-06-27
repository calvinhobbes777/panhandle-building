import React, { Component } from "react";
import glamorous from "glamorous";

class Steps extends Component {
  render() {
    return (
      <Box id="steps">
        <h2>Steps</h2>
        <List>
          <h3>1. Schedule Inspection</h3>
          <P1>
            You can call email or book online using the contact form below. What
            ever is easiest for you.
          </P1>
        </List>

        <List>
          <h3> 2. Sign Inspection Agreement</h3>
          <P1>
            Use the link below to digitally sign and submit the inspection
            agreement. Or print it out and send it.
          </P1>
        </List>

        <List>
          <h3> 3. Inspection</h3>
          <P1>I will visit the house and perform a detailed inspection</P1>
        </List>
        <List>
          <h3>4. Pay Online Or In Person</h3>
          <P1>
            If you have received an invoice and would like to pay online with a
            credit or debt card click below. If you would like to send a check
            or pay with cash use the contact info below or give me a call.
          </P1>
        </List>

        <List>
          <h3>5. Recieve Your Inspection</h3>
          <P1>Get the inspection right in your email in box. </P1>
        </List>
      </Box>
    );
  }
}

const Box = glamorous.div({
  padding: "30px"
});

const mediaQuery = "@media screen and (max-width:995px)";

const List = glamorous.div({
  padding: "10px",
  display: "flex",
  flexDirection: "row",
  flex: 1,
  justifyContent: "space-between",
  [mediaQuery]: {
    flexDirection: "column"
  }
});

const P1 = glamorous.div({
  width: "700px",
  fontSize: "16px",
  lineHeight: "24px",
  [mediaQuery]: {
    padding: "5px",
    width: "100%"
  }
});
export default Steps;
