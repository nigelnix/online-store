import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { dataContext } from '../../context/context';

function Navbar() {
    const { state, dispatch } = useContext(dataContext);
  return (
      <nav className="navbar navbar-expand-lg bg-primary">
          <div className="container-fluid">
              <Link className="navbar-brand text-info fw-bold" to="/">Shopify</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                          <Link className="nav-link text-light active" aria-current="page" to="/">Home</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link text-light" to="/profile">Profile</Link>
                      </li>
                      
                      <li className="nav-item">
                          <Link className="nav-link text-light" to='/sale'>Sale %</Link>
                      </li>
                  </ul>
                  
                  {/* search bar */}
                  {/* <form className="d-flex border search-bar" role="search">
                      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                          <button className="btn btn-sm btn-outline-success " type="submit">Search</button>
                  </form> */}

                  {/* navbar right  */}
                  <ul className="navbar-nav mb-2 mb-lg-0">
                      <li className="nav-item mx-2">
                          <Link className="nav-link text-light" to="/login">Login</Link>
                      </li>
                      <li className="nav-item mx-2">
                          <Link className="nav-link text-light" to="/register">Register</Link>
                      </li>
                      <li className="nav-item mx-2">
                          <Link className="nav-link text-light" to="/cart">
                              {<FaShoppingCart />}
                              {state.cart.length}
                          </Link>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
  )
}

export default Navbar