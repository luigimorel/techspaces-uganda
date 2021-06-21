import placeholder from './../assets/img-placeholder.png';

const ImageSection = () => {
    return (
        <>
            <div className="container mt-2 mb-5">
                <div className="row  hero__imgs ">
                    <div className="col-md-3">
                        <img
                            src="https://res.cloudinary.com/morelmiles/image/upload/v1624127126/Screenshot_2021-06-19_212457_hqgov0.jpg"
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
