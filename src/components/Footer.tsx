const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-4">
                    <p className="leading ml-3b footer__para">
                        This is the text that will be used to talk about the
                        final web page
                    </p>
                </div>
                <div className="col-md-4">
                    <ul className="list-group">
                        <li className="list-item">Home</li>
                        <li className="list-item">Home</li>
                        <li className="list-item">Home</li>
                        <li className="list-item">Home</li>
                    </ul>
                </div>

                <div className="col-md-4">
                    <h4 className="heading text-center">Social Links</h4>
                    <div className="row">
                        <i className="fas fas-facebook mb-3">
                            <a href="#">social link</a>
                        </i>
                        <i className="fas fas-facebook mb-3">
                            <a href="#">social link</a>
                        </i>
                        <i className="fas fas-facebook mb-3">
                            <a href="#">social link</a>
                        </i>
                    </div>
                </div>
            </div>
            <p className="leading text-center mx-3">
                &copy; TechSpaces Uganda {year}
            </p>
        </div>
    );
};

export default Footer;
