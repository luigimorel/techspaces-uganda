const Hero = () => {
    return (
        <>
            <div className=" hero__section">
                <div className="herotext__container">
                    <p className="hero__para">
                        Ugandan <i>tech</i> ecosystem in one place
                    </p>

                    <p className="small__text">
                        Bringing to you the information with convenience,
                        purpose and zero ambiguity.
                    </p>

                    <a
                        href="https://github.com/morelmiles/techspaces-uganda"
                        rel="noreferrer noopenner"
                        target="_blank"
                    >
                        <button className="hero__btn" data-testid="contribute">
                            Contribute
                        </button>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Hero;
