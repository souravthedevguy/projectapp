import React from 'react'
import { Button } from 'react-bootstrap'

const CartItem = ({ id, title, price, actionCartItemDelete }) => {
  return (
    <tr>
        <td>{ id }</td>
        <td>{ title } </td>
        <td>${ price } </td>
        <td>
            <Button onClick={ () => actionCartItemDelete(id) }>Remove</Button>
        </td>
    </tr>
  )
}

export default CartItem