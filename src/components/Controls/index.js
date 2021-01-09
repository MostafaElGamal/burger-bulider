import classes from "./controls.module.css";
import Control from "./Control";

const INGREDIENTS_CONTROLS_DATA = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const Controls = (props) => {
  const controlsComponent = INGREDIENTS_CONTROLS_DATA.map((ele, i) => (
    <Control
      key={i}
      label={ele.label}
      added={() => props.ingredientAdded(ele.type)}
      removed={() => props.ingredientRemoved(ele.type)}
      purchaseAble={props.purchaseAble}
    />
  ));
  return (
    <div className={classes.BuildControls}>
      <p>
        <span>Current Price:</span>
        <strong>{props.price.toFixed(2)}</strong>
      </p>
      {controlsComponent}
      <button
        className={classes.OrderButton}
        disabled={props.purchaseAble}
        onClick={props.ordered}>
        ORDER NOW
      </button>
    </div>
  );
};

export default Controls;
