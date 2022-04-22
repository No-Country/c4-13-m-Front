import React from 'react'
import './navbar.scss'
import user from '../../assets/Usuario.svg'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="user">
        <img src={user} alt={user} />
        <span>Yanet Parola</span>
      </div>
    </div>
  )
}

export default Navbar