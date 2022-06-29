import React from 'react';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './scrollTop'
import ReactDOM from 'react-dom';


ReactDOM.render(
  
      <BrowserRouter>
        <Provider store={store}>
          <ScrollToTop/>
       
          
          <App />
        </Provider>
      </BrowserRouter>
  
    ,
    document.getElementById('root')
  )
  
  