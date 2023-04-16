import React from 'react';
import ReviewItem from '../reviewItem/ReviewItem';
import Cart from '../cart/Cart'
import { Link } from 'react-router-dom';

const Review = () => {

    // get cart added products from localStorage...
    const cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];


    // handle remove products from reviewItem component and also remove from localStorage...
    const handleRemoveProduct = (pdKey) => {
        const restItems = cartProducts.filter(item => item.key !== pdKey);   
        localStorage.setItem("cartProducts", JSON.stringify(restItems));

        window.location.reload();
    };

    return (
        <div className='flex flex-row p-4 m-2'>
            <div className='basis-5/6 max-sm:basis-auto'>
                {
                    cartProducts.map(item => <ReviewItem
                        key={item.key}
                        item={item}
                        handleRemoveProduct={handleRemoveProduct}
                    />)
                }
            </div>
            <div className='basis-1/6 m-5 max-sm:hidden'>
                <Cart>
                    <Link to='/shipment'>
                        <button type="button" className="commonButtonStyle">
                            Process Order
                            <svg fill="none" className="w-5 h-5 ml-1" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                            </svg>
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Review;