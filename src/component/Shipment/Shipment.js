import React from 'react';
import './Shipment.css';

const Shipment = () => {
    // const [shipment, setShipment] = useState({ email: '', firstName: '', lastName: '', phone: 0, address: '', info: '' })
    const authUser = JSON.parse(sessionStorage.getItem('authUser')) || null;
    const cart = JSON.parse(localStorage.getItem('cartProducts')) || [];



    const handleOrderPlace = (e) => {
        alert('Placing Your Order?')
        const orderPlaceInfo = {
            cart,
            emailVerified: authUser.emailVerified,
            email: e.target[0].value,
            firstName: e.target[1].value,
            lastName: e.target[2].value,
            phone: e.target[3].value,
            address: e.target[4].value,
            info: e.target[5].value,

        }
        e.preventDefault();
        console.log(orderPlaceInfo)

        fetch('http://localhost:8000/Order', {
            method: 'POST',
            body: JSON.stringify(orderPlaceInfo),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.json())
            .then(data => console.log(data))
    };

    return (
        <form className="shipment-container" onSubmit={handleOrderPlace}>
            <h5 className="shipment-form-header">Requirment</h5>
            <div className="relative z-0 w-full mb-6 group">
                <input type="email" name="email" id="floating_email" className="shipment-field-input" defaultValue={authUser.email} required />
                <label htmlFor="floating_email" className="shipment-form-label">Email address</label>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="firstName" id="floating_first_name" className="shipment-field-input" defaultValue={authUser.displayName} required />
                    <label htmlFor="floating_first_name" className="shipment-form-label">First name</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="lastName" id="floating_last_name" className="shipment-field-input" placeholder=" " required />
                    <label htmlFor="floating_last_name" className="shipment-form-label">Last name</label>
                </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                    <input type="tel" pattern="[0-9]{5}-[0-9]{6}" name="phone" id="floating_phone" className="shipment-field-input" placeholder=" " required />
                    <label htmlFor="floating_phone" className="shipment-form-label">Phone number</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="address" id="address" className="shipment-field-input" placeholder=" " required />
                    <label htmlFor="address" className="shipment-form-label">Address (State, Zip, Road)</label>
                </div>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input type="text" name="i" id="info" className="shipment-field-input" placeholder=" " required />
                <label htmlFor="info" className="shipment-form-label">Necessary info (optional)</label>
            </div>
            <button type="submit" className="shipment-form-submit">Place Order</button>
        </form>
    );
};

export default Shipment;