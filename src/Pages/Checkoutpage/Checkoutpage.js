import React from 'react';
import { connect } from 'react-redux';
import './Checkout.styles.scss';
import ShoppingListItem from '../../Components/Shopping-Item/Shopping-item.component';
import CartDetails from '../../Components/Cart-details/cart-details.component'

const CheckOutPage = ({ cartItems, cartItemCount }) => {

    return (
        <div className='chnge-width card-details'>
            <div className='cart-item'>
                {cartItems && cartItems.length > 0 ? cartItems.map((cartItem) => (<ShoppingListItem key={cartItem.id} id={cartItem.id} items={cartItem}></ShoppingListItem>))
                    : <div style = {{'textAlign' : 'center'}}>Please add Item to Cart</div>
                }
            </div>
            <div className ='cart-details'>
                {cartItems && cartItems.length > 0 ? (<CartDetails></CartDetails>) : null}
            </div>
        </div>

    )
}

const mapsStateToPrps = ({ shop: { cartItems, cartItemCount } }) => {
    return {
        cartItems,
        cartItemCount: cartItemCount

    }
}

export default connect(mapsStateToPrps)(CheckOutPage);