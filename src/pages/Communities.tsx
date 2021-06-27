import { Helmet } from 'react-helmet';

import CommunitiesContent from '../components/content/ComunitiesContent';

<Helmet>
    <title>Techspaces Uganda | Communities</title>
    <meta name="title" content="Techspaces Uganda" />
    <meta
        name="keywords"
        content="community, open source, developers, kampala, uganda, web development, "
    />
    <meta name="robots" content="index, follow" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="language" content="English" />
    <meta name="revisit-after" content="1 days" />
    <meta
        name="description"
        content="Techspaces Uganda is a tech community led initiative with an aim of congregating information about the tech ecosystem in Uganda in one place "
    />
</Helmet>;

const Communities = () => {
    return (
        <div>
            <div className="jumbotron ">
                <p
                    className="breadcrumb"
                    style={{ backgroundColor: '#25c2a0' }}
                >
                    Home / Communities
                </p>

                <p
                    className="text-center jumbo__para "
                    style={{ backgroundColor: '#25c2a0' }}
                >
                    Be part of the larger developer <br />
                    ecosystem by joining the technical <br /> group of your
                    choice.
                </p>
            </div>

            <CommunitiesContent />
        </div>
    );
};

export default Communities;
