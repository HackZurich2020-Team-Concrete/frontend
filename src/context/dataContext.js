import React, { useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

const url = 'http://localhost:8081';

const findNextId = items => {
  let maxId = 0;
  items.forEach(item => {
    if (item.id > maxId) {
      maxId = item.id;
    }
  })
  return maxId + 1;
}

const defaultContextState = {
  isLoggedIn: true,
  user: {
    "id": 29,
    "name": "Ines P Holzman",
    "address:": "Bayreuther Strasse 57,15832",
    "phoneNumber": "069 79 45863",
    "email": "realbusiness@yolomail.cool",
    "model": "user"
  },
  supplierItems: [],
  logisticsItems: [],
  demanderItems: [],
  isInitialized: false,
  login: () => { },
  logout: () => { },
  init: () => { },
  loadAuthDataFromLocalStorage: () => { },
  fetchSupplierItems: () => { },
  deleteSupplierItem: () => { },
  addSupplierItem: () => { },
  fetchLogisticsItems: () => { },
  deleteLogisticsItem: () => { },
  addLogisticsItem: () => { },
  fetchDemanderItems: () => { },
  deleteDemanderItem: () => { },
  addDemanderItem: () => { },
  fetchAllItems: () => { },
}

const DataContext = React.createContext(defaultContextState)

const DataProvider = ({ children }) => {
  const [user, setUser] = useState({
    "id": 29,
    "name": "Ines P Holzman",
    "address:": "Bayreuther Strasse 57,15832",
    "phoneNumber": "069 79 45863",
    "email": "realbusiness@yolomail.cool",
    "model": "user"
  })
  const [supplierItems, setSupplierItems] = useState([])
  const [logisticsItems, setLogisticsItems] = useState([])
  const [demanderItems, setDemanderItems] = useState([])
  const [isInitialized, setIsInitialized] = useState(false)

  const userStorageKey = 'user';

  const setLoggedIn = user => {
    localStorage.setItem(userStorageKey, JSON.stringify(user))
    setUser(user);
  }

  const setLoggedOut = () => {
    localStorage.removeItem(userStorageKey)
    setUser(null)
  }

  const login = (username) => {
    if (username === 'supplier') {
      setLoggedIn({ name: 'supplier', id: 1 });
    } else if (username === 'buyer') {
      setLoggedIn({ name: 'buyer', id: 2 });
    } else {
      return false;
    }
    return true;
  }

  const logout = () => {
    setLoggedOut();
    console.log('Logged out!');
  }

  const fetchSupplierItems = async () => {
    try {
      const response = await axios.get(`${url}/getSuplyOffers`);
      setSupplierItems(response.data)
      return true;
    } catch (err) {
      console.log('failed to fetch supplier items!');
      console.error(err);
      return false
    }
  }

  const deleteSupplierItem = async (id) => {
    try {
      await axios.get(`${url}/deleteSupplier/${id}`);
      setSupplierItems(supplierItems.filter(item => item.id !== id));
      return true;
    } catch (err) {
      console.log(`failed to delete supplier item with id ${id}!`);
      console.error(err);
      return false
    }
  }

  const addSupplierItem = async (item) => {
    try {
      item.id = findNextId(supplierItems);
      await axios.post(`${url}/addSupplier`, item);
      setSupplierItems([...supplierItems, item]);
      return true;
    } catch (err) {
      console.log(`failed to add new supplier item!`);
      console.error(err);
      return false
    }
  }

  const fetchLogisticsItems = async () => {
    try {
      const response = await axios.get(`${url}/getLogistics`);
      setLogisticsItems(response.data)
      return true;
    } catch (err) {
      console.log('failed to fetch logistics items!');
      console.error(err);
      return false
    }
  }

  const deleteLogisticsItem = async (id) => {
    try {
      await axios.get(`${url}/deleteLogistic/${id}`);
      setSupplierItems(logisticsItems.filter(item => item.id !== id));
      return true;
    } catch (err) {
      console.log(`failed to delete logistics item with id ${id}!`);
      console.error(err);
      return false
    }
  }

  const addLogisticsItem = async (item) => {
    try {
      item.id = findNextId(logisticsItems);
      await axios.post(`${url}/addLogistic`, item);
      setLogisticsItems([...logisticsItems, item]);
      return true;
    } catch (err) {
      console.log(`failed to add new logistics item!`);
      console.error(err);
      return false
    }
  }

  const fetchDemanderItems = async () => {
    try {
      const response = await axios.get(`${url}/getRequesters`);
      setDemanderItems(response.data)
      return true;
    } catch (err) {
      console.log('failed to fetch demander items!');
      console.error(err);
      return false
    }
  }

  const deleteDemanderItem = async (id) => {
    try {
      await axios.get(`${url}/deleteRequester/${id}`);
      setDemanderItems(demanderItems.filter(item => item.id !== id));
      return true;
    } catch (err) {
      console.log(`failed to delete demander item with id ${id}!`);
      console.error(err);
      return false
    }
  }

  const addDemanderItem = async (item) => {
    try {
      item.id = findNextId(demanderItems);
      await axios.post(`${url}/addRequester`, item);
      setDemanderItems([...demanderItems, item]);
      return true;
    } catch (err) {
      console.log(`failed to add new demander item!`);
      console.error(err);
      return false
    }
  }

  const fetchAllItems = async () => {
    await fetchSupplierItems();
    await fetchLogisticsItems();
    await fetchDemanderItems();
    return true;
  }

  const init = async () => {
    if (isInitialized) return false;
    setIsInitialized(true);
    await fetchAllItems();
    return true;
  }

  const isLoggedIn = user !== null && user !== undefined;

  return (
    <DataContext.Provider
      value={{
        isLoggedIn,
        user,
        supplierItems,
        logisticsItems,
        demanderItems,
        login,
        logout,
        init,
        fetchSupplierItems,
        deleteSupplierItem,
        addSupplierItem,
        fetchLogisticsItems,
        deleteLogisticsItem,
        addLogisticsItem,
        fetchDemanderItems,
        deleteDemanderItem,
        addDemanderItem,
        fetchAllItems,
        isInitialized,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

const useData = () => React.useContext(DataContext)

export default DataContext
export { DataProvider, useData }
