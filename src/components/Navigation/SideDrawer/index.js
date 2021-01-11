import classes from "./sideDrawer.module.css";
import Logo from "components/Logo";
import Items from "components/Navigation/Items";
import Backdrop from "components/UI/Backdrop";
import Aux from "hoc/Aux";

const SideDrawer = (props) => {
  const attachedClassses = [
    classes.SideDrawer,
    props.open ? classes.Open : classes.Close,
  ];
  return (
    <Aux>
      <Backdrop clicked={props.toggleSideDrawer} show={props.open} />
      <div className={attachedClassses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <Items />
        </nav>
      </div>
    </Aux>
  );
};

export default SideDrawer;
