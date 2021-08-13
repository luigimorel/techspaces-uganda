const ImageSection = () => {
    return (
        <>
            <div className="container mt-2 mb-5">
                <div className="row  hero__imgs ">
                    <div className="col-md-4" data-testid="img">
                        <img
                            src="https://res.cloudinary.com/morelmiles/image/upload/v1624127126/Screenshot_2021-06-19_212457_hqgov0.jpg"
                            loading="lazy"
                            className="card-img-top"
                            alt="Luigi Morel speaking infront of a panel"
                        />
                    </div>

                    <div className="col-md-4" data-testid="img">
                        <img
                            src="https://res.cloudinary.com/morelmiles/image/upload/v1628783663/wordcamp_g7140o.jpg"
                            loading="lazy"
                            className="card-img-top"
                            alt="People in the Ugandan tech ecosystem"
                        />
                    </div>

                    <div className="col-md-4" data-testid="img">
                        <img
                            src="https://res.cloudinary.com/morelmiles/image/upload/v1628793110/wordcamp-entebbe_hsnfgu.jpg"
                            loading="lazy"
                            className="card-img-top"
                            alt="Lining up for a meal at Word Camp Entebe "
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ImageSection;
