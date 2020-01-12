import React, { Component } from "react";
import Cartitem from "./cartItems";
class CartList extends Component {
  render() {
    const { value } = this.props;
    const { cart } = this.props.value;
    return (
      <div className="Cartitemcontainer">
        {cart.map(GP=> (
            <Cartitem key={GP.id} item={GP} value={value} />
          ))}
      </div>
    );
  }
}
export default CartList