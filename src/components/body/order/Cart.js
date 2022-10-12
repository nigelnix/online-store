import React, {useContext} from 'react';
import { dataContext } from '../../../context/context';
import { getTotal, getWords } from '../../../helper/functions';
import {FaTrashAlt, FaPlusCircle, FaMinusCircle} from 'react-icons/fa'


function Cart() {
  const { state, dispatch } = useContext(dataContext);

  return (
    <div className='container'>
      <table className="table">
        <thead>
          <tr className="text-muted">
            <th scope="col">#</th>
            <th scope='col'>Image</th>
            <th scope="col">Title</th>
            <th scope="col">Category</th>
            <th scope="col">QTY</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((item, index) => (

            <tr key="index">
              <th scope="row">{index + 1}</th>
              <td className="h6 fw-normal fst-italic small">
                <img src={item.image} alt="product" className="img-thumbnail w-50" />
              </td>
              <td className="h6 fw-normal fst-italic small">{getWords(item.title, 3)}</td>
              <td className="h6 fw-normal fst-italic small">{item.category}</td>
              <td className="h6 fw-normal fst-italic small">{item.qty}</td>
              <td className="h6 fw-normal fst-italic small">{item.price * item.qty}€</td>

              <td className="h6 fw-normal fst-italic small" >
                <FaPlusCircle className="text-success" onClick={()=>{
                dispatch({type: "QUANTITYPLUS", payload:item.id})
              }}/> 
              </td>
              <td className="h6 fw-normal fst-italic small" >
                <FaMinusCircle className="text-warning" onClick={()=>{
                dispatch({type: "QUANTITYMINUS", payload:item.id})
              }} /> 
              </td>
              
              <td className="h6 fw-normal fst-italic small" >
                <FaTrashAlt className="text-danger" onClick={()=>{
                dispatch({type: "REMOVEITEM", payload:item.id})
              }}/>
              </td>
              
            </tr>
          )
        
        )}
          
          
        </tbody>
      </table>
      <hr />
      <div className="fw-bold d-flex justify-content-end">Total: {getTotal(state.cart).toFixed(2)}</div>
    </div>
  )
}

export default Cart