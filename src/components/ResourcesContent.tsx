import placeholder from './../assets/img-placeholder.png';

const ResourcesContent = () => {
    return (
        <div className="container resources__section">
            {/* TO DO: Find a way of reducing the duplication */}
            <div className="row resources__row">
                <div className="col-md-4">
                    <div className="card" style={{ width: '18rem' }}>
                        <img
                            loading="lazy"
                            className="card-img-top resource__thumbnail"
                            src={placeholder}
                            alt="Card image cap"
                        />
                        <div className="card-body">
                            <p className="card-text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Deleniti necessitatibus, in
                                aut hic iste quaerat.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card" style={{ width: '18rem' }}>
                        <img
                            loading="lazy"
                            className="card-img-top resource__thumbnail"
                            src={placeholder}
                            alt="Card image cap"
                        />
                        <div className="card-body">
                            <p className="card-text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Deleniti necessitatibus, in
                                aut hic iste quaerat.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card" style={{ width: '18rem' }}>
                        <img
                            loading="lazy"
                            className="card-img-top resource__thumbnail"
                            src={placeholder}
                            alt="Card image cap"
                        />
                        <div className="card-body">
                            <p className="card-text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Deleniti necessitatibus, in
                                aut hic iste quaerat.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row resources__row">
                <div className="col-md-4">
                    <div className="card" style={{ width: '18rem' }}>
                        <img
                            loading="lazy"
                            className="card-img-top resource__thumbnail"
                            src={placeholder}
                            alt="Card image cap"
                        />
                        <div className="card-body">
                            <p className="card-text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Deleniti necessitatibus, in
                                aut hic iste quaerat.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card" style={{ width: '18rem' }}>
                        <img
                            loading="lazy"
                            className="card-img-top resource__thumbnail"
                            src={placeholder}
                            alt="Card image cap"
                        />
                        <div className="card-body">
                            <p className="card-text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Deleniti necessitatibus, in
                                aut hic iste quaerat.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card" style={{ width: '18rem' }}>
                        <img
                            loading="lazy"
                            className="card-img-top resource__thumbnail"
                            src={placeholder}
                            alt="Card image cap"
                        />
                        <div className="card-body">
                            <p className="card-text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Deleniti necessitatibus, in
                                aut hic iste quaerat.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResourcesContent;
