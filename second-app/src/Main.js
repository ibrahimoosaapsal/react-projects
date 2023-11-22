import React from 'react'

const Main = ({color,hexValue,darkText}) => {
  return (
   
    <section 
      className='section'
      style={{
        backgroundColor: color,
        color: darkText ? "#000" : "#fff"
      }}
      > 
      <p>{color ? color : "empty Value"}</p>
      <p>{hexValue ? hexValue : null}</p>  
    </section> 

        
    )
}

Main.defaultProps = {
  color:"empty Color Value"
}


export default Main