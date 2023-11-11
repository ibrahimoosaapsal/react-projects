import React from 'react'
const Footer = () => {
  const year=new Date()
  return (
    <footer id='foot'>

      <p>copyright &copy; {year.getFullYear()}</p>
      
    </footer>
      
    
  )
}

export default Footer
