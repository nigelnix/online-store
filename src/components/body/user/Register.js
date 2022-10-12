import React, { useContext } from 'react';
import { dataContext } from '../../../context/context';

function Register() {

  //using context (manipulate context)
  const { state, dispatch } = useContext(dataContext)

  // submit Handler
  function submitHandler(e) {
    e.preventDefault();

    //read data from form fields and store them into state
    const fd = new FormData(e.target);
    //user = {name: 'fahim', email: 'sdfsdlkj@gmail.com' phone: '12344', password: '123'}
    const user = Object.fromEntries(fd.entries());
    console.log(user)
    dispatch({ type: 'REGISTER', payload: user });
  }

  return (
    <div className="w-100 border h-auto d-flex mx-auto">
      <main className='border border-danger w-100'>

        <form onSubmit={submitHandler}  className="form p-5 mt-5 border w-75 rounded shadow d-block mx-auto">

          <h2 className='text-secondary'>Register</h2>
          
          {/* fullname */}
          <div className="mt-3">
            <label htmlFor="name" className="form-label text-success fst-italic">Name</label>
            <input type="text" className="form-control" id="name" name='name' />
          </div>
          
          {/* Email */}
          <div className="mt-3">
            <label htmlFor="email" className='form-label text-success fst-italic'>Email</label>
            <input type="email" className="form-control" id="email" name='email' />
          </div>

          {/* Phone Number */}
          <div className="mt-3">
            <label htmlFor="phone" className="form-label text-success fst-italic">Phone</label>
            <input type="text" className="form-control" id="phone" name='phone' />
          </div>
          
          {/* password */}
          <div className="mt-3">
            <label htmlFor="password" className="form-label text-success fst-italic">Password</label>
            <input type="password" className="form-control" id="password" name='password' />
          </div>


        {/* submit button */}
          <button type="submit" className="btn btn-secondary text-light my-5 w-50 d-block ">Register</button>
          
          <input type="checkbox" name="rememberme" id="rememberme" /> 
          <label htmlFor="rememberme" className='form-label'> Remember Me! </label>

          <p className='small fst-italic text-muted'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus consequatur fugit, eum accusantium laborum dolor ipsum ea quas earum quia assumenda nemo excepturi natus at maxime quo, necessitatibus in. Quisquam!</p>
        </form>

      </main>
    </div>
  )
}

export default Register