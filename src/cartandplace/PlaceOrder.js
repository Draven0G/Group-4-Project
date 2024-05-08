import React from 'react'
import './PlaceOrder.css'

const PlaceOrder = () => {
return (
    <form className='place-order'>

 <div className='place-order-left'>
 <p className='title'>Delivery Information</p>
 <div className='multi-fields'>
<input type="text" placeholder='First Name'/>
<input type="text" placeholder='Last Name'/>
 </div>
 <input type="email" placeholder='Email address'/>
 <input type="text" placeholder='Street'/>
 <div className='multi-fields'>
<input type="text" placeholder='County'/>
<input type="text" placeholder='Town'/>
 </div>
 <div className='multi-fields'>
<input type="text" placeholder='Zip code'/>
<input type="text" placeholder='Country'/>
 </div>
 </div>
 <input type="text" placeholder='Phone'/>

 <div className='place-order-right'>
  //copy the cart total div here 
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
            <button>PROCEED TO PAYMENT</button>
        </div>
 </div>
    </form>
)
}

export default PlaceOrder