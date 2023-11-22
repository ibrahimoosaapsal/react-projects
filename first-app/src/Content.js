import React from 'react'
import {  FaTrash } from "react-icons/fa";


const Content = ({item,handleCheckBox,handleDelete}) => {//creating a component which is functional component
  
  
  return (
  <>
      {(item.length)?//1A:this logic will check the list length
      (//if list have any object it will pass 
      <ul>
       {item.map((item) =>//map is like the shortand property of loop 
         <li className='item' key={item.id}>
          <input
          type='checkbox'
          checked={item.checked}
          onChange={() => handleCheckBox(item.id)}
          />
          <label
          onDoubleClick={() => handleCheckBox(item.id)}
          style={(item.checked)? 
            {textDecoration:"line-through"}:null}
          >{item.listname}</label>
          <FaTrash
             role='button'
             tabIndex="0"
             onClick={()=>handleDelete(item.id)}
             ariia-label={`Delete ${item.item}`}
          />
         </li>       
       )}
     </ul>
      )://1B if the condition is false 
      <p>your list is empty </p>//it will print the else statement
          }
    </>
  )
}

export default Content
