import React from 'react';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { Grid, Button } from '@material-ui/core';
import Sidebar from "./components/Sidebar";

const styles = (theme: Theme) => ({

});

export interface ITemplateProps extends WithStyles {

}

const SidebarPage: React.FunctionComponent<ITemplateProps> = (props) => {
  const [evan, setEvan] = React.useState(0);

  const mainContent = () => {
    return (
      <Grid>
        DO YOUR STUFF HERE DO YOUR STUFF HERE DO YOUR STUFF HERE DO YOUR STUFF HERE DO YOUR STUFF HERE DO YOUR STUFF HERE DO YOUR STUFF HERE DO YOUR STUFF HERE DO YOUR STUFF HERE DO YOUR STUFF HERE
      </Grid>
    );
  }

  const evanContent = () => {
    return (
      <Grid>
        { evan }
      </Grid>
    );
  }

  const onSetEvan = () => {
    setEvan((prevState) => prevState = prevState + 1);
  }

  console.log("EVAN")
  console.log("ALVIN")
  return (
    <React.Fragment>
      <Grid container={ true } style={{ height: '500px', width: '500px', border: '1px solid', position: 'relative'}}>
        <Sidebar
          content={ evanContent() }
          widthP={ '200px' }
          position={ 'right' }
        />
        { mainContent() }
        <Button onClick={() => onSetEvan() } >
            { 'Add Evan' }
        </Button>
      </Grid>
    </React.Fragment>
  );
}

export default withStyles(styles, { withTheme: true })(SidebarPage);
