import './App.css' 

import Greetings from './components/Greetings' 
import User from './components/User'

function App() { 
 return ( 
  <div className="card"> 
    <Greetings message="Hello-React!"/> 
    <br/>
    <User message="Shoon Moe Aung"/>
  </div> 
 ) 

} 

export default App 