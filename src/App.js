import { useEffect, useState } from "react";
import "./App.css";

const boxShadow = {
  fontSize: "58px",
  color: "cyan",
};
const makeup = {
  width: "400px",
  height: "480px",
  boxShadow: "10px 10px 20px gray",
  color: "white",
  border: "2px solid red",
  margin: "10px",
  padding: "10px",
  borderRadius: "10px",
};

function App() {
  const actors = [
    { name: "Manna", wife: "Purnima", age: 20, profession: "actor" },
    { name: "Omorsani", wife: "Mowshumi", age: 40 },
    { name: "Joni sins", wife: "Natasha", age: 30 },
    { name: "rocky", wife: "kajol", age: 50 },
  ];

  const friends = [
    "rakib",
    "hero alom",
    "mojid",
    "sofor",
    "sabbir",
    "tutul",
    "borsha",
  ];

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1 style={boxShadow}>Full stack web-Developer</h1>
          <Counter></Counter>
          <RandomUser></RandomUser>
        </div>
        {actors.map((act) => (
          <AllHeros actor={act}></AllHeros>
        ))}

        {friends.map((fb) => (
          <h1>{fb}</h1>
        ))}
      </header>
    </div>
  );
}

function RandomUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h1>Dynamic user Details</h1>
      <ul>
        {users.map((user) => (
          <div>
            <li>{user.name}</li>
            <p>{user.email}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(100);

  return (
    <div>
      <h1>Count:{count} </h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

function AllHeros(props) {
  const { name, wife, profession, age } = props.actor;
  //console.log(props);

  return (
    <div style={makeup}>
      <h2>Name:{name} </h2>
      <h3>Wife: {wife} </h3>
      <h4>profession: {profession} </h4>
      <h5>Age: {age}</h5>
      <p>Lorem ipsum dolor sit amet.</p>
      <button>More Info</button>
    </div>
  );
}

export default App;
