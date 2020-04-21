import React from 'react';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { Grid } from '@material-ui/core';

const styles = (theme: Theme) => ({
});

export interface ITemplateProps extends WithStyles {
  
}

const Test: React.FunctionComponent<ITemplateProps> = (props) => {

  return (
    <Grid>
      <div>TEST PAGE</div>
    </Grid>
  );
}

export default withStyles(styles, { withTheme: true })(Test);
