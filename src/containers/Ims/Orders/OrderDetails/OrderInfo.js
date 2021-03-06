import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        paper: {
            margin: theme.spacing(1),
            padding: theme.spacing(2)
        },
        text: {
            margin: theme.spacing(2),
        }
    }),
);
const OrderInfo = props => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="h6">&nbsp;&nbsp;Order Info</Typography>
            <Paper className={classes.paper}>
                <Grid container>
                    <Grid className={classes.text} container row xs={12}>
                        <Grid item xs={6}>
                            <Typography variant="subtitle2">Health Post ID</Typography>
                            <Typography>123456</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="subtitle2">Address</Typography>
                            <Typography>Nangi, Myagdi</Typography>
                        </Grid>
                    </Grid>
                    <Grid className={classes.text}  container item row xs={12}>
                        <Grid item xs={6}>
                            <Typography variant="subtitle2">Health Post Name</Typography>
                            <Typography>Nangi Swasthya Chauki</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="subtitle2">PO#</Typography>
                            <Typography>12234455</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default OrderInfo;