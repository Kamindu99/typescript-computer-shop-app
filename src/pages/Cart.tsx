import React from 'react'
import "./CartCss.css"

type Props = {}

function Cart({}: Props) {
    const cartlists = [
    {
        id: 1,
        name: "Logitec Mouse",
        price: 1800,
        quantity: 2,
        image: "https://www.laptop.lk/wp-content/uploads/2021/11/01-2-300x300.jpg"
    },
    {
        id: 1,
        name: "Hp Keyboard",
        price: 2000,
        quantity: 4,
        image: "https://ae01.alicdn.com/kf/S279c4454ddae499484f96c27a111ee1f7.jpg_640x640Q90.jpg_.webp"
    }
    ]

    const total = cartlists.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)

  return (
    <div className='dotcomcart'>
        <div className="cart_section">
     <div className="container-fluid">
         <div className="row">
             <div className="col-lg-10 offset-lg-1">
                 <div className="cart_container">
                     <div className="cart_title">DotCom Cart<small> ({cartlists.length} item in your cart) </small></div>
                     <div className="cart_items">
                         <ul className="cart_list">
                            {cartlists.map((cartlist, index) => (
                                <>
                                 <li className="cart_item clearfix">
                                 <div className="cart_item_image"><img src={cartlist.image} alt=""/></div>
                                 <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                                     <div className="cart_item_name cart_info_col">
                                         <div className="cart_item_title">Name</div>
                                         <div className="cart_item_text">{cartlist.name}</div>
                                     </div>
                                     <div className="cart_item_color cart_info_col">
                                         <div className="cart_item_title">Color</div>
                                         <div className="cart_item_text"><span style={{backgroundColor:"#000000"}}></span>Black</div>
                                     </div>
                                     <div className="cart_item_quantity cart_info_col">
                                         <div className="cart_item_title">Quantity</div>
                                         <div className="cart_item_text">{cartlist.quantity}</div>
                                     </div>
                                     <div className="cart_item_price cart_info_col">
                                         <div className="cart_item_title">Price</div>
                                         <div className="cart_item_text">Rs.{cartlist.price.toFixed(2)}</div>
                                     </div>
                                     <div className="cart_item_total cart_info_col">
                                         <div className="cart_item_title">Total</div>
                                         <div className="cart_item_text">Rs.{(cartlist.price * cartlist.quantity).toFixed(2)}</div>
                                     </div>
                                 </div>
                             </li>
                                </>
                                ))}
                         </ul>
                     </div>
                     <div className="order_total">
                         <div className="order_total_content text-md-right">
                             <div className="order_total_title">Order Total:</div>
                             <div className="order_total_amount">Rs.{total.toFixed(2)}</div>
                         </div>
                     </div>
                     <div className="cart_buttons"> <button type="button" className="button cart_button_clear">Home Page</button> <button type="button" className="button cart_button_checkout">Checkout</button> </div>
                 </div>
             </div>
         </div>
     </div>
 </div>
    </div>
  )
}

export default Cart