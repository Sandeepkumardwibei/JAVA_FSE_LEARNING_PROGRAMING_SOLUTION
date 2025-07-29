// src/Cart.js
import React from 'react';

class Cart extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.itemname}</td>
        <td>{this.props.price}</td>
      </tr>
    );
  }
}

Cart.defaultProps = {
  itemname: 'Unknown Item',
  price: 0
};

export default Cart;
