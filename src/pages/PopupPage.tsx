import React from 'react';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { Grid, Button, TextField, Paper } from '@material-ui/core';
import Draggable from 'react-draggable';

const styles = (theme: Theme) => ({

});

export interface ITemplateProps extends WithStyles {

}

const PopupPage: React.FunctionComponent<ITemplateProps> = (props) => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    return (
    <React.Fragment>
        <Grid>
            <TextField />
            <button
            onClick={ () => {
                setIsOpen((prevState) => { return !prevState; })
            } }
            >
            Open Modal
            </button>
        </Grid>
        { isOpen ? (
            <Draggable
            positionOffset={ { x: 'calc( 50vw - 250px )', y:'calc( 50vh - 250px )' } }
            >
            <Paper style ={ { height:'500px', width: '500px' } }>
                Hello
            </Paper>
            </Draggable>
        ) : (null) }
    </React.Fragment>
    );
}

export default withStyles(styles, { withTheme: true })(PopupPage);
