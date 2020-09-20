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
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import MapView from './MapView'
import Map from "./Map"
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function ItemForm({item, user}) {
  const classes = useStyles();
  const handleChangeProductType = (event) => {
  setProduct_type(event.target.value);
  };
  const handleChange = (event) => {
  setAge(event.target.value);
  };
  const handleChangeChunkSize = (event) => {
  setChunkSize(event.target.value);
  };
  const handleChangeAmount = (event) => {
  setAmount(event.target.value);
  };

  const [age, setAge] = React.useState('');
  const [product_type, setProduct_type] = React.useState('');
  const [chunkSize, setChunkSize] = React.useState('');
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());
  const [amount, setAmount] = React.useState('');





  return (

        <Paper className={classes.paper}>


        <div>
        <Typography gutterBottom variant="h6">
        Create new item

        <Button size="small">Save</Button>

        <Button size="small">Cancel</Button>
        </Typography>
        <Typography gutterBottom variant="subtitle1">
        <br/>
        How much material do you have?
<br/>
        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
            <OutlinedInput
              id="outlined-adornment-weight"
              onChange={handleChangeAmount}
              endAdornment={<InputAdornment position="end">t (1000 kg)</InputAdornment>}
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'weight',
              }}
              labelWidth={0}
            />
            <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText>
          </FormControl>
          <br/>
What is the quality of your material?
<br/>
<Typography variant="body2" color="textSecondary">
  How easily can your material be crushed?
</Typography>
              <FormControl className={classes.formControl}>
                <InputLabel id="product_type">Type</InputLabel>
                <Select
                  labelId="product_type-label"
                  id="product_type-helper"
                  value={product_type}
                  onChange={handleChangeProductType}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"type1"}>Normal</MenuItem>
                  <MenuItem value={"type2"}>Bad</MenuItem>
                  <MenuItem value={"type3"}>Good</MenuItem>
                </Select>
                <FormHelperText>Find info here.</FormHelperText>
              </FormControl>
<br/>
What is the granulometry of your material?
<br/>
<Typography variant="body2" color="textSecondary">
  How big are the chunks?
</Typography>
              <FormControl className={classes.formControl}>
                <InputLabel id="chunkSize">Granulometry</InputLabel>
                <Select
                  labelId="chunkSize-label"
                  id="chunkSize-helper"
                  value={chunkSize}
                  onChange={handleChangeChunkSize}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"fine"}>fine</MenuItem>
                  <MenuItem value={"medium"}>medium</MenuItem>
                  <MenuItem value={"thick"}>thick</MenuItem>

                </Select>
                <FormHelperText>Average Chunk Size</FormHelperText>
              </FormControl>
<br/>In which timeframe could your material be picked up? <br/>From:
              <DatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
              />
               <br/>To:
              <DatePicker
                selected={endDate}
                onChange={date => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
              />
              <br/>Where is your site located?<br/>
              <Typography variant="body2" color="textSecondary">
                Drag the marker on the map to the location of your site.
              </Typography>
              <Map
    google={"AIzaSyDXQ41_WmK-K4oz3nzFNNM6KI_Jc_HIUTg"}
    center={{lat: 18.5204, lng: 73.8567}}
    height='300px'
    zoom={15}
   />

</Typography>
            </div>



        {/*<Map google={this.props.google} center={{lat: 18.5204, lng: 73.8567}} height='300px' zoom={15} />*/}

    {/* { (2 === 2) && <a>yes</a>}*/}
      </Paper>
  );
}

//
ItemForm.propTypes = {
  user: PropTypes.object.isRequired,
}
//
// export default ItemForm;
