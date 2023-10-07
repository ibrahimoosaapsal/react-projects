function App() {
  function handleNameChange(){
  const names=["earn","grow","buy","find","halt","dump",]
  const int=Math.floor(Math.random()*6) 
  return(
    names[int]
  )}
  return (
    <div >
    <h1>lets {handleNameChange()} money</h1>
    
    
    </div>
  );
}

export default App;
