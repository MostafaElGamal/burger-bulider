import classes from "./Burger.module.css";
import Ingredient from "components/Ingredient";
import { withRouter } from "react-router-dom";

const Burger = (props) => {
  const ingredientsComponents = [];
  const transformedIngredients = Object.keys(props.ingredients);
  const noIgredients = <h1>No Ingredients</h1>;
  transformedIngredients.map((igKey) => {
    const ingredientValue = props.ingredients[igKey];

    for (let index = 0; index < ingredientValue; index++) {
      ingredientsComponents.push(
        <Ingredient type={igKey} key={igKey + index} />,
      );
    }
    return true;
  });

  return (
    <div className={classes.Burger}>
      <Ingredient type="bread-top" />
      {ingredientsComponents.length ? ingredientsComponents : noIgredients}
      <Ingredient type="bread-bottom" />
    </div>
  );
};

export default withRouter(Burger);
