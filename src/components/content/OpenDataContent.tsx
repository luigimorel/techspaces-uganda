import { FaExternalLinkAlt } from 'react-icons/fa';

import { data } from '../../data/openData';

const OpenDataContent = () => {
    return (
        <div className="container ">
            <div className="row resources__row">
                {data.map(
                    ({ imageURL, heading, descText, communityLink, index }) => {
                        return (
                            <div className="col-md-4 resource mb-4">
                                <div
                                    className="col-md-4 "
                                    style={{ width: 'auto' }}
                                    key={index}
                                >
                                    <img
                                        loading="lazy"
                                        className="card-img-top "
                                        src={imageURL}
                                        alt={heading}
                                    />
                                    <div className="card-body">
                                        <p className="resource__heading card-text">
                                            {heading}
                                            <span className="heading__span">
                                                <a
                                                    href={communityLink}
                                                    rel="noreferrer"
                                                    target="_blank"
                                                >
                                                    <FaExternalLinkAlt />
                                                </a>
                                            </span>
                                        </p>

                                        <p className="card-text">
                                            <a
                                                href={communityLink}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                {descText}
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    },
                )}
            </div>
        </div>
    );
};

export default OpenDataContent;
