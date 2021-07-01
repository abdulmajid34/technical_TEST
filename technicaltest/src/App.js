// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { getQuotes } from './store/actions/action'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  const [getQuotes, setGetQuotes] = useState('')
  // const dataQuotes = useSelector(state => state.quotes)
  // console.log(quotes, 'INI QUOTES');
  //https://api.kanye.rest/

  const fetchGetQuotes = () => {
    return axios({
      method: 'GET',
      url: 'https://api.kanye.rest/'
    })
    .then(({data}) => {
      console.log(data, 'HASIL data');
      return data
    })
  }

  useEffect(() => {
    fetchGetQuotes().then(res => {
      setGetQuotes(res)
    })
  }, [])

  return (
    <div className="App">
      <h1>Hello world</h1>
      <p>{JSON.stringify(getQuotes, null, 2)}</p>
    </div>
  );
}

export default App;
