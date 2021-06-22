import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="container ">
            <div className="row">
                <div className="col-md-12 text-center error__text">
                    You are lost 😥
                </div>

                <div className="text-center">
                    <Link to="/">
                        <button className="error__btn">Go home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Error;
