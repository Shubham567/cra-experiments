// import './App.css';
import { useEffect, useState } from "react";
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import routes from './routes';
import {useSelector} from 'react-redux';
import { Grid, Drawer, IconButton, Divider, List, ListItem, ListItemText, ListItemIcon, makeStyles, useTheme, Link as MUILink, Typography } from "@material-ui/core";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {APP_DETAILS} from "./defs/appDetails";
import clsx from "clsx";
import { Menu } from "@material-ui/icons";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

function App() {
  
  const appDetails = useSelector(state => state.AppReducer);

  const classes = useStyles();

  const theme = useTheme();
  const [openMenu, setOpenMenu] = useState(true);
  
  const handleDrawerOpen = () => {
    setOpenMenu(true);
  }
  const handleDrawerClose = () => {
    setOpenMenu(false);
  }
  
  useEffect(() => {
    document.title = appDetails.pageTitle;
    document.querySelector('meta[name="description"]')?.setAttribute("content",appDetails.description);
  }, [appDetails])

  useEffect(() => {
    window.drawerClose =  handleDrawerClose;
    window.drawerOpen = handleDrawerOpen;
    return () => {
      window.drawerClose =  undefined;
      window.drawerOpen = undefined;
    }
  }, [setOpenMenu]);

  return (
    <BrowserRouter>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={openMenu}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <Typography variant="h5">
                {APP_DETAILS.name}
              </Typography>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            </div>
            <Divider />
            <List>
              {routes.map((route) => (
                  <MUILink to={route.href} key={route.href}>
                    <ListItem button>
                      <ListItemIcon>{route.icon}</ListItemIcon>
                      <ListItemText primary={route.name} />
                    </ListItem>
                  </MUILink>
              ))}
            </List>
          </Drawer>
              

        <main    className={clsx(classes.content, {[classes.contentShift]: openMenu,})}>
            <Switch>
              {
                routes.map(route => <Route path={route.pathname} {...route.props} key={route.pathname}>{route.component}</Route>)
              }
            </Switch>
      </main>
      {
        !openMenu &&
        <div style={{position: "fixed", zIndex: 5000, right: 30, bottom:  20}}>
          <IconButton onClick={handleDrawerOpen}><Menu/></IconButton>
        </div>
        }
    </BrowserRouter>
  );
}

export default App;