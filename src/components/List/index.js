import styles from "./style.module.css";

const List = ({ listItems }) => (
  <ul className={styles.list}>
    {listItems.map((listItem, idx) => (
      <ListItem key={idx} pokemon={listItem} />
    ))}
  </ul>
);

const ListItem = ({ pokemon }) => (
  <li className={styles.listItem}>
    <img src={pokemon.image} alt={pokemon.name} />
    <ul className={styles.listItemInfo}>
      <li className={styles.bold}>{pokemon.name}</li>
      <li>{pokemon.classfication}</li>
      <li>{pokemon.height_m} m</li>
      <li>{pokemon.weight_kg} kg</li>
      <li>{pokemon.hp} HP</li>
    </ul>
  </li>
);

export default List;
