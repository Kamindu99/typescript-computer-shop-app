import React from 'react'
import "./SoftwareCss.css"

type Props = {}

function Software({ }: Props) {

    const software = [
        {
            id: 1,
            name: "Windows 10",
            price: 500,
            description: "Computer Mouse Pad with Stitched Edge, Premium-Textured Mouse Mat, Non-Slip Rubber Base Mousepad for Laptop, Computer & PC, 10.2 x 8.3 x 0.12 inches, Black",
            image: "https://redmondmag.com/-/media/ECG/redmondmag/Images/introimages2014/152101REDSchwartzWin10.jpg"
        },
        {
            id: 2,
            name: "Audio Driver",
            price: 400,
            description: "Computer Mouse Pad with Stitched Edge, Premium-Textured Mouse Mat, Non-Slip Rubber Base Mousepad for Laptop, Computer & PC, 10.2 x 8.3 x 0.12 inches, Black",
            image: "https://realtek-download.com/wp-content/uploads/2013/03/Realtek-High-Definition-Audio-Drivers.jpeg"
        },
        {
            id: 3,
            name: "Kaspersky Virus Guard",
            price: 2300,
            description: "Computer Mouse Pad with Stitched Edge, Premium-Textured Mouse Mat, Non-Slip Rubber Base Mousepad for Laptop, Computer & PC, 10.2 x 8.3 x 0.12 inches, Black",
            image: "https://www.everyshop.co.za/media/catalog/product/cache/ea1c1d49663f18175f3f3520f39859aa/1/0/10121257_eb6c.jpg"
        },
        {
            id: 4,
            name: "Adobe Photoshop",
            price: 1700,
            description: "Computer Mouse Pad with Stitched Edge, Premium-Textured Mouse Mat, Non-Slip Rubber Base Mousepad for Laptop, Computer & PC, 10.2 x 8.3 x 0.12 inches, Black",
            image: "https://www.enespa-software.de/media/image/9c/fa/37/adobe-photoshop-cc_600x600.jpg"
        },
        {
            id: 5,
            name: "Microsoft Office",
            price: 1300,
            description: "Computer Mouse Pad with Stitched Edge, Premium-Textured Mouse Mat, Non-Slip Rubber Base Mousepad for Laptop, Computer & PC, 10.2 x 8.3 x 0.12 inches, Black",
            image: "https://recursos.bps.com.es/files/701/79.jpg"
        },
    ]

    return (
        <div>
             <div className="container-fluid p-5" style={{backgroundColor:'#59456620'}}>
                <h5 className="display-5">Computer Softwares</h5>
                <p className="lead"> Software are the best for gaming and office work</p>
                <hr className="my-1" />
            </div>
        <div className='softwarecss mt-5'>
            <div className="container">
                <div id="products" className="row">
                  {software.map((software, index) => (
                    <>
                      <div className="item col-xs-3 col-lg-3 mb-3">
                        <div className="card p-2">
                            <img className="group list-group-image" src={software.image} alt="" />
                            <hr/>
                            <div className="caption">
                                <h4 className="group inner list-group-item-heading mt-2">{software.name}</h4>
                                <p className="group inner list-group-item-text">{software.description}</p>
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <p className="lead">Rs.{software.price}</p>
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <a className="btn btn-success" href="http://www.jquery2dotnet.com">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </>
                    ))}
                </div>
            </div>

        </div>
        </div>
    )
}

export default Software