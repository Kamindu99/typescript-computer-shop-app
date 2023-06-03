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

    return (
        <>
            <div >
                <div >
                    <img style={{ width: '100%', height: '350px' }} src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/42e89993546277.5ed6ae8979655.png" />
                </div>
                <div className='gridaa'>
                    {data.map((item: any) => (
                        <div className={"btn"} style={{ background: 'rgba(196, 196, 203, 0.466)' }}>
                            <img style={{ width: '200px', height: '200px' }} src={'https://pngimg.com/d/computer_pc_PNG7720.png'} alt="thumbnail" />
                            <h3>{item.title}</h3>
                            <p></p>
                            <p className={'price'} >price $:{item.price}</p>
                            <button>ADD TO CART</button>
                            <p></p>
                        </div>
                    ))}
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