import { configureStore } from '@reduxjs/toolkit';

// Actions
const SET_CUSTOMER_DATA = 'SET_CUSTOMER_DATA';
const SET_USER_DATA = 'SET_USER_DATA';

const setCustomerData = (data) => ({
  type: SET_CUSTOMER_DATA,
  payload: data,
});

const setUserData = (data) => ({
  type: SET_USER_DATA,
  payload: data,
});

// Reducer
const initialState = {
  customerData: '',
  userData: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CUSTOMER_DATA:
      return { ...state, customerData: action.payload };
    case SET_USER_DATA:
      return { ...state, userData: action.payload };
    default:
      return state;
  }
};

// Store
const store = configureStore({
    reducer: rootReducer,
  });

export { setCustomerData, setUserData, store };