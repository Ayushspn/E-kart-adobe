import React, { useEffect } from 'react';
import './Header.styles.scss';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import Search from '../Search/Search.component';
const Header = ({ cartCount, history }) => {

    const redirectTocartPage = () => {
        history.push('CheckOut')
    }


    return (
        <div className="header">
            <div className="company-logo">
                <Link to="/" className="logo desktop-logo">CompanyLogo</Link>
                <Link to="/" className="logo mobile-logo">CL</Link>
            </div>
            <div className="search-cart-container">
                <Search />
                {history.location.pathname === '/' ?
                    <div className='cart-icon'>
                        <button className='cart-button pull-right' onClick={() => redirectTocartPage()}><i className="fa fa-shopping-cart" aria-hidden="true"><span className='cartItem'>{cartCount || 0}</span></i></button>
                    </div>
                    : null}

            </div>
        </div>
    )
}

const mapstateToProps = ({ shop: { cartItemCount } }) => {
    return {
        cartCount: cartItemCount
    }
}

export default connect(mapstateToProps)(withRouter(Header));