import React from "react";
import UserClassCopy from "./UserClassCopy";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userIfo: {
        name: "dummy",
        location: "dummy",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/abs9594");
    const json = await data.json();
    this.setState({
      userIfo: json,
    });
    console.log(json);
  }

  render() {
    const { name, avatar_url, updated_at } = this.state.userIfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h1>Name:{name}</h1>
        <h2>updated_at: {updated_at}</h2>
      </div>
    );
  }
}

export default UserClass;
