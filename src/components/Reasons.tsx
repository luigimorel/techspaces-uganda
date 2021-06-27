const Reasons = () => {
    return (
        <>
            <div className="container mb-5">
                {/* TO DO: Find a way of reducing the duplication */}
                <div className="row">
                    <h6 className="heading text-center mb-3">
                        WHY TECHSPACES UGANDA?
                    </h6>

                    <h2 className="heading text-center mb-5">
                        Foster collaboration
                    </h2>

                    <div className="col-md-4">
                        <div className="container">
                            <div className="reason__container  ">
                                <h3 className="reason heading p-1 text-center">
                                    1
                                </h3>
                            </div>
                            <h4 className=" heading">Connect</h4>
                            <p className="leading">
                                Get in touch with developers and friends of the
                                eco-system that are working on cool and
                                innovative ideas.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="container">
                            <div className="reason__container  ">
                                <h3 className="reason heading p-1 text-center">
                                    2
                                </h3>
                            </div>
                            <h4 className=" heading">Learn</h4>
                            <p className="leading">
                                Get an opportunity to learn from other
                                participants in the ecosystem through
                                collaboration and conversations.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="container">
                            <div className="reason__container  ">
                                <h3 className="reason heading p-1 text-center">
                                    3
                                </h3>
                            </div>
                            <h4 className=" heading">Grow</h4>
                            <p className="leading">
                                Growth requires hardwork. Gain knowledge and
                                grow both as a individual and as a participant
                                in the eco-system.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" divider__container my-4"></div>
        </>
    );
};

export default Reasons;
