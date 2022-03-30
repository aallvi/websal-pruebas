import React from 'react'

import { Navigation } from "./Navigation/Navigation";
import { Provider } from "react-redux";
import store from './store'
import './styles/styles.scss'

function App() {
  return (
    <Provider store={store} >

    
     <Navigation/>

     </Provider>
  );
}

export default App;
