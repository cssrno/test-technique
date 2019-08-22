import React, { useContext } from 'react'
import { AppContext } from './Context'
import { Loop } from './Details.js'

const Array = () => {
  const { data } = useContext(AppContext);
  return (
    <table>
      <thead>
        <tr>
          <td></td>
          <td>Voir les brouillons</td>
          <td>Modifier les brouillons</td>
        </tr>
      </thead>
      <tbody>
          <Loop data={data} children={data.children} name={data.name} parent={data} node={0} />
      </tbody>
    </table>
  )
}

export default Array