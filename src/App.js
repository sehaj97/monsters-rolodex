import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);

  const handleChange = (e) => {
    setFilteredMonsters(filterMonsters(e));
    if (e.target.value === "") {
      setFilteredMonsters(monsters);
    }
  };

  useEffect(() => {
    getData();
    console.log("r1");
  }, []);

  function getData() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        setMonsters(users);
        setFilteredMonsters(users);
      });
  }

  function filterMonsters(e) {
    return filteredMonsters.filter((monster) => {
      return monster.name
        .toLocaleLowerCase()
        .includes(e.target.value.toLocaleLowerCase());
    });
  }
  return (
    <div className="App">
      <h1>Monster Rolodex</h1>
      <input
        className="search-box"
        type="search"
        placeholder="search monsters"
        onChange={(e) => {
          handleChange(e);
        }}
      />
      {filteredMonsters.map((monster) => {
        return <h1 key={monster.id}>{monster.name}</h1>;
      })}
    </div>
  );
}

export default App;
