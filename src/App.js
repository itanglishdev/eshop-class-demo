import './App.css';
import {useContext, useEffect} from 'react'
import { Context } from './components/Context';
import Card from './components/Card';

function App() {

  const {state,dispatch} = useContext(Context)

  useEffect(() => {

    const getData = async () => {
      const response = await fetch('https://fakestoreapi.com/products')

      const data = await response.json()
      console.log(data)

      dispatch({type: 'addProducts', payload: data})
    }
    getData()

  },[])
  console.log('state', state)

  return (
    <div className="App">
      <Card/>
    </div>
  );
}

export default App;
