import classes from "./modal.module.css";
import Backdrop from "components/UI/Backdrop";
import Aux from "hoc/Aux";
import { Component } from "react";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  render() {
    const classesArray = [classes.Modal];
    if (this.props.show ? classesArray.push(classes.ShowModal) : null);
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div className={classesArray.join(" ")}>{this.props.children}</div>
      </Aux>
    );
  }
}

export default Modal;
