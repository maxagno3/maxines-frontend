import React, { Component } from "react";
import "semantic-ui-react";
import { Link } from "react-router-dom";

class Profile extends Component {
  render() {
    let { email, username, bio, image } = this.props.userInfo;
    console.log(this.props.userInfo);
    return (
      <div>
        <div className="ui pointing secondary menu container">
          <Link className="item" to="/api/user">
            My Profile
          </Link>
        </div>
        <div className="ui segment container">
          <img src={image} alt="Coming Soon..." />
          <h2>{username}</h2>
          <h1>{email}</h1>
          <h3>{bio}</h3>
          <Link className="item" to="/editProfile">
            Edit
          </Link>
        </div>
      </div>
    );
  }
}

export default Profile;
