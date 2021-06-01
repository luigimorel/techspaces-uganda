import { Route } from 'react-router';
import Communities from './pages/Communities';
import Home from './pages/Home';
import OpenData from './pages/OpenData';
import OpenSource from './pages/OpenSource';
import Resources from './pages/Resources';

const App = () => {
    return (
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/resources" component={Resources} />
            <Route exact path="/communities" component={Communities} />
            <Route exact path="/oss" component={OpenSource} />
            <Route exact path="/open-data" component={OpenData} />
        </div>
    );
};

export default App;
