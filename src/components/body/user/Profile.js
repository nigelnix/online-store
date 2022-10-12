import React, {useContext} from 'react'
import {dataContext} from '../../../context/context'

function Profile() {
  const {state} = useContext(dataContext)
  const noUser = <h1>Nobody Logged In!</h1>
  const displayedInfo = <>{state.user?.name && <h1 className="text-primary my-4">{state.user.name}</h1>}
  {state.user?.email && <h3>{state.user.email}</h3>}
  {state.user?.phone && <h3>{state.user.phone}</h3>}</>
  const displayed = state.user.name? displayedInfo : noUser;
  return (

    <div className="container">

      
      {displayed}

    </div>
  )
}

export default Profile