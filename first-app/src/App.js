import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";
function App() { 
 const [items,setItems]=useState(JSON.parse(localStorage.getItem("list_names")));
     
    const [newItem,setNewItem]=useState('');

    const addItem = (item) => {
      const id = items.length ? items[items.length - 1].id+1 : 1;
      const addNewItem = {id,checked:false,item}
      const listItem = [...items, addNewItem]
      setItems(listItem)
      localStorage.setItem("list names",JSON.stringify(listItem))
    }

 
    const  handleCheckBox =(id)=>{//creating a function for input field
     const listItem=items.map((item)=> //creating a new array for 2nd useState value, 
     //and this item stand for like looping i variable it will collect the three variable one by one
     item.id===id ? {...item,checked:!item.checked} : item) //this is the logic
     setItems(listItem)// setting the new aaray to 2nd use state variable
     localStorage.setItem("list_names",JSON.stringify(listItem)) //save this new array to local storage
    }
     
    const handleDelete= (id)=>{ //creating a function for delete icon,and this fun  will remove the matching id.
     const newarray=items.filter((item)=>
     item.id!==id)
     setItems(newarray)
     localStorage.setItem("list_names",JSON.stringify(newarray))
   }
     
    const handleSubmit = (e) => {
     e.preventDefault()      
     if(!newItem) return;
     console.log(newItem)
     addItem(newItem)
     setNewItem('')
       
    }
 
   return (
     <div className="App">
          <Header /> 
          <AddItem 
           newItem={newItem}
           setNewItem={setNewItem}
           handleSubmit={handleSubmit}
          
          />
          <Content
           item={items}
           handleCheckBox={handleCheckBox}
           handleDelete={handleDelete}
          
          />
          <Footer
          length={items.length}
          />
     
     </div>
 );
}

export default App;