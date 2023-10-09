import React from 'react'

const Content = () => {
    function handleNameChange(){
       const names=["grow","make","get","earn"];
       const int=[Math.floor(Math.random()*4)];   
       return names[int];  
    }
  return (
    <main>
      
    <p>lets {handleNameChange()} money</p>

    </main>
  )
}

export default Content
