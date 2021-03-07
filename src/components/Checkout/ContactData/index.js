import { Component } from "react";
import { connect } from "react-redux";
import Button from "components/UI/Button";
import Spinner from "components/UI/Spinner";
import classes from "./contactData.module.css";
import axios from "plugins/axiosOrders";
import Input from "components/UI/Input";

const createInputObject = ({
  placeHolder,
  type,
  elementType,
  options,
  rules,
}) => {
  return {
    value: "",
    valid: false,
    elementType: elementType || "input",
    elementConfig: {
      type: type || "text",
      placeholder: placeHolder,
      options: options || null,
    },
    validation: {
      required: true,
      ...rules,
    },
  };
};

class ContactData extends Component {
  state = {
    orderForm: {
      name: createInputObject({ placeHolder: "Your Name" }),
      email: createInputObject({ placeHolder: "Your email" }),
      street: createInputObject({ placeHolder: "Your street" }),
      zipCode: createInputObject({
        placeHolder: "Your zipCode",
        rules: {
          minLength: 5,
          maxLength: 5,
        },
      }),
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
    formIsValid: false,
    loading: false,
  };

  orederHandler = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });

    const formData = {};
    for (const orderFormKey in this.state.orderForm) {
      formData[orderFormKey] = this.state.orderForm[orderFormKey].value;
    }
    const order = {
      ingredients: this.props.ings,
      price: this.props.totalPrice,
      orderData: formData,
    };
    try {
      await axios.post("orders.json", order);
      this.setState({ loading: false });
      this.props.history.push("/");
    } catch (error) {
      console.log("[error] purchaseContinueHandler", error);
    }
  };

  checkValidity = (value, rules) => {
    let isValid = true;
    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }
    return isValid;
  };

  inputChangedHandler = (e, inputIdentifier) => {
    const updateOrderForm = { ...this.state.orderForm };
    const updatedFormELe = { ...updateOrderForm[inputIdentifier] };
    updatedFormELe.value = e.target.value;
    updatedFormELe.valid = this.checkValidity(
      updatedFormELe.value,
      updatedFormELe.validation,
    );
    updateOrderForm[inputIdentifier] = updatedFormELe;
    let formIsValid = true;
    for (const updatedOrderFormKey in updateOrderForm) {
      formIsValid = updateOrderForm[updatedOrderFormKey].valid && formIsValid;
    }
    this.setState({ orderForm: updateOrderForm, formIsValid });
  };

  render() {
    const formElementsArray = [];

    for (const [key, value] of Object.entries(this.state.orderForm)) {
      formElementsArray.push({
        id: key,
        config: value,
      });
    }

    const inputs = formElementsArray.map((ele, i) => (
      <Input
        key={ele.id}
        elementType={ele.config.elementConfig.type}
        elementConfig={ele.config.elementConfig}
        value={ele.config.value}
        invalid={ele.config.valid}
        changed={(e) => this.inputChangedHandler(e, ele.id)}
      />
    ));

    const form = (
      <form onSubmit={this.orederHandler}>
        {inputs}
        <Button btnType="Success" disabled={!this.state.formIsValid}>
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

const mapStateToProps = (state) => {
  return {
    ings: state.ings,
    totalPrice: state.totalPrice,
  };
};
export default connect(mapStateToProps)(ContactData);
