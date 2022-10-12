import React, { useEffect, useContext } from 'react'
import Product from './order/Product';
import {dataContext} from '../../context/context'

function Body() {
const {state, dispatch} = useContext(dataContext)


    //load products from API
    useEffect(() => { 
        (async () => {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            //add products to state
            dispatch({type: 'FETCHPRODUCTS', payload:data})

        })();
     }, [])

  return (
      <div className="w-100 border d-flex  d-grid row mx-auto">
          <aside className="border border-success col-md-3">aside</aside>
          <main className='border border-danger col-md-9 d-flex flex-wrap justify-content-around'>
              {state.products.map((prod, index) => <Product {...prod} key={index} />) }
              
          </main>
    </div>
  )
}

export default Body