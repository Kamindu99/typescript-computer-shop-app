import React from 'react'

type Props = {}

function Laptops({}: Props) {
    const alllaptop = [
        {
            id: 1,
            name: "Hp Laptop",
            price: 12354.00,
            description: " Hp Rog 15.6 inch FHD 144Hz Gaming Laptop (AMD Ryzen 7 4800H, Nvidia GeForce GTX 1660Ti 6GB Graphics, 512GB PCI-e SSD, 16GB RAM, Windows 10)",
            image: "https://static-01.daraz.lk/p/860fea404d7a611cc4a01bd2f8e81655.jpg_300x0q75.webp"
        },
        {
            id: 2,
            name: "Dell Laptop",
            price: 12354.00,
            description: " Dell Rog 15.6 inch FHD 144Hz Gaming Laptop (AMD Ryzen 7 4800H, Nvidia GeForce GTX 1660Ti 6GB Graphics, 512GB PCI-e SSD, 16GB RAM, Windows 10)",
            image: "https://5.imimg.com/data5/BK/FD/MY-31742395/dell-laptop-500x500.jpg"
        }
    ]
  return (
    <div>
          <div>
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