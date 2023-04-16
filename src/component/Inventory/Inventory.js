import React from 'react';

const Inventory = () => {
    
    const sample = {
        key: "B01LPZD1N6",
        category: "android",
        name: "ATOTO 7\"HD Touchscreen 2Din Android Car Navigation Stereo - Quadcore Car Entertainment Multimedia w/ FM/RDS Radio,WIFI,BT,Mirror Link,and more(No DVD Player)M4171 (178101/16G)",
        seller: "ATOTO",
        wholePrice: "164",
        priceFraction: "90",
        stock: 20,
        star: 3,
        starCount: 4029,
        img: "https://images-na.ssl-images-amazon.com/images/I/51xI8gJTNYL._AC_US218_.jpg",
        url: "https://www.amazon.com/ATOTO-Touchscreen-Android-Navigation-Stereo/dp/B01LPZD1N6/ref=sr_1_4?s=electronics&ie=UTF8&qid=1499124822&sr=1-4&keywords=android",
        features: [
            { description: "Display Size", value: "7.0 inches" },
            { description: "Operating System", value: "Android" },
            { description: "Hardware Platform", value: "Android" },
            { description: "Cpu Model Manufacturer", value: "MTK" },
            { description: "Wireless Communication Technology", value: "AM/FM" }
        ],
        price: 164.9,
        shipping: 0
    };

    fetch('http://localhost:8000/insert/product', {
        method: 'POST',
        body: JSON.stringify(),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(res => res.json())
        .then(data => console.log(data))


    return (
        <form className="shipment-container">
            <h5 className="shipment-form-header">Add Product</h5>
            <div className="relative z-0 w-full mb-6 group">
                <input type="email" name="key" id="key" className="shipment-field-input" required />
                <label htmlFor="key" className="shipment-form-label">key</label>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="category" id="category" className="shipment-field-input" required />
                    <label htmlFor="category" className="shipment-form-label">category</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="name" id="name" className="shipment-field-input" placeholder=" " required />
                    <label htmlFor="name" className="shipment-form-label">name</label>
                </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                    <input type="number" name="starCount" id="starCount" className="shipment-field-input" placeholder=" " required />
                    <label htmlFor="starCount" className="shipment-form-label">starCount</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="seller" id="seller" className="shipment-field-input" placeholder=" " required />
                    <label htmlFor="seller" className="shipment-form-label">seller</label>
                </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="url" id="url" className="shipment-field-input" placeholder=" " required />
                    <label htmlFor="url" className="shipment-form-label">url</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="features" id="features" className="shipment-field-input" placeholder=" " />
                    <label htmlFor="features" className="shipment-form-label">features</label>
                </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                    <input type="number" name="price" id="price" className="shipment-field-input" placeholder=" " required />
                    <label htmlFor="price" className="shipment-form-label">price</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="shipping" id="shipping" className="shipment-field-input" placeholder=" " />
                    <label htmlFor="shipping" className="shipment-form-label">shipping</label>
                </div>
            </div>
            <button type="submit" className="shipment-form-submit">Submit</button>
        </form>
    );
};

export default Inventory;