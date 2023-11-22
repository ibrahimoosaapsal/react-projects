import React from 'react'

const Header = () => {
  const appname="First App"
  return (
    <header  className='Header'>
        <p id='appname'>{appname}</p>
    </header>
  )
}

export default Header