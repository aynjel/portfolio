function About() {
    return (
        <>
            <div className="container">
                <div className="card border-0 shadow my-5">
                    <div className="card-body p-0 m-0 h-100">
                        <div className="card-header bg-transparent border-0">
                            <h1 className="card-title text-justify fw-bold">
                                About Me
                            </h1>
                        </div>
                        <div className="card-body">
                            <h2 className="card-text text-justify me-3">
                                Full Stack Web Developer
                            </h2>
                            <p className="card-text text-justify me-3">
                                I am a full stack web developer with a passion for learning and creating. I have experience with HTML, CSS, JavaScript, Node.js, Express.js, MySQL, MongoDB, and React.js.
                            </p>

                            <hr className="my-4" />

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
                    </div>
                </div>
            </div>
        </>
    )
}

export default About