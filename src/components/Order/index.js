import classes from "./order.module.css";

const Order = (props) => {
  const price = +props.order.price;
  const ingredients = [];
  const orderIngredients = props.order.ingredients;

  for (const key in orderIngredients) {
    ingredients.push({ name: key, amount: orderIngredients[key] });
  }

  const ingredientOutPut = ingredients.map((ig) => {
    return (
      <span key={ig.name} className={classes.ingredient}>
        {ig.name} : ({ig.amount})
      </span>
    );
  });

  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientOutPut}</p>
      <p>
        Price:<strong>Usd {price.toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default Order;
