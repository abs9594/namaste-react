import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("parent componentDidMount");
  }

  render() {
    console.log("parent render");
    return (
      <React.Fragment>
        <div>About us</div>
        <UserClass name="first" location="Mumbai" contact="abs9594@gmail.com" />
      </React.Fragment>
    );
  }
}
export default About;
