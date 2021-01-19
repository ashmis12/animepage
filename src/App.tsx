import React, { useContext, useReducer } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import  AppReducer  from './store/AppReducer';
import AppContext from './store/AppContext';
import AppRoutes from './routes/AppRoutes';

function App() {
  const initialState = useContext(AppContext);
  const [state, dispatch] = useReducer(AppReducer, initialState.state);
  return (
    <Router>
      <AppContext.Provider value={{ state, dispatch }}>
          <AppRoutes />
      </AppContext.Provider>
    </Router>
  );
}

export default App;
