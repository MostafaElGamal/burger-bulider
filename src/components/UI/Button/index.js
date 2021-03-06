import classes from "./button.module.css";

const Button = (props) => {
  const btnTypeClass = classes[props.btnType];
  return (
    <button
      onClick={props.clicked}
      disabled={props.disabled}
      className={[classes.Button, btnTypeClass].join(" ")}>
      {props.children}
    </button>
  );
};

export default Button;
