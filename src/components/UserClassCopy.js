import React from "react";

class UserClassCopy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      counter2: 1,
    };
    console.log(
      this.props.parent + " " + this.props.name + "child constructor",
    );
  }

  componentDidMount() {
    console.log(
      this.props.parent + " " + this.props.name + "child componentDidMount",
    );
  }

  render() {
    console.log(this.props.parent + " " + this.props.name + "child render");
    const { name, location, contact } = this.props;
    return (
      <div className="user-card">
        <h2>counter: {this.state.counter}</h2>
        <button
          onClick={() => {
            this.setState({
              counter: this.state.counter + 1,
            });
          }}
        >
          increase counter
        </button>
        <button
          onClick={() => {
            this.setState({
              counter: this.state.counter - 1,
            });
          }}
        >
          decrease counter
        </button>

        <h2>counter: {this.state.counter2}</h2>
        <button
          onClick={() => {
            this.setState({
              counter2: this.state.counter2 + 1,
            });
          }}
        >
          increase counter2
        </button>
        <button
          onClick={() => {
            this.setState({
              counter2: this.state.counter2 - 1,
            });
          }}
        >
          decrease counter2
        </button>
        <h1>Name:{name}</h1>
        <h2>location:{location}</h2>
        <h2>contact: {contact}</h2>
      </div>
    );
  }
}

export default UserClassCopy;
