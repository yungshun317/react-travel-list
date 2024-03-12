const initialItems = [
  {
    id: 1, description: "Passports", quantity: 2, packed: false
  },
  {
    id: 2, description: "Socks", quantity: 12, packed: true
  },
  {
    id: 3, description: "Charger", quantity: 1, packed: false
  }
]

export default function App() {
  return <div className="app">
    <Logo />
    <Form />
    <PackingList />
    <Stats />
  </div>
}

function Logo() {
  return <h1>React Travel List</h1>
}

function Form() {
  return (
      <form className="add-form">
        <h3>What do you need for your trip?</h3>
        <select>
          {Array.from({ length: 20 }, (_, i) => i + 1)
          .map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
          { /*
            Array.from({ length: 20 }, (_, i) => i + 1)
            (20) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
            */
          }
          { /*
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            */
          }
        </select>
        <input type="text" placeholder="Item..." />
        <button>Add</button>
      </form>
  )
}

function PackingList() {
  return <div className="list">
    <ul>
      {initialItems.map(item => (
          <Item item={item} key={item.id} />
      ))}
    </ul>
  </div>
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? {textDecoration: "line-through"} : {}}>
        {item.quantity} {item.description}
      </span>
      <button>&times;</button>
    </li>
  );
}

function Stats() {
  return <footer className="stats">
    <em>You have X items in your list, and you already packed X (X%).</em>
  </footer>
}
