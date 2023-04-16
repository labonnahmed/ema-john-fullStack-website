import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { productKey } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch('http://localhost:8000/product/' + productKey)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProduct(data)
            })
    }, [])

    const { img, name, seller, price, stock, features } = product;

    return (
        <div className="pd-overview">
            <img className="pd-img" src={img} alt={name} />
            <div className='pl-4'>
                <div className="pd-title">
                    <h5 className="mb-2 text-2xl dark:text-blue-800">{name}</h5>
                    <small>by: {seller}</small><br />
                    <div className='flex max-md:flex-col-reverse'>
                        <div>
                            <h4 className="mb-3 text-2xl dark:text-red-600">${price}</h4>
                            <small className='text-gray-600'>only {stock} left in stock - order soon</small>
                            <br />
                            <Link to='/'>
                                <button type="button" className="commonButtonStyle">
                                    Continue Shopping
                                    <svg fill="none" className="w-5 h-5 ml-1" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                                    </svg>
                                </button>
                            </Link>
                        </div>
                        <div className='m-auto text-gray-600 text-md font-semibold mb-10'>
                            <h5 className='text-black my-2 text-xl'>Features</h5>
                            <ul>
                                {
                                    (Object.keys(product).length > 0 && product.constructor === Object) &&
                                    features.map(f => <li key={f.value}>{f.description} -- {f.value}</li>)
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;