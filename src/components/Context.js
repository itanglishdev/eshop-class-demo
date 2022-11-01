import {createContext, useReducer} from 'react'

export const Context = createContext()


 function ContextProvider({children}) {

    const reducer = (state,action) => {

        switch(action.type) {

                case 'addProducts':

                return {
                    ...state,
                    products: [...action.payload]
                }

                case 'addCart':
                return {
                    ...state,
                    cart: [...state.cart,action.payload]
                }
 
                case 'removeCart':
                return 
                         
                case 'search':
                return

                default:
                    return
        }
    }

    const [state, dispatch]  = useReducer(reducer,{
        products:[],
        cart: [],
        searchtext:''    
    })


  return (
    <Context.Provider value={{state, dispatch}}>
            {children}
    </Context.Provider>
  )
}
export default ContextProvider
