import React from 'react'
import './Homepage.css'
type Props = {}

function Homepage({ }: Props) {
    return (
        <div>
            <section>
                <div className="container" style={{width:'40%'}}>
                <h4 style={{textAlign:'center'}}>Design and Developed by <a href="https://www.linkedin.com/in/kamindu-gayantha-2b1b3a1a0/">Kamindu Gayantha</a> </h4>
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
    )
}

export default Homepage