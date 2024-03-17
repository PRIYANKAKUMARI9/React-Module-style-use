import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import btnModule from "./Button.module.css"

function App() {
  

  const[status,setstatus]=useState(false)
  return (
    <div className="App">
      
      <button className={btnModule.errorr}>Error</button>
      <button className={btnModule.warning}>warning</button>

      <button className={btnModule.para}>onClickit !!</button>
      <button onClick={()=>setstatus(!status)}>
        {(status) ? 'hide' : 'show'}
      </button>
      {
        (status)?
        <h1 className='para'>welcome to WS</h1>
       :
       ""
      }

      

    </div>
  );
}

export default App;
