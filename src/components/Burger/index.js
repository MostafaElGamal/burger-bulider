import classes from "./Burger.module.css";
import Ingredient from "components/Ingredient";

const Burger = (props) => {
  const ingredientsComponents = [];
  const transformedIngredients = Object.keys(props.ingredients);

  transformedIngredients.map((igKey) => {
    const ingredientValue = props.ingredients[igKey];

    for (let index = 0; index < ingredientValue; index++) {
      ingredientsComponents.push(
        <Ingredient type={igKey} key={igKey + index} />,
      );
    }
    return true;
  });

  return <div className={classes.Burger}>{ingredientsComponents}</div>;
};

export default Burger;
