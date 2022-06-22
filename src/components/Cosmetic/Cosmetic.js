import React from 'react';
import './Cosmetic.css'
const Cosmetic = (props) => {
    const {name, price, id} = props.cosmetic;
    const addToCart = (id) =>{
        console.log('item added', id)
    }
    const addToCartWtihParam = () => addToCart(id)
    return (
        <div className='product'>
            <h2>Buy this: {name}</h2>
            <p>Only for: ${price}</p>
            <p><small>it has id: {id}</small></p>
            <button onClick={addToCartWtihParam}>Add to Cart</button>
            {/* Short cut */}
            <button onClick={() => addToCart(id)}>Purchase</button>
        </div>
    );
};

export default Cosmetic;