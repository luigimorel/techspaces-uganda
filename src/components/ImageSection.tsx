import placeholder from './../assets/img-placeholder.png';

const ImageSection = () => {
    return (
        <>
            <div className="container mt-3 mb-3">
                <div className="row  hero__imgs">
                    <div className="col-md-3">
                        <img
                            src={placeholder}
                            className="card-img-top"
                            alt="People in the Ugandan tech ecosystem"
                        />
                    </div>

                    <div className="col-md-3">
                        <img
                            src={placeholder}
                            className="card-img-top"
                            alt="People in the Ugandan tech ecosystem"
                        />
                    </div>

                    <div className="col-md-3">
                        <img
                            src={placeholder}
                            className="card-img-top"
                            alt="People in the Ugandan tech ecosystem"
                        />
                    </div>

                    <div className="col-md-3">
                        <img
                            src={placeholder}
                            className="card-img-top"
                            alt="People in the Ugandan tech ecosystem"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ImageSection;
