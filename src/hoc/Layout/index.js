import Aux from "hoc/Aux";
import classes from "./layout.module.css";
import Toolbar from "components/Navigation/Toolbar";
import SideDrawer from "components/Navigation/SideDrawer";
import { Component } from "react";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerToggledHandler = () => {
    this.setState((prevState, props) => {
      return {
        showSideDrawer: !prevState.showSideDrawer,
      };
    });
  };
  render() {
    return (
      <Aux>
        <Toolbar toggleSideDrawer={this.sideDrawerToggledHandler} />
        <SideDrawer
          toggleSideDrawer={this.sideDrawerToggledHandler}
          open={this.state.showSideDrawer}
        />
        <main className={classes.main}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
