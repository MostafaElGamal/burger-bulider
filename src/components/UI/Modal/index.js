import classes from "./modal.module.css";
import Backdrop from "components/UI/Backdrop";
import Aux from "hoc/Aux";

const Modal = (props) => {
  const classesArray = [classes.Modal];
  if (props.show ? classesArray.push(classes.ShowModal) : null);
  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div className={classesArray.join(" ")}>{props.children}</div>
    </Aux>
  );
};

export default Modal;
