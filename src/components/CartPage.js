import React, { useContext } from 'react'
import { Context } from './Context'
import Card from './Card'


const CartPage = () => {

    const {state} = useContext(Context)

  return (
    <div className='flex justify-center items-center flex-wrap gap-[20px]'>
        {
            state.cart.map((item,idx) => <Card 
            key={idx}
            product={item} 
            />)
        }
    </div>
  )
}

export default CartPage