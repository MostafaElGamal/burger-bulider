import Aux from "hoc/Aux";

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey, i) => (
    <li key={`${igKey}_${i}`}>
      <span className="text-capitalize">{igKey}</span>
      <span>:{props.ingredients[igKey]}</span>
    </li>
  ));

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to checkout !</p>
    </Aux>
  );
};

export default OrderSummary;
