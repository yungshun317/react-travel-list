import { useState } from "react";

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
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
      e.preventDefault();
      console.log(e);
      // SyntheticBaseEvent {_reactName: 'onSubmit', _targetInst: null, type: 'submit', nativeEvent: SubmitEvent, target: form.add-form, ...}

      if (!description) return;

      const newItem = { description, quantity, packed: false, id: Date.now() };
      console.log(newItem);
      // {description: 'shirts', quantity: 10, packed: false, id: 1712506263662}

      // Reset
      setDescription("");
      setQuantity(1);
  }

  return (
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need for your trip?</h3>
        <select
            value={quantity}
            onChange={e => setQuantity(Number(e.target.value))}
        >
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
        <input
            type="text"
            placeholder="Item..."
            value={description}
            onChange={(e) => {
                console.log(e.target.value);
                /* t
                   te
                   tes
                   test
                */
                setDescription(e.target.value)
            }}
        />
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
