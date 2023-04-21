import { Link } from "react-router-dom";

export default function Navigation(props) {
  return (
    <menu className={`navbar-menu ${props.device}`}>
      {props.device === "mobile" ? (
        ""
      ) : (
        <Link to="/">
          <img
            src={require("../assets/nav-logo.png")}
            alt="Little Lemon logo"
            className="nav-image"
          ></img>
        </Link>
      )}
      <Link className="hover-effect" to="/">
        <h1>Home</h1>
      </Link>
      <Link className="hover-effect" to="/about">
        <h1>About</h1>
      </Link>
      <Link className="hover-effect" to='/species'>
        <h1>Species Of Interest</h1>
      </Link>
      <Link className="hover-effect" to="/getInvolved">
        <h1>Get Involved</h1>
      </Link>
    </menu>
  );
}
