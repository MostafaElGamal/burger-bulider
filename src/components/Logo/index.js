import classes from "./logo.module.css";
import burgerLogo from "assets/images/logo.png";
const Logo = (props) => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <img src={burgerLogo} alt="Logo" style={{ height: props.height }} />
  </div>
);

export default Logo;
