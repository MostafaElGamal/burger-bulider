import { Component } from "react";
import Button from "components/UI/Button";
import Spinner from "components/UI/Spinner";
import classes from "./contactData.module.css";
import axios from "plugins/axiosOrders";
import Input from "components/UI/Input";

const createInputObject = ({ placeHolder, type, elementType, options }) => {
  console.log(elementType);
  return {
    value: "",
    elementType: elementType || "input",
    elementConfig: {
      type: type || "text",
      placeholder: placeHolder,
      options: options || null,
    },
  };
};

class ContactData extends Component {
  state = {
    orderForm: {
      name: createInputObject({ placeHolder: "Your Name" }),
      email: createInputObject({ placeHolder: "Your email" }),
      street: createInputObject({ placeHolder: "Your street" }),
      zipCode: createInputObject({ placeHolder: "Your zipCode" }),
      country: createInputObject({ placeHolder: "Your country" }),
      deliveryMethod: createInputObject({
        placeHolder: "Your Delivery Method",
        elementType: "select",
        type: "select",
        options: [
          { value: "fastest", displayValue: "Fastest" },
          { value: "cheapest", displayValue: "Cheapest" },
        ],
      }),
    },
    loading: false,
  };

  orederHandler = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
    };

    try {
      await axios.post("orders.json", order);
      this.setState({ loading: false });
      this.props.history.push("/");
    } catch (error) {
      console.log("[error] purchaseContinueHandler", error);
    }
  };
  render() {
    const formElementsArray = [];
    for (const [key, value] of Object.entries(this.state.orderForm)) {
      console.log(value);
      formElementsArray.push({
        id: key,
        config: value,
      });
    }

    console.log(formElementsArray);

    const inputs = formElementsArray.map((ele, i) => (
      <Input
        key={ele.id}
        elementType={ele.config.elementConfig.type}
        elementConfig={ele.config.elementConfig}
        value={ele.config.value}
      />
    ));

    const form = (
      <form>
        {inputs}
        <Button btnType="Success" clicked={this.orederHandler}>
          ORDER
        </Button>
      </form>
    );
    const spinner = <Spinner />;
    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact data</h4>
        {this.state.loading ? spinner : form}
      </div>
    );
  }
}

export default ContactData;
