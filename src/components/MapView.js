import React from 'react';
import PropTypes from 'prop-types';


const MapView = ({ className }) => {

  return (
    <div className={className}>
      <p>Map comes here!</p>
    </div>
  )
}

MapView.propTypes = {
  className: PropTypes.string,
}

export default MapView;
