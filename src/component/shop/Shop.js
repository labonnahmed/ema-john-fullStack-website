import React from 'react';
import { Link } from 'react-router-dom';
import './Shop.css'

const shop = (props) => {
    const { img, name, seller, price, stock, key } = props.product;

    return (
        <Link to={`/product/${key}`} className="pd-overview">
            <img className="pd-img" src={img} alt={name} />
            <div className='pl-4'>
                <div className="pd-title">
                    <h5 className="mb-2 text-2xl dark:text-blue-800">{name}</h5>
                    <small>by: {seller}</small><br />
                    <div>
                        <div>
                            <h4 className="mb-3 text-2xl dark:text-red-600">${price}</h4>
                            <small className='text-gray-600'>only {stock} left in stock - order soon</small>
                            <br />
                            <button type="button" className="commonButtonStyle" onClick={() => props.handleAddProduct(props.product)}>
                                <svg fill="none" className="w-4 h-4 mr-2 -ml-1" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path>
                                </svg>
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default shop;