import React from 'react'
import { useGlobalContext } from '../context'
import CartItem from './CartItem';

const Cart = () => {

  const { state, handleCartItemDelete } = useGlobalContext();

  return (
    <div id="cart">

      <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>

          <tr>
            <td colSpan={4}>
              { state.cart.length === 0 && "The cart is empty" }
            </td>
          </tr>
          { state.cart.map( 
            ( item, index ) => ( 
              <CartItem 
              key={index} 
              {...item} 
              actionCartItemDelete={ handleCartItemDelete } /> 
            )
          ) }
        </tbody>
       </table>
    </div>
  )
}

export default Cart