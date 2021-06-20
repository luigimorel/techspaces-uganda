import { data } from '../../data/openData';

const OpenDataContent = () => {
    return (
        <div className="container ">
            {/* TO DO: Find a way of reducing the duplication */}
            <div className="row resources__row">
                <div className="col-md-4 resource mb-4">
                    {data.map(({ imageURL, altText, descText, index }) => {
                        return (
                            <div
                                className="col-md-4 "
                                style={{ width: 'auto' }}
                                key={index}
                            >
                                <img
                                    loading="lazy"
                                    className="card-img-top "
                                    src={imageURL}
                                    alt={altText}
                                />
                                <div className="card-body">
                                    <p className="card-text">
                                        <a
                                            href="link"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {descText}
                                        </a>
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default OpenDataContent;
