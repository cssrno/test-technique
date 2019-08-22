import React, { Fragment, useState, useContext } from 'react'
import { AppContext } from './Context'
export const Details = props => {
  const {state, handleState} = useContext(AppContext);
  return (
    <tr>
      <td>
        {
          props.isChildren ? (
            <details>
              <summary onClick={props.toggle} style={{ marginLeft: props.node * 10 + "px" }}> {props.name} </summary>
            </details>
          ) : <div style={{ marginLeft: props.node * 17 + "px" }}> {props.name} </div>
        }
      </td>
      <td>
        <input type="checkbox" checked={state.find(row => row.name === props.name) ? true : false} onChange={() => handleState(props.data, props.children, props.parent)} />
      </td>
      <td>
        <input type="checkbox" />
      </td>
    </tr>
  )
}

export const Loop = props => {
  const [isOpen, open] = useState(false)
  const toggle = () => open(!isOpen)
  return (
    <Fragment>
      <Details
        data={props.data}
        children={props.children}
        parent={props.parent}
        name={props.name}
        node={props.node + 1}
        toggle={toggle}
        isChildren={props.children.length > 0 ? true : false}
        />
      {
        isOpen && props.children && props.children.map(row => {
          return <Loop
                  data={row}
                  key={row.name}
                  parent={props.data}
                  children={row.children}
                  name={row.name}
                  node={props.node + 1}
                  />
        })
      }
    </Fragment>
  )
}
