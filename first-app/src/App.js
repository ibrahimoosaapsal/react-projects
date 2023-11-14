import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";
function App() { 
 const [item,setItems]=useState( //creating two variables one is for haolding default value another one is for manupulated array value 
     [//we can creating a array for default value
       {//we can creating three objects for this default array
         id:1,
         checked:true,
         listname:"learn react"
       },
       {
         id:2,
         checked:false,
         listname:"learn python"
       },
       {
         id:3,
         checked:true,
         listname:"learn about ai"
       }
     ]);
     
    const [newItem,setNewItem]=useState('');

 
    const  handleCheckBox =(id)=>{//creating a function for input field
     const newarray=item.map((item)=> //creating a new array for 2nd useState value, 
     //and this item stand for like looping i variable it will collect the three variable one by one
     item.id===id ? {...item,checked:!item.checked} : item) //this is the logic
     setItems(newarray)// setting the new aaray to 2nd use state variable
     localStorage.setItem("list_names",JSON.stringify(newarray)) //save this new array to local storage
    }
     
    const handleDelete= (id)=>{ //creating a function for delete icon,and this fun  will remove the matching id.
     const newarray=item.filter((item)=>
     item.id!==id)
     setItems(newarray)
     localStorage.setItem("list_names",JSON.stringify(newarray))
   }
     
    const handleSubmit = (e) => {
     e.preventDefault()
     console.log("submitted")
       
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
           item={item}
           handleCheckBox={handleCheckBox}
           handleDelete={handleDelete}
          
          />
          <Footer
          length={item.length}
          />
     
     </div>
 );
}

export default App;
