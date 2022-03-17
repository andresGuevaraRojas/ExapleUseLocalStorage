import { useState } from 'react';
import './App.css';
import useLocalStorage from './hooks/useLocalStorage';

function App() {

  const {localStorageData,setLocalStorageItem,getLocalStorageItem} = useLocalStorage();

  const [key,setKey] = useState('');
  const value = getLocalStorageItem(key)?getLocalStorageItem(key):''

  return (
    <div className="App">
      <header className="App-header">        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <code>{JSON.stringify(localStorageData)}</code>       

        <label>
          Key:
          <input type="text" value={key} onChange={(e)=>{setKey(e.target.value)}} name='key'></input>
        </label>
        <label>
          value:
          <input type="text" value={value} name='value' onChange={(e)=>{setLocalStorageItem(key,e.target.value)}}></input>
        </label>
      </header>
    </div>
  );
}

export default App;
