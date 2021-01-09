import classes from "./backdrop.module.css";

const Backdrop = (props) =>
  props.show ? (
    <div className={classes.Backdrop} onClick={props.clicked}></div>
  ) : null;

export default Backdrop;
