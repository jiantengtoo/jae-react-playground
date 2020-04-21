import React from 'react';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { Grid } from '@material-ui/core';

const styles = (theme: Theme) => ({
    buttonStyle: {
        maxWidth: '10px',
        '&:hover': {
            cursor: 'pointer'
        },
    }
});

export interface ITemplateProps extends WithStyles {
    readonly widthP: string;
    readonly content: React.ReactNode;
    readonly position: 'left' | 'right' | string;
}

const Sidebar: React.FunctionComponent<ITemplateProps> = (props) => {
  const { classes, widthP, content, position } = props;

  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const onSetSidebarOpen = (open: boolean) => {
    setSidebarOpen(open);
  };

  const leftRightWidth = sidebarOpen ? widthP : 0;
  
  const buttonText = 
    position === 'left' ? 
        sidebarOpen ? '<' : '>'
    : position === 'right' ?
        sidebarOpen ? '>' : '<'
    : '-';

  return (
    <React.Fragment>
        { sidebarOpen ? (
            <Grid container={ true } style={{ 
                height: 'inherit',
                width: widthP, 
                backgroundColor: 'grey',
                position: 'absolute',
                left: position === 'left' ? 0 : 'auto',
                right: position === 'right' ? 0 : 'auto',
            }}>
                { content }
            </Grid>
        ) : (null)
        }
        <Grid onClick={() => onSetSidebarOpen(!sidebarOpen)} style={{ 
            position: 'absolute',
            backgroundColor: 'grey',
            left: position === 'left' ? leftRightWidth : 'auto',
            right: position === 'right' ? leftRightWidth : 'auto',
            fontWeight: 'bold'
        }} className={classes.buttonStyle} >
            { buttonText }
        </Grid>
    </React.Fragment>
  );
}

export default withStyles(styles, { withTheme: true })(Sidebar);
