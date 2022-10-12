import React, {useContext} from 'react';
import { dataContext } from '../../../context/context';
import { getWords } from '../../../helper/functions';



function Product({ title, image, description, price, category, id }) {

    const { state, dispatch } = useContext(dataContext);

    //add item to the cart
    function addToCart(item) {

        const itemIndex = state.cart.findIndex((element)=> element.id === item.id)  //-1 or >= 0

        if (itemIndex !== -1) {
            dispatch({type: 'INCREMENTQTY', payload: item.id})
        } else {
            
            //dispatch the action here
            dispatch({ type: 'ADDTOCART', payload: item });
        }
    }

    return (
        <div className="col-md-4 col-sm-6 col-xs-4 my-5 d-flex flex-column align-items-center ">
            <p className="h6 text-primary text-center">{getWords(title, 3)}</p>
            <img src={image} alt="product" className='img-thumbnail prod-image' />
            <p className='text-secondary fst-italic'>Price: {price}€</p>
            <button className="btn btn-primary btn-sm text-light"
                onClick={()=>addToCart({title, image, description, price, category, id, qty:1})}
            >Add To Cart</button>
        </div>
    )
}

export default Product