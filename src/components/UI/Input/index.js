import classes from "./input.module.css";

const Input = (props) => {
  let InputElement;
  switch (props.elementType) {
    case "input":
      InputElement = (
        <input
          {...props.elementConfig}
          className={classes.InputElement}
          value={props.value}
        />
      );
      break;
    case "textarea":
      InputElement = (
        <textarea
          {...props.elementConfig}
          className={classes.InputElement}
          cols="30"
          rows="10"
          value={props.value}
        />
      );
      break;
    case "select":
      InputElement = (
        <select className={classes.InputElement} value={props.value}>
          {props.elementConfig.options.map((ele) => (
            <option value={ele.value} key={ele.value}>
              {ele.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      InputElement = (
        <input
          {...props.elementConfig}
          className={classes.InputElement}
          value={props.value}
        />
      );
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {InputElement}
    </div>
  );
};

export default Input;
