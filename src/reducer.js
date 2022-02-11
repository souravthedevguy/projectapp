export const reducer = ( state, action ) => {

    console.log( state, action );

    if ( action.type === 'ADD_TO_CART' ) {

        const newItem = [ ...state.cart, action.payload ];

        return {
            cart: newItem,
            notification: 'New Item has added to the cart'
        }

    } else if ( action.type === 'REMOVE_FROM_CART' ) {

        console.log("Remove from cart");

        const removedCartItem = state.cart.filter(
            item => item.id !== action.payload.id
        );

        return {
            cart: removedCartItem,
            notification: 'Cart item has been removed'
        }
    }

    return state;
}