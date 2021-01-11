import classes from "./items.module.css";
import Item from "components/Navigation/Item";

const Items = (props) => (
  <ul className={classes.NavigationItems}>
    <Item link="/" active>
      Burger Bulider
    </Item>
    <Item>Checkout</Item>
  </ul>
);

export default Items;
