import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../action/cartAction';
import { Link } from 'react-router-dom';

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const [successMessages, setSuccessMessages] = useState({});

  const calculateProductTotal = (item) => {
    return item.price;
  };

  const handleRemoveFromCart = (productId, productName) => {
    if (window.confirm(`Are you sure you want to remove ${productName} from your cart?`)) {
      dispatch(removeFromCart(productId));
      const message = `${productName} has been removed from your cart.`;
      setSuccessMessages(prevMessages => ({ ...prevMessages, [productId]: message }));
      setTimeout(() => {
        setSuccessMessages(prevMessages => {
          const { [productId]: removedItem, ...rest } = prevMessages;
          return rest;
        });
      }, 10);
    }
  };

  const handlePayNow = (itemId) => {
    const courseName = cart.find(item => item.id === itemId).name;
    const amount = calculateProductTotal(cart.find(item => item.id === itemId));

    if (window.confirm(`Are you sure you want to pay ₹${amount} for ${courseName}?`)) {
      const message = `Payment for ${courseName} has been successfully paid!`;
      setSuccessMessages(prevMessages => ({ ...prevMessages, [itemId]: message }));
    }
  };

  if (cart.length === 0) {
    return (
      <div className='container text-center align-items-center'>
        <div className='cart mt-5 pt-5 ps-5 mb-5 text-center'>
          <h1>Cart</h1>
          <p>No items in the cart. Add some courses to your cart!</p>
          <button className='goback-btn'>
            <Link to='/' className='link btn'>
              Go Back
            </Link>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='container text-center align-items-center'>
      <div className='cart mt-5 pt-5 ps-5 mb-5 text-center'>
        <h1>Cart</h1>
        <ul className="cart-list mb-5" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {cart.map(item => (
            <li key={item.id} className="card cart-item ms-5 mb-5" style={{ width: '40rem' }}>
              <div className='row d-flex'>
                <div className="col cart-item-content">
                  <img src={item.image} alt={item.name} className="cart-image mt-3 mb-3" />
                </div>
                <div className="col cart-details mt-2">
                  <span className="cart-name">{item.name}</span><br />
                  <div className="cart-total">₹{calculateProductTotal(item)}</div>

                  <button className='remove-btn mt-4 mb-3' onClick={() => handleRemoveFromCart(item.id, item.name)}>Remove from Cart</button> <br />

                  {/* Conditionally render Pay Now and Go Back buttons for each item */}
                  {!successMessages[item.id] && (
                    <>
                      <button onClick={() => handlePayNow(item.id)} className='ps-4 pt-2 pb-2 pe-4 mb-2'>Pay Now</button> <br />
                    </>
                  )}

                  {/* Display success message below each card */}
                  {successMessages[item.id] && (
                    <div className="alert alert-success mt-2">{successMessages[item.id]}</div>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
        <button className='goback-btn'>
          <Link to='/' className='link btn'>
            Go Back
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Cart;
