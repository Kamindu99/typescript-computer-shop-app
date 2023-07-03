import React from 'react'
import "./Desktop.css"

type Props = {}

function Desktoppage({ }: Props) {

    const alldesktop = [
        {
            id: 1,
            name: "Asus Rog",
            price: 12354.00,
            description: " Asus Rog 15.6 inch FHD 144Hz Gaming Laptop (AMD Ryzen 7 4800H, Nvidia GeForce GTX 1660Ti 6GB Graphics, 512GB PCI-e SSD, 16GB RAM, Windows 10)",
            image: "https://www.laptop.lk/wp-content/uploads/2022/01/Dell-Vostro-Desktop-3910-i3-with-Dell-Monitor.jpg"
        },
        {
            id: 1,
            name: "Asus Rog",
            price: 12354.00,
            description: " Asus Rog 15.6 inch FHD 144Hz Gaming Laptop (AMD Ryzen 7 4800H, Nvidia GeForce GTX 1660Ti 6GB Graphics, 512GB PCI-e SSD, 16GB RAM, Windows 10)",
            image: "https://cdn.shopify.com/s/files/1/0419/5500/0480/products/gaming-pc-bundle-2022-amd-ryzen-5600g-16gb-ram-1tb-ssd-radeon-vega-7-graphics-165hz-monitor-gaming-rgb-keyboard-and-mouse-gaming-pc-amd-951026_grande.jpg?v=1663316841"
        },
        {
            id: 1,
            name: "Asus Rog",
            price: 12354.00,
            description: " Asus Rog 15.6 inch FHD 144Hz Gaming Laptop (AMD Ryzen 7 4800H, Nvidia GeForce GTX 1660Ti 6GB Graphics, 512GB PCI-e SSD, 16GB RAM, Windows 10)",
            image: "https://mdcomputers.lk/wp-content/uploads/2023/01/302449748_660184198365987_7101191635633772409_n-300x300.jpg"
        },
        {
            id: 1,
            name: "Asus Rog",
            price: 12354.00,
            description: " Asus Rog 15.6 inch FHD 144Hz Gaming Laptop (AMD Ryzen 7 4800H, Nvidia GeForce GTX 1660Ti 6GB Graphics, 512GB PCI-e SSD, 16GB RAM, Windows 10)",
            image: "https://rukminim1.flixcart.com/image/850/1000/ko7idu80/desktop-computer/w/s/p/gamming-desktop-pc-01-radiant-electro-original-imag2pzydfe8hcsn.jpeg?q=20"
        },
        {
            id: 1,
            name: "Asus Rog",
            price: 12354.00,
            description: " Asus Rog 15.6 inch FHD 144Hz Gaming Laptop (AMD Ryzen 7 4800H, Nvidia GeForce GTX 1660Ti 6GB Graphics, 512GB PCI-e SSD, 16GB RAM, Windows 10)",
            image: "https://techzone.lk/wp-content/uploads/2022/12/DELL-VOSTRO-3910.jpg"
        },
        {
            id: 1,
            name: "Asus Rog",
            price: 12354.00,
            description: " Asus Rog 15.6 inch FHD 144Hz Gaming Laptop (AMD Ryzen 7 4800H, Nvidia GeForce GTX 1660Ti 6GB Graphics, 512GB PCI-e SSD, 16GB RAM, Windows 10)",
            image: "https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/SOL-66327-DesktopBuyingGuide-Storage_DualDrive-172092.jpg"
        },

    ]

    return (
        <div>
            <main className='desktopcss'>
                <div className="container-fluid bg-trasparent my-4 p-3" style={{ position: "relative" }}>
                    <div className="row ">
                        {alldesktop.map((desktop, index) => (
                            <>
                                <div className="col  col-lg-3 mb-3">
                                    <div className="card h-100 shadow-sm">
                                        <img src={desktop.image} className="card-img-top" alt="..." />
                                        <div className="label-top shadow-sm">{desktop.name}</div>
                                        <div className="card-body">
                                            <div className="clearfix mb-3">
                                                <span className="float-start badge rounded-pill bg-primary">{desktop.name}</span>
                                                <span className="float-end price-hp ">{desktop.price}&euro;</span>
                                            </div>
                                            <h5 className="card-title"> {desktop.description}</h5>
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
    )
}

export default Desktoppage