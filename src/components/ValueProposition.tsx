import {
    FaBook,
    FaCode,
    FaCodeBranch,
    FaDatabase,
    FaPalette,
    FaPeopleCarry,
    FaToolbox,
} from 'react-icons/fa';

const ValueProposition = () => {
    return (
        <>
            <div className="container  mb-5 mt-5 ">
                <div className="row mt-5">
                    <h6 className="heading text-center mb-3">
                        WHAT'S IN THE BOX?
                    </h6>
                    <h2 className="heading text-center mb-3">
                        Information in one place...
                    </h2>

                    <p className="info__text">
                        Techspaces Uganda was created with the main aim of
                        congregating information about the bigger tech
                        eco-system ( both technical and non-technical) in
                        Uganda.
                    </p>
                </div>

                <div className="container">
                    <div className="icon__container">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="icon__layout">
                                    <div className="layout my-4">
                                        <FaToolbox className="icon" />
                                        <p className="text-center vp__text">
                                            Tools
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="icon__layout">
                                    <div className="layout my-4">
                                        <FaCode className="icon" />
                                        <p className="text-center vp__text">
                                            Engineering
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="icon__layout">
                                    <div className="layout my-4">
                                        <FaDatabase className="icon" />
                                        <p className="text-center vp__text">
                                            Open Data
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="icon__layout">
                                    <div className="layout my-4">
                                        <FaCodeBranch className="icon" />
                                        <p className="text-center vp__text">
                                            OSS
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="icon__layout">
                                    <div className="layout my-4">
                                        <FaPeopleCarry className="icon" />
                                        <p className="text-center vp__text">
                                            Start-ups
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="icon__layout">
                                    <div className="layout my-4">
                                        <FaBook className="icon" />
                                        <p className="text-center vp__text">
                                            Docs{' '}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="icon__layout">
                                    <div className="layout my-4">
                                        <FaPalette className="icon" />
                                        <p className="text-center vp__text">
                                            Design
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="icon__layout">
                                    <div className="layout my-4">
                                        <FaCode className="icon" />
                                        <p className="text-center vp__text">
                                            Collaborations
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ValueProposition;
