import React, { useState } from 'react'
import './Homepage.css'

type Props = {}

function Homepage({ }: Props) {

    const [data, setData] = useState<any>([
        { id: 1, title: 'Lenovo', price: '1000', image: 'https://pngimg.com/uploads/computer_pc/computer_pc_PNG7720.png' },
        { id: 2, title: 'Dell', price: '2000', image: 'https://pngimg.com/uploads/computer_pc/computer_pc_PNG7720.png' },
        { id: 3, title: 'Acer', price: '3000', image: 'https://pngimg.com/uploads/computer_pc/computer_pc_PNG7720.png' },
        { id: 1, title: 'Lenovo', price: '1000', image: 'https://pngimg.com/uploads/computer_pc/computer_pc_PNG7720.png' },
        { id: 2, title: 'Dell', price: '2000', image: 'https://pngimg.com/uploads/computer_pc/computer_pc_PNG7720.png' },
        { id: 3, title: 'Acer', price: '3000', image: 'https://pngimg.com/uploads/computer_pc/computer_pc_PNG7720.png' },
        { id: 1, title: 'Lenovo', price: '1000', image: 'https://pngimg.com/uploads/computer_pc/computer_pc_PNG7720.png' },

    ])

    const [laptops, setLaptops] = useState<any>([
        {
            id: 1,
            brandName: 'Lenovo Laptops',
            lapName: 'Lenovo INTEL CORE i3-1125G4',
            price: 'රු.125,000.00',
            image: 'data:image/jpeg;base64,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'
        },
        {
            id: 1,
            brandName: 'HP Laptops',
            lapName: 'HP INTEL CORE i3-1125G4',
            price: 'රු.325,000.00',
            image: 'data:image/jpeg;base64,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'
        },
        {
            id: 1,
            brandName: 'Dell Laptops',
            lapName: 'Dell INTEL CORE i3-1125G4',
            price: 'රු.275,000.00',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWrR_EZ0FngiMAaFwgj1q-qEqrZcVOwGUj9Q&usqp=CAU'
        },
        {
            id: 1,
            brandName: 'Lenovo Laptops',
            lapName: 'Lenovo INTEL CORE i3-1125G4',
            price: 'රු.125,000.00',
            image: 'data:image/jpeg;base64,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'
        },
        {
            id: 1,
            brandName: 'HP Laptops',
            lapName: 'HP INTEL CORE i3-1125G4',
            price: 'රු.325,000.00',
            image: 'data:image/jpeg;base64,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'
        },
        {
            id: 1,
            brandName: 'Dell Laptops',
            lapName: 'Dell INTEL CORE i3-1125G4',
            price: 'රු.275,000.00',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWrR_EZ0FngiMAaFwgj1q-qEqrZcVOwGUj9Q&usqp=CAU'
        },
        
    ])


    return (
        <>
            <div >
                <div >
                    <img style={{ width: '100%', height: '350px' }} src="https://res.cloudinary.com/dmfljlyu1/image/upload/v1685870798/dotcomebanner_lylvys.jpg" />
                </div>
                <div className='gridaa'>
                    {data.map((item: any) => (
                        <div className={"btn"} style={{ background: 'rgba(196, 196, 203, 0.466)' }}>
                            <img style={{ width: '200px', height: '200px' }} src={'https://pngimg.com/d/computer_pc_PNG7720.png'} alt="thumbnail" />
                            <h3>{item.title}</h3>
                            <p></p>
                            <p className={'price'} >Price Rs.{item.price}</p>
                            <button>ADD TO CART</button>
                            <p></p>
                        </div>
                    ))}
                </div>
                <br />
                <br />
                <br />
                <br />
                <div className="mb-4 appointment">
                    <div className="container">
                        <div className="row " >
                            <div className="col-md-4 d-none d-md-block">
                                <img className='appointmentimg' src='https://res.cloudinary.com/dmfljlyu1/image/upload/v1685872730/lapaddpng2_f8g4os.png' alt="" />
                            </div>
                            <div className="col-md-8 text-white py-5">
                                <p className="" style={{ textDecorationLine: 'underline', color: 'black', fontSize: '35px', fontFamily: 'sans-serif' }}>Latest Laptops</p>

                                <div className="row text-center text-lg-start">
                                    {laptops.map((laptop: any) => (
                                        <>
                                            <div className="col-lg-4 col-md-4 col-6 mb-5">
                                                <div className='card cardResturent' style={{ height: '150px', cursor: 'pointer' }}>
                                                    <div className="row no-gutters">
                                                        <div className="col-md-6">
                                                            <img
                                                                style={{ height: '110px', marginTop: '10%', width: '100px', objectFit: 'cover' }}
                                                                className="img-fluid ms-3"
                                                                src={laptop.image}
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p className="mt-2 ms-2" style={{ fontSize: '12px', color: 'gray', textAlign: 'left' }} >{laptop.brandName}</p>
                                                            <p style={{ fontSize: '13px', fontWeight: '900', fontFamily: '-moz-initial', color: 'blue', textAlign: 'left' }} className="mt-2 mr-2" >{laptop.lapName}</p>
                                                            <p style={{ fontSize: '15px', color: 'red', fontWeight: '700', textAlign: 'left' }} >{laptop.price}</p>
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
                </div>
                <br />
                <br />
                <br />
                <br />
                <div className="mb-4 appointment" style={{backgroundColor: '#6e657f26'}}>
                    <div className="container">
                        <div className="row " >
                            <div className="col-md-7 text-white py-5" >
                                <p className="" style={{ textDecorationLine: 'underline', color: 'black', fontSize: '35px', fontFamily: 'sans-serif' }}>Latest Desktops</p>

                                <div className="row text-center text-lg-start">
                                    {laptops.map((laptop: any) => (
                                        <>
                                            <div className="col-lg-4 col-md-4 col-6 mb-5">
                                                <div className='card cardResturent' style={{ height: '150px', cursor: 'pointer' }}>
                                                    <div className="row no-gutters">
                                                        <div className="col-md-6">
                                                            <img
                                                                style={{ height: '110px', marginTop: '10%', objectFit: 'cover'}}
                                                                className="img-fluid ms-3"
                                                                src={laptop.image}
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p className="mt-2 ms-2" style={{ fontSize: '12px', color: 'gray', textAlign: 'left' }} >{laptop.brandName}</p>
                                                            <p style={{ fontSize: '13px', fontWeight: '900', fontFamily: '-moz-initial', color: 'blue', textAlign: 'left' }} className="mt-2 mr-2" >{laptop.lapName}</p>
                                                            <p style={{ fontSize: '15px', color: 'red', fontWeight: '700', textAlign: 'left' }} >{laptop.price}</p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </>
                                    ))}
                                </div>
                            </div>
                            <div className="col-md-5 d-none d-md-block">
                                <img className='appointmentimg2' src='https://res.cloudinary.com/dmfljlyu1/image/upload/v1685872730/lapaddpng1_noczaz.png' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <section className='headercsssection'>
                    <div className="container" style={{ width: '40%' }}>
                        <h4 style={{ textAlign: 'center', color: 'black', textDecoration: 'none' }}>Design and Developed by <a style={{ color: 'blue', textDecoration: 'none' }} href="https://www.linkedin.com/in/kamindu-gayantha-2b1b3a1a0/">Kamindu Gayantha</a> </h4>
                        <div className="card profile-card-3" >
                            <div className="background-block">
                                <img src="https://pbs.twimg.com/media/E0tEXSVVcAAThjq.jpg:large" alt="profile-sample1" className="" />
                            </div>
                            <div className="profile-thumb-block">
                                <img src="https://media.licdn.com/dms/image/C5603AQGnBMwskpBqvw/profile-displayphoto-shrink_800_800/0/1656409186148?e=2147483647&v=beta&t=1JY6ZWlcPp7IySxX-_I6ECkodmTMZFKR4WA1K5nl75A" alt="profile-image" className="profile" />
                            </div>
                            <div className="card-content">
                                <h2>Kamindu Gayantha<small>Software Engineer</small></h2>
                                <div className="icon-block"><a href="#"><i className="fa fa-facebook"></i></a><a href="#"> <i className="fa fa-twitter"></i></a><a href="#"> <i className="fa fa-google-plus"></i></a></div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Homepage