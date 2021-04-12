import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nayoks = ["Jashim" , "Shakib Khan" , "Aananta Jalil", "Arefin Shuvo"];
  const numbers = [40, 30, 15, 20];
  
  const players = [
    {name: "Shakib" , role: "Alrounder"},
    {name: "Tamim" , role: "Batsman"},
    {name: "Mustafiz" , role: "Fast Bowler"},
    {name: "Mushfiq" , role: "wk and Batsman"}
  ]


  const userStyle = {
    border: "2px solid purple",
    margin: "3px",
    padding: "5px",
    borderRadius : "15px",
    maxWidth : "300px"
  }

    const [users, setUsers] = useState([])
    useEffect (()=>{
      fetch("https://jsonplaceholder.typicode.com/users")
      .then (res => res.json())
      .then (data => setUsers(data))
    },[])
  
  return (
    <div className="App">
      <Nayok name={nayoks[0]} number={numbers[0]}></Nayok>
      <Nayok name={nayoks[1]} number={numbers[1]}></Nayok>
      <Nayok name="Aananta Jalil" number="15 "></Nayok>
      <Nayok name="Arefin Shuvo" number="20"></Nayok> 

      <Counter></Counter>

      {
        players.map (pl => <Players name={pl.name} role={pl.role}></Players>)
      }


      {
        users.map( user => 
          // {user.name} {user.email}
          <div>
            <p></p>
            <ul style={userStyle}>
              <li key ="1"><h2>{user.name}</h2></li> 
              <li key ="2"><h3>{user.email}</h3></li>
            </ul>
           
          </div>
           
          // console.log (user.name)
          // console.log (user.email)
          
         )
      }



      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

function Nayok(props){
  // console.log (props);
  const nayokStyle = {
    border: "2px solid purple",
    margin: "3px",
    padding: "5px",
    borderRadius : "15px"
  }
  return (
    <div style={nayokStyle}>
      <h2>I am nayok {props.name}</h2>
      <h4>I have done {props.number} movies </h4>
    </div>
  )
}

function Counter (){
  const [count, setCount] = useState(5);
  const handleClick = () => setCount(count+1)
  return (
    <div>
      <h4>Movie Counter: {count} </h4>
      <button onClick={handleClick}>add movie</button>
      <MovieDisplay movies ={count}></MovieDisplay>
      <MovieDisplay movies ={count+10}></MovieDisplay>
      <MovieDisplay movies ={count-10}></MovieDisplay>
      <MovieDisplay movies ={count+100}></MovieDisplay>
    </div>
  )
}
function MovieDisplay (props){
  return (
  <h4>Movies I have acted: {props.movies}</h4>

  )
}

function Players (props){
  const playerStyle = {
    border: "2px solid grey",
    margin: "12px",
    padding: "5px",
    borderRadius: "15px",
    boxShadow: "2px 2px 10px black"
    
  }
  return (
    <div style={playerStyle}>
      <h3>{props.name}</h3>
      <h5>{props.role}</h5>
    </div>
  )
}
export default App;
