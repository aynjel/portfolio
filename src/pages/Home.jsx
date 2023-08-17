function Home() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <img src="https://picsum.photos/200/300" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card Title</h5>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                                </p>
                                <a href="/" className="btn btn-primary">
                                    Go somewhere
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card">
                            <img src="https://picsum.photos/200/300" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card Title</h5>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                                </p>
                                <a href="/" className="btn btn-primary">
                                    Go somewhere
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home