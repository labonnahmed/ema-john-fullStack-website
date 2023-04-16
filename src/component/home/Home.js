import { useState } from 'react';
import Shop from '../shop/Shop';
import Cart from '../cart/Cart';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    // products data loading from server and set on state...
    const [products, setProducts] = useState([]);

    useState(() => {
        fetch('http://localhost:8000/shop')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, []);

    // handle adding products on localStorage for Cart... 
    const navigate = useNavigate();

    const handleAddProduct = (product) => {
        product.quantity = 0;

        const cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
        cartProducts.push(product);
        localStorage.setItem('cartProducts', JSON.stringify(cartProducts));

        const sameProduct = cartProducts.find(pd => (product.key === pd.key));
        sameProduct.quantity++;
        const uniqueProducts = cartProducts.filter(pd => (product.key !== pd.key));

        const cart = [...uniqueProducts, sameProduct];

        localStorage.setItem('cartProducts', JSON.stringify(cart));

        navigate(0);
    };

    return (
        <div className='flex flex-row p-5 m-3'>
            <div className='basis-5/6 max-sm:basis-auto'>
                {
                    products.map(pd => <Shop
                        key={pd.key}
                        product={pd}
                        handleAddProduct={handleAddProduct}
                    />)
                }
            </div>
            <div className='basis-1/6 m-5 max-sm:hidden'>
                <Cart>
                    <Link to='/review'>
                        <button type="button" className="commonButtonStyle">
                            Order Review
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

export default Home;