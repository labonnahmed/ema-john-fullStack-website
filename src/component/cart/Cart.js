import React from 'react';

const Order = (props) => {

    // get cart added products from localStorage...
    const cart = JSON.parse(localStorage.getItem('cartProducts')) || [];

    const totalPriceBT = cart.reduce((total, pd) => total + pd.price * pd.quantity, 0);

    let shipment
    if (totalPriceBT > 499) {
        shipment = 0
    } else if (totalPriceBT > 99) {
        shipment = 4.99
    } else {
        shipment = 12.99
    }

    const tax = totalPriceBT / 10;

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <div className="max-w-md">
            <h3 className='text-2xl divide-y text-center'>order Summary</h3>
            <br />
            <div className='cart-details'>
                <h6>Item Ordered: {cart.length}</h6>
                <small>
                    Shipping & Handling: {shipment}<br />
                    Total before tax: {formatNumber(totalPriceBT)}<br />
                    Estimated Tax(@10%): {formatNumber(tax)}
                </small>
                <h4 className="dark:text-red-700 font-semibold text-lg">Total Price: {formatNumber(shipment + totalPriceBT + tax)}</h4>
            </div>
            <br />
            {
                props.children
            }
        </div>
    );
};

export default Order;