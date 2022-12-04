import React from 'react'

function Welcome({ First, Last, setShouldLogin, User }) {
  return (
    <div className='welcome-page'>

      <div className='welcome-navbar'>
        <label className='welcome-username'>User Name: {User}</label>
        <button onClick={() => { setShouldLogin(false) }}>Logout</button>
      </div>

      <div className='welcome-user-details'>
        <div className='welcome-fullname'>
          Welcome {First} {Last}
        </div>
        <div className='welcome-userid'>
          your user ID is {User}
        </div>
      </div>

    </div>
  )
}

export default Welcome