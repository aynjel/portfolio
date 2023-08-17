import ProfilePic from '../assets/my-profile-pic.jpg'

function Home() {
    return (
        <>
            <div className="container">
                <div className="card border-0 shadow my-5">
                    <div className="card-body p-0 m-0 h-100">
                        <div className="row">
                            <div className="col-md-5 p-0 m-0">
                                <img src={ProfilePic} alt="Profile Pic" className="img-fluid rounded-start" />
                            </div>
                            <div className="col-md-7 px-0 py-5 m-0">
                                <div className='card-header bg-transparent border-0'>
                                    <h1 className='card-title text-justify fw-bold'>
                                        Full Stack Web Developer
                                    </h1>
                                    <p className='card-text text-justify me-3'>
                                        I am a full stack web developer with a passion for learning and creating. I have experience with HTML, CSS, JavaScript, Node.js, Express.js, MySQL, MongoDB, and React.js.
                                    </p>
                                </div>
                                <div className='card-body'>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <div className='card'>
                                                <div className='card-body'>
                                                    <h5 className='card-title'>Front End</h5>
                                                    <ul className='card-text'>
                                                        <li>HTML</li>
                                                        <li>CSS</li>
                                                        <li>JavaScript</li>
                                                        <li>React.js</li>
                                                        <li>Bootstrap</li>
                                                        <li>Handlebars</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className='card'>
                                                <div className='card-body'>
                                                    <h5 className='card-title'>Back End</h5>
                                                    <ul className='card-text'>
                                                        <li>Node.js</li>
                                                        <li>Express.js</li>
                                                        <li>MySQL</li>
                                                        <li>MongoDB</li>
                                                        <li>GraphQL</li>
                                                        <li>REST</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='card-footer bg-transparent border-0'>
                                    <a href='mailto:ortegacanillo76@gmail.com' className='btn btn-primary'>Contact Me</a>
                                    <a href='tel:+639271305088' className='btn btn-primary'>Call Me</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home