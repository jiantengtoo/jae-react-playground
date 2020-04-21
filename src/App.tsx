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
import Test from './components/Test';

const styles = (theme: Theme) => ({
});

export interface ITemplateProps extends WithStyles {
  
}

const App: React.FunctionComponent<ITemplateProps> = (props) => {

  return (
    <Grid>
      <Router>
        <Link to="/">
          <Button variant={'contained'}>
            Main
          </Button>
        </Link>
        <Link to="/test">
          <Button variant={'contained'}>
            Test
          </Button>
        </Link>
        <Switch>
          <Route path="/test">
            <Test />
          </Route>
        </Switch>
      </Router>
    </Grid>
  );
}

export default withStyles(styles, { withTheme: true })(App);
