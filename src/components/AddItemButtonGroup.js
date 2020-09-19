import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography, makeStyles, IconButton } from '@material-ui/core';
import asphaltIcon from '../icons/asphalt.png';
import constructionIcon from '../icons/construction.png';
import truckIcon from '../icons/truck.png';

const useStyles = makeStyles(
  theme => ({
    root: {
      paddingTop: '16px',
      paddingBottom: '16px',
      textAlign: 'center',
    },
    iconButton: {
      display: 'inline-block',
      width: '48px',
      height: '48px',
    },
    icon: {
      width: '100%',
    },
  }),
  { name: 'addItemButtonGroup' }
)

const AddItemButtonGroup = ({ className, disabled, onClick }) => {
  const classes = useStyles();

  return (
    <Paper className={[classes.root, className].join(' ')} variant="outlined">
      <Typography variant="subtitle2" align="center">Add an offer</Typography>
      <IconButton
        className={classes.iconButton}
        disabled={disabled}
        title="Supply Asphalt"
        onClick={() => onClick('supply')}>
        <img className={classes.icon} src={asphaltIcon} alt="Supply Asphalt" />
      </IconButton>
      <IconButton
        className={classes.iconButton}
        disabled={disabled}
        title="Offer Transportation"
        onClick={() => onClick('transport')}>
        <img className={classes.icon} src={truckIcon} alt="Offer Transportation" />
      </IconButton>
      <IconButton
        className={classes.iconButton}
        disabled={disabled}
        title="Require Asphalt"
        onClick={() => onClick('demand')}>
        <img className={classes.icon} src={constructionIcon} alt="Require Asphalt" />
      </IconButton>
    </Paper>
  )
}

AddItemButtonGroup.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
}

AddItemButtonGroup.defaultProps = {
  onClick: () => { },
}

export default AddItemButtonGroup;
