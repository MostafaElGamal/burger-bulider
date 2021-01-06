import Aux from "hoc/Aux";
import classes from "./layout.module.css";

const Layout = (props) => (
  <Aux>
    <p>Toolbar, SideDrawer, Backdrop</p>
    <main className={classes.main}>{props.children}</main>
  </Aux>
);

export default Layout;
