import './App.css';
import Header from './Header';
import Main from './Main';
import Input from './Inpet';
import Footer from './Footer';
import { useState } from 'react';

function App() {
  const [color,setColor]=useState('');
  const [hexValue,setHexValue]=useState('');
  const [darkText,setDarkText]=useState(true);
  
  
  
  return (
    <div className="App">
     <Header />
     <Main
      color={color}
      hexValue={hexValue}
      darkText={darkText} 
     />
     <Input
       color={color}
       setColor={setColor}
       setHexValue={setHexValue}
       darkText={darkText}
       setDarkText={setDarkText}
     
     />
     <Footer />
    </div>
  );
}

export default App;
