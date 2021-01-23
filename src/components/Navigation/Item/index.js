import classes from "./item.module.css";
import { NavLink } from "react-router-dom";

const Item = (props) => (
  <li className={classes.NavigationItem}>
    <NavLink
      to={props.link}
      activeClassName={classes.active}
      className={props.active ? classes.active : null}
      exact>
      {props.children}
    </NavLink>
  </li>
);

export default Item;
