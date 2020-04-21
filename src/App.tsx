import React from 'react';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { Grid, Button } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SidebarPage from './pages/SidebarPage';
import PopupPage from './pages/PopupPage';

const styles = (theme: Theme) => ({
});

export interface ITemplateProps extends WithStyles {
  
}

const App: React.FunctionComponent<ITemplateProps> = (props) => {

  return (
    <Grid>
      <Router>
        <Link to="/sidebarpage">
          <Button variant={'contained'}>
            SidebarPage
          </Button>
        </Link>
        <Link to="/popuppage">
          <Button variant={'contained'}>
            PopupPage
          </Button>
        </Link>
        <Switch>
          <Route path="/sidebarpage">
            <SidebarPage />
          </Route>
          <Route path="/popuppage">
            <PopupPage />
          </Route>
        </Switch>
      </Router>
    </Grid>
  );
}

export default withStyles(styles, { withTheme: true })(App);
