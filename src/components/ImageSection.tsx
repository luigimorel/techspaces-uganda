const ImageSection = () => {
    const images = [
        {
            src: 'https://res.cloudinary.com/morelmiles/image/upload/v1624127126/Screenshot_2021-06-19_212457_hqgov0.jpg',
            alt: 'Luigi Morel speaking infront of a panel',
        },
        {
            src: 'https://res.cloudinary.com/morelmiles/image/upload/v1628783663/wordcamp_g7140o.jpg',
            alt: 'People in the Ugandan tech ecosystem',
        },
        {
            src: 'https://res.cloudinary.com/morelmiles/image/upload/v1628793110/wordcamp-entebbe_hsnfgu.jpg',
            alt: 'Lining up for a meal at Word Camp Entebe',
        },
    ];
    return (
        <>
            <div className="container mt-2 mb-5">
                <div className="row  hero__imgs ">
                    {images.map((image, x) => (
                        <div className="col-md-4" key={x} data-testid="img">
                            <img
                                src={image.src}
                                loading="lazy"
                                className="card-img-top"
                                alt={image.alt}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ImageSection;
