import React from 'react';
import "../styles/styles.scss"
import AppRoutes from './AppRoutes';
import { Provider } from "mobx-react"
import CartStore from '../stores/CartStore';

const App = () => (
  <Provider CartStore={CartStore} > 
    <AppRoutes />
  </Provider>
)

export default App;
