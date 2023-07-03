import React from 'react'
import "./AccessoriesCss.css"

type Props = {}

function Accessories({ }: Props) {

    const Accessories = [
        {
            id: 1,
            name: "Logitech Mouse",
            price: 500,
            description: "Computer Mouse Pad with Stitched Edge, Premium-Textured Mouse Mat, Non-Slip Rubber Base Mousepad for Laptop",
            image: "https://www.laptop.lk/wp-content/uploads/2021/11/01-2-300x300.jpg"
        },
        {
            id: 1,
            name: "Ketyboard",
            price: 1200,
            description: " Keyboard and Mouse Combo, 2.4GHz Wireless Connection, Long Battery Life, Desktop, Laptop, PC, Chrome OS, Black",
            image: "https://ae01.alicdn.com/kf/S279c4454ddae499484f96c27a111ee1f7.jpg_640x640Q90.jpg_.webp"
        },
        {
            id: 1,
            name: "16GB Pendrive",
            price: 3000,
            description: " Pendrive 16GB USB 2.0 Flash Drive Thumb Drive Jump Drive Memory Drive with LED Light for Storage and Backup",
            image: "https://www.sathya.store/img/product/q0qeRegf44an6dvj.jpg"
        },
    ]

    return (
        <div>
             <div className="container-fluid p-5" style={{backgroundColor:'#59456620'}}>
                <h5 className="display-5">Computer Accessories</h5>
                <p className="lead"> Computer Accessories are the best for gaming and office work</p>
                <hr className="my-1" />
            </div>
        <div className='accessories'>
            <div className="container d-flex justify-content-center mt-50 mb-50">
                <div className="row">
                    {Accessories.map((accessories, index) => (
                        <>
                            <div className="col-md-6 mb-3">
                                <div className="card card-body">
                                    <div className="media align-items-center align-items-lg-start text-center text-lg-left flex-column flex-lg-row">
                                        <div className="mr-2 mb-3 mb-lg-0">
                                            <img src={accessories.image} width="150" height="150" alt="" />
                                        </div>
                                        <div className="media-body" style={{ textAlign: "left" }}>
                                            <h6 className="media-title font-weight-semibold">
                                                <a href="#" data-abc="true">{accessories.name}</a>
                                            </h6>
                                            <ul className="list-inline list-inline-dotted mb-3 mb-lg-2">
                                                <li className="list-inline-item"><a href="#" className="text-muted" data-abc="true">Desktop</a></li>
                                                <li className="list-inline-item"><a href="#" className="text-muted" data-abc="true">Accessories</a></li>
                                            </ul>
                                            <p className="mb-3">
                                                {accessories.description}
                                            </p>
                                           
                                        </div>
                                        <div className="mt-3 mt-lg-0 ml-lg-3 text-center">
                                            <h3 className="mb-0 font-weight-semibold">Rs.{accessories.price}</h3>
                                            <div>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                            <div className="text-muted">1985 reviews</div>
                                            <button type="button" className="btn btn-warning mt-4 text-white"><i className="icon-cart-add mr-2"></i> Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))
                    }
                </div>
            </div>
        </div>
        </div>
    )
}

export default Accessories