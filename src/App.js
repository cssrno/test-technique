import React, { useContext } from 'react'
import { AppProvider } from './Context'
import './App.css'
import Array from './Array'

const App = () => (
  <AppProvider>
    <Array />
  </AppProvider>
)
export default App