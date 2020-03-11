import React, {useState,useEffect} from 'react';
//import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Razzak', 'Uttam', 'Don', 'Sakib','Shubho','Bappi','Saymon']
  const products = [
  {name: 'Photoshop', price: '$90.99'},
  {name: 'Illustrator', price: '$60.99'},
  {name: 'Adobe XD', price: '$259.99'},
  {name: 'Premiere Pro', price: '$399.99'},
  {name: 'Dreamweaver', price: '$159.99'}
]
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(pd => <Price product={pd}></Price>)
        }
        <Price product={products[0]}></Price>
        <Price product={products[1]}></Price>
        <Person tname="ACM ICPC" lname="Sagor"></Person>
        <Person tname="ACM EJudge" lname="Ezaz"></Person>
        <Person tname="ACM Sisimpur" lname="Joton"></Person>
      </header>
    </div>
  );
}
function Person(props){
  return (
    <div style={{border: '2px solid yellow',marginTop: '20px', width: '90%'}}>
      <h2>Team Name: {props.tname}</h2>
      <p>Leader: {props.lname}</p>
    </div>
    )
}

function Counter(){
  const [count, setcount] = useState(10)
  //const increaseHandler = () => setcount(count + 1);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setcount(count - 1)}>Decrease</button>
      <button onClick={() => setcount(count + 1)}>Increase</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return (
    <div>
      <h2>Dynamic Users: {users.length}</h2>
      {
        users.map(user => <li>{user.name}</li>)
      }
    </div>
  )
}

function Price(props){
  const stylePrice = {
    width: '300px',
    height: '300px',
    borderRadius: '15px',
    backgroundColor: 'lightSalmon',
    float: 'left',
    color: 'white'
  }
  const {name,price} = props.product
  return (
    <div style = {stylePrice}>
      <p>{name}</p>
      <h2>{price}</h2>
      <button>Buy now</button>
    </div>
  )
}

export default App;
