import React from "react";
import logo from '../logo.svg';
import asphalt_icon from '../icons/asphalt.png';
import "./Logo.css";
import PropTypes from "prop-types";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    minWidth: 300,
    maxWidth: 900,
  },
  image: {
    width: 50,
    height: 50,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function ComplexGrid({item, user}) {
  const classes = useStyles();

  return (
      <div className={classes.root}>
      <Paper className={classes.paper}>

        <Grid container spacing={3}>
          <Grid item>
            <Grid item>
            <ButtonBase className={classes.image}>
            <img alt="icon" src={asphalt_icon} width={30} />
            </ButtonBase>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$19.00</Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
              <Typography variant="body2" color="textSecondary">
                Location
              </Typography>
                <Typography gutterBottom variant="subtitle1">
                  {item.locationN}N, {item.locationE}E
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Amount:
                </Typography>
                <Typography gutterBottom variant="subtitle1">
                  {item.amount}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Type:
                </Typography>
                <Typography gutterBottom variant="subtitle1">
                  {item.type}
                </Typography>

                <Typography variant="body2" color="textSecondary">
                  Possible pickuptime:
                </Typography>
                <Typography gutterBottom variant="subtitle1">
                  {item.startDate}  -  {item.endDate}
                </Typography>

              </Grid>
              <Grid item>

              </Grid>
            </Grid>

          </Grid>
          <Grid item>

          { (item.userId === user.userId) && (
            <React.Fragment>

            <Grid item>
            <Button size="small">Edit</Button>
            </Grid>

            <Grid item>
            <Button size="small">Delete</Button>
              </Grid>
              </React.Fragment>
            )

            }


</Grid>
        </Grid>
      </Paper>
    </div>
  );
}

//
ComplexGrid.propTypes = {
  item: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
}
//
// export default ItemView;
