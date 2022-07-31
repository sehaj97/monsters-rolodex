function CardList({ monsters }) {
  return monsters.map((monster) => <h1 key={monster.id}>{monster.name}</h1>);
}

export default CardList;
