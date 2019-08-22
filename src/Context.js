import React, { useState, useEffect } from 'react'
import sectorisation from './Sectorisation.json'
let sectorisation_data = sectorisation.data.roots[0]


let array = []
const applatir = data => {
  if (data.children) {
    return data.children.forEach(row => {
      array.push({ ...row, parent: data.name })
      row.children && applatir(row)
    })
  }
}
applatir(sectorisation_data)

console.log(array)
const AppContext = React.createContext();

export const AppProvider = (props) => {
  const [state, setState] = useState([])
  const [data, setData] = useState(sectorisation_data)




  useEffect(() => console.log(state))

  const finder = (array, stranger) => {
    let reponse = array.find(rew => rew.name === stranger.name)
    return reponse ? reponse.name : null
  }

  const handleState = (el, children, parent) => {
    if (el.name !== parent.name) {
      if (state.find(row => el.name === finder([el, parent], row))) {
        setState(state.filter(row => row.name !== finder([el, parent], row)))
      } else {
        setState([...state, el, ...children])
      }
    } else {
      if (state.find(row => el.name === row.name)) {
        setState(state.filter(row => row.name !== finder([el, ...children], row)))
      } else {
        setState([...state, el, ...children])
      }
    }
  }


  return (
    <AppContext.Provider value={{state, handleState, data}}>
      {props.children}
    </AppContext.Provider>
  );
}

export {AppContext}
