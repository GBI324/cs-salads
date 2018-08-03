import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        width:250,
        height: 250,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 5,
    },
});

function CenteredGrid(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <Grid container spacing={24}>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>Tomato</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>Cucumber</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>Salad</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>Tomato</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>Salad</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>Tomato</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>Cucumber</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>Salad</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>Cucumber</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>Salad</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>Tomato</Paper>
                </Grid>
            </Grid>
        </div>
    );
}

CenteredGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);