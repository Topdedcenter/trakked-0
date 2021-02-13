import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Garage from './pages/Garage';

const Home = ({handleLogout}) => {

    return(
        <section className="home">
            <nav>
                <Router>
                    <Navbar>
                        <Switch>
                            <Route path='/' exact component={Home} />
                            <Route path='/garage' component={Garage} />
                        </Switch>
                    </Navbar>
                </Router>
                <h2>Welcome to Trakked</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>
        </section>
    );
};

export default Home;