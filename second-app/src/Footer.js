import React from 'react'

const Footer = () => {
  const date= new Date()
  const year=date.getFullYear()
  return (
    <footer className='Footer'>

      <p className='footertxt'>copyright&copy;{year}</p>


        
    </footer>
  )
}

export default Footer