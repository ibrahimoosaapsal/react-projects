import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";
function App() { 
 const [items,setitems]=useState( //creating two variables one is for haolding default value another one is for manupulated array value 
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
 
    const  handleCheckBox =(id)=>{//creating a function for input field
     const newarray=items.map((item)=> //creating a new array for 2nd useState value, 
     //and this item stand for like looping i variable it will collect the three variable one by one
     item.id===id ? {...item,checked:!item.checked} : item) //this is the logic
     setitems(newarray)// setting the new aaray to 2nd use state variable
     localStorage.setItem("list_names",JSON.stringify(newarray)) //save this new array to local storage
    }
     
    const handleDelete= (id)=>{ //creating a function for delete icon,and this fun  will remove the matching id.
     const newarray=items.filter((item)=>
     item.id!==id)
     setitems(newarray)
     localStorage.setItem("list_names",JSON.stringify(newarray))
   }
     
 
   return (
     <div className="App">
          <Header /> 
          <Content
           item={items}
           setitems={setitems}
           handleCheckBox={handleCheckBox}
           handleDelete={setitems}
          
          />
          <Footer />
     
     </div>
 );
}

export default App;
