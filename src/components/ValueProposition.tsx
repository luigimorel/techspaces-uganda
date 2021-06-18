import { Fa500Px } from 'react-icons/fa';

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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quas dolores voluptatum quia necessitatibus repellat
                        assumenda reiciendis .
                    </p>
                </div>

                <div className="container">
                    <div className="icon__container">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="icon__layout">
                                    <div className="layout my-4">
                                        <Fa500Px className="icon" />
                                        <p className="text-center">Tools</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="icon__layout">
                                    <div className="layout my-4">
                                        <Fa500Px className="icon" />
                                        <p className="text-center">
                                            Engineering
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="icon__layout">
                                    <div className="layout my-4">
                                        <Fa500Px className="icon" />
                                        <p className="text-center">
                                            Open Data{' '}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="icon__layout">
                                    <div className="layout my-4">
                                        <Fa500Px className="icon" />
                                        <p className="text-center">OSS</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="icon__layout">
                                    <div className="layout my-4">
                                        <Fa500Px className="icon" />
                                        <p className="text-center">Start-ups</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="icon__layout">
                                    <div className="layout my-4">
                                        <Fa500Px className="icon" />
                                        <p className="text-center">Docs </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="icon__layout">
                                    <div className="layout my-4">
                                        <Fa500Px className="icon" />
                                        <p className="text-center">Design</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="icon__layout">
                                    <div className="layout my-4">
                                        <Fa500Px className="icon" />
                                        <p className="text-center">
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
