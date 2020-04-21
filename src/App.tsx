import React from 'react';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { Grid, Typography, Button, Popover, TextField } from '@material-ui/core';
import Draggable from 'react-draggable';

const styles = (theme: Theme) => ({
  tf:{
    maginLeft:"200px",
  }
});

export interface ITemplateProps extends WithStyles {
  
}

const App: React.FunctionComponent<ITemplateProps> = (props) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Grid>
      <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
        Open Popover
      </Button>
      <Draggable>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <Typography>The content of the Popover.</Typography> 
        </Popover>
      </Draggable>
      <TextField className={props.classes.tf}/>
    </Grid>
  );
}

export default withStyles(styles, { withTheme: true })(App);
