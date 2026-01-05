import { useState } from 'react';
import './App.css';
import Result from './result';
const secretNumToFind = Math.floor(Math.random() * 10) + 1


function App() {

  const [ term, setTerm ] = useState("");

  function handleChange(e){
    setTerm(e.target.value)
  }

  return (
      <div className='container'>
        <div className='head'>
          <label htmlFor='term'>Guess a number between 1 to 10</label>
        </div>
        <input
          id='term'
          type='text'
          name='term'
          value={term}
          onChange={handleChange}
        />
        <Result num = {secretNumToFind} currentterm = {term}/>
      </div>
  );
}

export default App;
