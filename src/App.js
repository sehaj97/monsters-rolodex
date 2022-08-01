import "./App.css";
import { useEffect, useState } from "react";
import CardList from "./components/CardList/CardList";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  const handleChange = (e) => {
    setFilteredMonsters(filterMonsters(e));
    if (e.target.value === "") {
      setFilteredMonsters(monsters);
    }
  };

  useEffect(() => {
    getData();
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
      <SearchBox handleChange={handleChange} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
