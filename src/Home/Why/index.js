import React, { Component } from "react";
import glamorous from "glamorous";

class Why extends Component {
  render() {
    return (
      <Box>
        <h2>Why do i need a inspection?</h2>
        <p>
          At Panhandle Building Inspections, we understand that it can be a
          stressful and overwhelming process when it comes to buying a home or
          commercial building. We are here to help make that process easier by
          finding any upcoming expenses, or problems that may arise in the
          future. Whether it's a system or a single component, you want to know
          that you're getting the best building possible. We pride ourselves in
          being professional, straightforeward and as communicative as we can.
          When you hire us you can expect a thorough, detailed, and accurate
          report. When you know that a complete inspection has been done you can
          confidently make your decision on your purchase.
        </p>
        <p>
          Real estate is the largest investment that most people will ever make.
          When you are considering the purchase of a building, make sure that
          you are making the most informed decision you can by relying on a
          professional, high quality home inspector like Panhandle Home
          Inspections.
        </p>
      </Box>
    );
  }
}

const Box = glamorous.div({
  padding: "30px"
});

export default Why;
