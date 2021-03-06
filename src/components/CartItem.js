import React, { Component } from 'react';
import * as Message from './../constants/Message';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

class CartItem extends Component {

    render() {
        var { item } = this.props;
        return (
            <Router>
                <tr>
                    <th scope="row">
                        <img src={ item.product.image }
                            alt={ item.product.name} 
                            className="img-fluid z-depth-0" 
                        />
                    </th>
                    <td>
                        <h5>
                            <strong>{ item.product.name }</strong>
                        </h5>
                    </td>
                    <td>${ item.product.price }</td>
                    <td className="center-on-small-only">
                        <span className="qty">{ item.quantity } </span>
                        <div className="btn-group radio-group" data-toggle="buttons">
                            <label 
                                onClick={ () => this.onUpdateQuantity(item.product, item.quantity - 1) }
                                className="btn btn-sm btn-success btn-rounded waves-effect waves-light"
                            >
                                <Link to="">—</Link>
                            </label>
                            <label 
                                onClick={ () => this.onUpdateQuantity(item.product, item.quantity + 1) }
                                className="btn btn-sm btn-success btn-rounded waves-effect waves-light"
                            >
                                <Link to="">+</Link>
                            </label>
                        </div>
                    </td>
                    <td>${ this.showSubTotal(item.product.price, item.quantity) }</td>
                    <td>
                        <button 
                            type="button" 
                            className="btn btn-sm btn-danger waves-effect waves-light" 
                            data-toggle="tooltip" 
                            data-placement="top"
                            title="" 
                            data-original-title="Remove item"
                            onClick={ () => this.onDelete(item.product) }
                        >
                            X
                        </button>
                    </td>
                </tr>
            </Router>
        );
    }

    onUpdateQuantity = (product, quantity) => {
        var { onUpdateProductInCart, onChangeMessage } = this.props;
        if (quantity > 0) {
            onUpdateProductInCart(product, quantity);
            onChangeMessage(Message.MSG_UPDATE_TO_CART_SUCCESS);
        }
    }

    onDelete = product => {
        var { onDeleteProductInCart, onChangeMessage } = this.props;
        onDeleteProductInCart(product);
        onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
    }

    showSubTotal = (price, quantity) => {
        return price * quantity;
    }
}

export default CartItem;