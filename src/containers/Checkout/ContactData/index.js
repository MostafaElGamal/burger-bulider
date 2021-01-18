import { Component } from "react";
import Button from "components/UI/Button";
import classes from "./contactData.module.css";
class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
  };
  render() {
    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact data</h4>
        <form>
          <input type="text" name="name" placeholder="your Name" />
          <input type="email" name="email" placeholder="your Email" />
          <input type="text" name="street" placeholder="your Street" />
          <input type="text" name="postal" placeholder="your Postal code" />
          <Button btnType="Success ">ORDER</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
