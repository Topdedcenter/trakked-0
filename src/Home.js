import React from 'react';
import { makeStyles } from "@material-ui/core/styles"
import "./Home.css";

import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom";

import {
  Drawer, List, ListItem,
  ListItemIcon, ListItemText,
  Container, Typography,
} from "@material-ui/core";

import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from '@material-ui/icons/Info';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import BuildIcon from '@material-ui/icons/Build';

const useStyles = makeStyles((theme) => ({
  drawerPaper: { width: 'inherit' },
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary
  }
}))

const Home =({handleLogout}) =>  {
  const classes = useStyles();
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Drawer
          style={{ width: '220px' }}
          variant="persistent"
          anchor="left"
          open={true}
          classes={{ paper: classes.drawerPaper }}
        >
          <List>
            <Link to="/" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={"Home"} />
              </ListItem>
            </Link>
            <Link to="/Garage" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <DriveEtaIcon />
                </ListItemIcon>
                <ListItemText primary={"Garage"} />
              </ListItem>
            </Link>
            <Link to="/Maintenance" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <BuildIcon />
                </ListItemIcon>
                <ListItemText primary={"Maintenance"} />
              </ListItem>
            </Link>
            <ListItem button>
                <button onClick={handleLogout}>Logout</button>
                <ListItemIcon>
                    <ExitToAppIcon />
                </ListItemIcon>
            </ListItem>
          </List>
        </Drawer>
        <Switch>
          <Route exact path="/">
            <Container>
              <Typography variant="h3" gutterBottom>
                Home
              </Typography>
              <Typography variant="body1" gutterBottom>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </Typography>
            </Container>
          </Route>
          <Route exact path ="/Garage">

          </Route>
          <Route exact path="/Maintenance">
              
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Home;