import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { useState,useEffect } from "react";
import SearchItem from "./searchItem";
import apiRequest from "./apiRequest";
function App() { 
 
    const API_URL="http://localhost:3500/items"; 
    const [items,setItems]=useState([]);   
    const [newItem,setNewItem]=useState('');
    const [search,setsearch]=useState('');
    const [fetchError,setFetchError]=useState(null);
    const [isLoading,setIsLoading]=useState(true)

    useEffect(() => { 
      const fetchItems =async () => {
        try {
           const response = await fetch(API_URL);
           if(!response.ok) throw Error("data not recieved")
           const listItem = await response.json();
           setItems(listItem)
           setFetchError(null)

        }catch(err){
          setFetchError(err.message)
        }finally{
          setIsLoading(false)
        }
      }
      setTimeout(()=>{
        (async () => await fetchItems())()
      },2000)
    },[])
          
        

    const addItem = async (item) => {
      const id = items.length ? items[items.length - 1].id+1 : 1;
      const addNewItem = {id,checked:false,listname:item}
      const listItem = [...items, addNewItem]
      setItems(listItem)
     
      const postOptions={
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify(addNewItem)   
             
      }
      const result= await apiRequest(API_URL,postOptions)
      if(result) setFetchError(result)

    }
    const  handleCheckBox =async (id)=>{//creating a function for input field
         const listItem=items.map((item)=> //creating a new array for 2nd useState value, 
         //and this item stand for like looping i variable it will collect the three variable one by one
         item.id===id ? {...item,checked:!item.checked} : item) //this is the logic
         setItems(listItem)// setting the new aaray to 2nd use state variable
    
     const myItem=listItem.filter((item)=>item.id==id)
     
     const patchOptions={
      method:'PATCH',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({checked:myItem[0].checked})   
           
    }
    const requrl=`${API_URL}/${id}`
    const result= await apiRequest(requrl,patchOptions)
    if(result) setFetchError(result)

    
    
    }
    
     
    const handleDelete=async (id)=>{ //creating a function for delete icon,and this fun  will remove the matching id.
     const newarray=items.filter((item)=>
     item.id!==id)
     setItems(newarray)
     
      const deletOPtion={method:'DELETE'}
      const requrl=`${API_URL}/${id}`
      const result= await apiRequest(requrl,deletOPtion)
      if(result) setFetchError(result)
 
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
          <SearchItem 
            search={search}
            setsearch={setsearch}
          
          />
          <main>
            {isLoading && <p> Loading....</p>}
            {fetchError &&<p>{`ERROR:${fetchError}`}</p>}
          
          {!isLoading && !fetchError && <Content
           item={items.filter(item =>(item.listname).toLowerCase().includes(search.toLowerCase()))}
           handleCheckBox={handleCheckBox}
           handleDelete={handleDelete}
          />}
          </main>
          
          <Footer
          length={items.length}
          />
     
     </div>
 );
}

export default App;