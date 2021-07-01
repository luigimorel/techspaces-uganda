import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Communities from './pages/Communities';
import Home from './pages/Home';
import OpenData from './pages/OpenData';
import OpenSource from './pages/OpenSource';
import Resources from './pages/Resources';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

<Helmet>
    <title>Techspaces Uganda | Home</title>
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
        content="A tech community led initiative with an aim of congregating information about the tech ecosystem in Uganda in one place "
    />
</Helmet>;

const App = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/resources" component={Resources} />
                    <Route exact path="/communities" component={Communities} />
                    <Route exact path="/oss" component={OpenSource} />
                    <Route exact path="/open-data" component={OpenData} />
                    <Route component={Error} />
                </Switch>
                <Footer />
            </Router>
        </div>
    );
};

export default App;
