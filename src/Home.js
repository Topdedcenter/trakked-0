import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Garage from './pages/Garage';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core';


const Home = ({handleLogout}) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className="barTitle">
                    Welcome to Trakked
                </Typography>
                <Button onClick={handleLogout} color="inherit">Logout</Button>
            </Toolbar>
        </AppBar>
    );
};
// const Home = ({handleLogout}) => {

//     return(
//         <section className="home">
//             <nav>
//                 <Router>
//                     <Navbar>
//                         <Switch>
//                             <Route path='/' exact component={Home} ><Home></Route>
//                             <Route path='/garage' component={Garage} />
//                         </Switch>
//                     </Navbar>
//                 </Router>
//                 <h2>Welcome to Trakked</h2>
//                 <button onClick={handleLogout}>Logout</button>
//             </nav>
//         </section>
//     );
// };

export default Home;