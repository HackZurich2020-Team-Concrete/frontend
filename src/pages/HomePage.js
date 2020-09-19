import React, { useState, useEffect } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import "./HomePage.css";
import OfferListView from "../components/OfferListView";
import AddItemButtonGroup from "../components/AddItemButtonGroup";
import Layout from "../components/Layout";
import MapView from "../components/MapView";
import { useData } from "../context/dataContext";

const useStyles = makeStyles(
  theme => ({
    addButtons: {
      margin: '16px',
    },
  }),
  { name: 'home' }
);

const STATE_DEFAULT = 'default';
const STATE_ADD_ITEM = 'add_item';
const STATE_SHOW_ITEM = 'show_item';

const HomePage = () => {
  const [state, setState] = useState(STATE_DEFAULT);
  // Data
  const {
    demanderItems,
    logisticsItems,
    supplierItems,
    isLoggedIn,
    isInitialized,
    user,
    init,
  } = useData()
  const classes = useStyles();

  useEffect(() => {
    if (!isInitialized) {
      console.log('init data context!');
      init();
    }
  });

  console.log(isInitialized);
  console.log(isLoggedIn);
  if (!isInitialized) {
    // TODO show loading screen.
    return <Typography variant="h2">Loading...</Typography>;
  }

  if (!isLoggedIn) {
    // TODO show login screen.
    return <Typography variant="h2">Login page comes here!</Typography>;
  }

  const handleAddItemButton = (type) => {
    console.log(`clicked to add ${type}!`);
  }

  const ownItems = [
    ...supplierItems.filter(item => item.userId === user.id),
    ...demanderItems.filter(item => item.userId === user.id),
    ...logisticsItems.filter(item => item.userId === user.id),
  ]

  return (
    <Layout>
      {/* Side view */}
      <React.Fragment>
        <AddItemButtonGroup className={classes.addButtons} onClick={handleAddItemButton} />
        <OfferListView items={ownItems} />
      </React.Fragment>

      {/* Main view */}
      <MapView />
    </Layout>
  );
};

export default HomePage;
