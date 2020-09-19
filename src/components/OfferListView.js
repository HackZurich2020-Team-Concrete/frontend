import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { List } from '@material-ui/core';
import { useData } from '../context/dataContext';
import ItemView from './ItemView';


const useStyles = makeStyles(
  theme => ({
    root: {
      width: '100%',
    },
  }),
  { name: 'offerListView' }
)

const OfferListView = ({ className, items }) => {
  const classes = useStyles();
  const { user } = useData();

  console.log(items);

  return (
    <div>
      <List className={[classes.root, className].join(' ')}>
        {items.map(item => <ItemView key={item.id} item={item} user={user} />)}
      </List>
    </div>
  )
}

OfferListView.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default OfferListView;
