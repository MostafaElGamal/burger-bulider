import classes from "./items.module.css";
import Item from "components/Navigation/Item";

const Items = (props) => (
  <ul className={classes.NavigationItems}>
    <Item link="/">Burger Bulider</Item>
    <Item link="/orders">Orders</Item>
  </ul>
);

export default Items;
