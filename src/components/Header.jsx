import React from "react";
import image from "../a126e4b0-6595-4955-b260-2cff9fd98877_200x200.png";
import { Link, NavLink } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <>
        <header className="header-color">
          <ul className="flex container">
            <Link to="/">
              <img src={image} alt="Coming Soon..." className="header-image" />
            </Link>
            <nav className="margin-top-1rem margin-top-3rem">
              {this.props.isLoggedIn ? (
                <AuthHeader username={this.props.userInfo.username} />
              ) : (
                <NonAuthHeader />
              )}
            </nav>
          </ul>
        </header>
      </>
    );
  }
}

const NonAuthHeader = () => {
  return (
    <NavLink
      activeClassName="active-class"
      className="margin-right-1rem font-color"
      to="/login"
    >
      Take me in
    </NavLink>
  );
};

const AuthHeader = (props) => {
  return (
    <>
      <NavLink
        to="/"
        activeClassName="active-class"
        className="margin-right-1rem font-color"
        exact
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        activeClassName="active-class"
        className="margin-right-1rem font-color"
      >
        About
      </NavLink>
      <NavLink
        to="/api/user"
        activeClassName="active-class"
        className="margin-right-1rem font-color"
      >
        {props.username}
      </NavLink>
    </>
  );
};

export default Header;
