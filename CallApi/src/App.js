import './App.css';
import SearchHeader from './SearchHeader';
import searchImages from './api'
import { useState } from 'react';
import ImageList from './components/ImageList';

function App() {

  const [result, setResult] = useState([]);

  const handleSubmit= async (x)=>{
    const result= await searchImages(x);
    setResult(result);
  }
 
  return (
    <div className="App">
      <SearchHeader search={handleSubmit}/>
      <ImageList imagePlaceHolder={result}/>

    </div>
  );
}

export default App;
