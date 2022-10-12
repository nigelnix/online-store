//create initialState
export const initialState = {
    user: {},
    products: [],
    cart: []
}


//create reducer
export function reducer (state, action) {
    
    switch (action.type) {
        case 'REGISTER':
            return { ...state, user: action.payload }
        
        case 'FETCHPRODUCTS':
            return { ...state, products: action.payload}

        case 'ADDTOCART':
            return {...state, cart: [...state.cart, action.payload]}

        case 'REMOVEITEM':
            return {...state, cart: state.cart.filter(item => item.id !== action.payload)}

        case 'QUANTITYPLUS':
            return {...state, cart: state.cart.map(item => item.id === action.payload? {...item, qty: item.qty + 1}: item) }

        case 'QUANTITYMINUS':
                return {...state, cart: state.cart.map(item => item.id === action.payload? {...item, qty: item.qty - 1}: item) }
    
        default:
            throw new Error(`The action ${action.type} not defined`);
    }
}