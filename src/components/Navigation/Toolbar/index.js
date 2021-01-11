import classes from "./toolbar.module.css";
import Logo from "components/Logo";
import Items from "components/Navigation/Items";
import DrawerToggle from "components/Navigation/SideDrawer/DrawerToggle";

const Toolbar = (props) => (
  <header className={classes.Toolbar}>
    <DrawerToggle clicked={props.toggleSideDrawer} />
    <Logo height="80%" />
    <nav className={classes.DesktopOnly}>
      <Items />
    </nav>
  </header>
);

export default Toolbar;
