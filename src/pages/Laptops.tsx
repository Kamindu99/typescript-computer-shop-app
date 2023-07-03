import React from 'react'

type Props = {}

function Laptops({}: Props) {
    const alllaptop = [
        {
            id: 1,
            name: "Hp Laptop",
            price: 12354.00,
            description: " Hp 15.6 inch FHD 144Hz Gaming Laptop (AMD Ryzen 7 4800H, Nvidia GeForce GTX 1660Ti 6GB Graphics, 512GB PCI-e SSD, 16GB RAM, Windows 10)",
            image: "https://static-01.daraz.lk/p/860fea404d7a611cc4a01bd2f8e81655.jpg_300x0q75.webp"
        },
        {
            id: 2,
            name: "Dell Laptop",
            price: 12354.00,
            description: " Dell 15.6 inch FHD 144Hz Gaming Laptop (AMD Ryzen 7 4800H, Nvidia GeForce GTX 1660Ti 6GB Graphics, 512GB PCI-e SSD, 16GB RAM, Windows 10)",
            image: "https://5.imimg.com/data5/BK/FD/MY-31742395/dell-laptop-500x500.jpg"
        },
        {
            id: 2,
            name: "MSI Laptop",
            price: 342354.00,
            description: " MSI 15.6 inch FHD 144Hz Gaming Laptop (AMD Ryzen 7 4800H, Nvidia GeForce GTX 1660Ti 6GB Graphics, 512GB PCI-e SSD, 16GB RAM, Windows 10)",
            image: "https://www.scan.co.uk/images/products/2913482-a.jpg"
        },
        {
            id: 2,
            name: "ASUS Laptop",
            price: 12354.00,
            description: " ASUS 15.6 inch FHD 144Hz Gaming Laptop (AMD Ryzen 7 4800H, Nvidia GeForce GTX 1660Ti 6GB Graphics, 512GB PCI-e SSD, 16GB RAM, Windows 10)",
            image: "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/6/10/fa9c8d0c-11e7-45ab-b5d4-e94f91d3531c.jpg.webp"
        },
        {
            id: 2,
            name: "Lenovo Laptop",
            price: 12354.00,
            description: " Lenovo 15.6 inch FHD 144Hz Gaming Laptop (AMD Ryzen 7 4800H, Nvidia GeForce GTX 1660Ti 6GB Graphics, 512GB PCI-e SSD, 16GB RAM, Windows 10)",
            image: "https://i5.walmartimages.com/asr/cc9e4238-5c76-46e0-ac61-9eca4726344f_1.362f47dc51aa814d05dd553a13556212.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
        },
        {
            id: 2,
            name: "Apple Laptop",
            price: 12354.00,
            description: " Apple 15.6 inch FHD 144Hz Gaming Laptop (AMD Ryzen 7 4800H, Nvidia GeForce GTX 1660Ti 6GB Graphics, 512GB PCI-e SSD, 16GB RAM, Windows 10)",
            image: "https://m.media-amazon.com/images/I/61yUwXczIsL._SY450_.jpg"
        }
    ]
  return (
    <div>
          <div>
          <div className="container-fluid p-5" style={{backgroundColor:'#59456620'}}>
                <h5 className="display-5">Laptop Computers</h5>
                <p className="lead"> Laptop Computers are the best for gaming and office work</p>
                <hr className="my-1" />
            </div>
            <main className='desktopcss'>
                <div className="container-fluid bg-trasparent my-4 p-3" style={{ position: "relative" }}>
                    <div className="row ">
                        {alllaptop.map((laptop, index) => (
                            <>
                                <div className="col  col-lg-3 mb-3">
                                    <div className="card h-100 shadow-sm">
                                        <img src={laptop.image} className="card-img-top" alt="..." />
                                        <div className="label-top shadow-sm">{laptop.name}</div>
                                        <div className="card-body">
                                            <div className="clearfix mb-3">
                                                <span className="float-start badge rounded-pill bg-primary">{laptop.name}</span>
                                                <span className="float-end price-hp ">{laptop.price}&euro;</span>
                                            </div>
                                            <h5 className="card-title"> {laptop.description}</h5>
                                            <div className="text-center my-4">
                                                <a href="#" className="btn btn-warning">Buy Now</a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </>
                        ))
                        }
                    </div>
                </div>
            </main>
        </div>
    </div>
  )
}

export default Laptops