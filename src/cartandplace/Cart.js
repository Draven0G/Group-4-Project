import React from 'react'
import './Cart.css'

const Cart = () => {

const {cartitems,food_list,removeFromCart} = useContent(StoreContext);

    return (
        <div className='cart'>
       <div className='cart-items'>
        <div className='cart-items-title'>
            <p>items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>

        </div>
        <br />
        <hr />
        {food_list.map((item,index) => {
        if(cartItems[item._id]>0)
            {
                return (
                   
                    <div className='cart-items-title cart-items-item'>
                        <img src={item.image} alt=""/>
                        <p>{item.name}</p>
                        <p>${item.price}</p>
                        <p>{cartItems[item._id]}</p>
                        <p>${item.price*cartItems[item._id]}</p>
                        <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
                        </div>
                        
                )
            }
        })}
       </div>
       <div className='cart-bottom'>
        <div className='cart-total'>
            <h2>Cart Totals</h2>
            <div>
                <div className='cart-total-details'>
                    <p>Subtotal</p>
                    <p>{0}</p>
                </div>
                <hr />
                <div className='cart-total-details'>
                    <p>Delivery Fee</p>
                    <p>{2}</p>
                </div>
                <hr />
                <div className='cart-total-details'>
                    <b>Total</b>
                    <b>{0}</b>
                </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className='cart-promocode'>
            <div>
                <p>If you have a promo code, Enter it here</p>
                <div className='cart-promocode-input'>
                    <input type="text" placeholder='Enter promo code'/>
                                        <button>APPLY</button>
                </div>
            </div>
        </div>
       </div>
        </div>
    )
}

export default Cart;