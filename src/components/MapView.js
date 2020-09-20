import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import asphalt_icon from '../icons/asphalt_location.png';
import construction_icon from '../icons/construction_location.png';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));
//


const MapView = ({item}) => {
    const [center, setCenter] = useState({lat: 48.8, lng: 9.22 });
    const AnyReactComponent = ({icon,price,phone}: any) => <div ><img alt="icon" src={icon} width={30} /><br/><Paper variant="outlined">{price}</Paper></div>;
    const classes = useStyles();
    const [zoom, setZoom] = useState(11);
    return (
        <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDGe5vjL8wBmilLzoJ0jNIwe9SAuH2xS_0' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <AnyReactComponent
            lat={item.locationN}
            lng={item.locationE}
            icon={asphalt_icon}
            price=""
          />

          <AnyReactComponent
            lat={item.locationN-0.02}
            lng={item.locationE-0.02}
            icon={construction_icon}
                        price="3030€"
          phone="+41123412523"
/>

          <AnyReactComponent
            lat={item.locationN+0.01}
            lng={item.locationE-0.0212}
            icon={construction_icon}
            price="1234€"
          phone="+41123412523"
/>

          <AnyReactComponent
            lat={item.locationN+0.003}
            lng={item.locationE+0.0212}
            icon={construction_icon}
            price="139€"
          phone="+41123412523"
/>

          <AnyReactComponent
            lat={item.locationN-0.003}
            lng={item.locationE-0.04}
            icon={construction_icon}
            price="1000€"

          phone="+41123412523"
/>

          <AnyReactComponent
            lat={item.locationN-0.003}
            lng={item.locationE-0.04}
            icon={construction_icon}
            phone="+41123412523"
          />
          <AnyReactComponent
            lat={item.locationN+0.01}
            lng={item.locationE-0.3}
            icon={construction_icon}
              price="1000€"
              phone="+41123412523"
          />

          <AnyReactComponent
            lat={item.locationN+0.11}
            lng={item.locationE+0.05}
            icon={construction_icon}
            price="1000€"
            phone="+41123412523"
          />

        </GoogleMapReact>
      </div>
    );
}

export default MapView;
