import {useEffect} from 'react';
import './App.css';
import Header from './Header'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Login from './Login';  
import './Login.css';
import Home from './Home';
import './Home.css'
import Product from './Product';
import Checkout from './Checkout'; 
import Footer from './Footer';
import Navlinks from './Navlinks';
import {auth} from './Firebase';
import { useStateValue } from './StateProvider';



function App() {

  const [{loginuser},dispatch]= useStateValue()

  useEffect(() => {
   const unsubsribe = auth.onAuthStateChanged((userauth)=>{
      if(userauth){
        dispatch({
          type: 'SET_LOGIN',
          loginuser: userauth
        })
      }else{
        dispatch({
          type: 'SET_LOGIN',
          loginuser:null
        })
      }
    })
    return ()=>{
      unsubsribe();
    }
  })

  console.log("user >>",loginuser)

  
  return (
    <Router>
      <Header />  
      <Navlinks/>
      <Routes>
        <Route path="/Checkout" element={<Checkout/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
      
    </Router>
  );
}

export default App;
