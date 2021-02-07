import classes from "./input.module.css";

const Input = (props) => {
  let InputElement, inputClasses;
  inputClasses = [classes.InputElement];
  if (!props.invalid && props.value) inputClasses.push(classes.Invalid);
  switch (props.elementType) {
    case "input":
      InputElement = (
        <input
          onChange={props.changed}
          {...props.elementConfig}
          className={inputClasses.join(" ")}
          value={props.value}
        />
      );
      break;
    case "textarea":
      InputElement = (
        <textarea
          onChange={props.changed}
          {...props.elementConfig}
          className={inputClasses.join(" ")}
          cols="30"
          rows="10"
          value={props.value}
        />
      );
      break;
    case "select":
      InputElement = (
        <select
          className={inputClasses.join(" ")}
          value={props.value}
          onChange={props.changed}>
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
          onChange={props.changed}
          {...props.elementConfig}
          className={inputClasses.join(" ")}
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
