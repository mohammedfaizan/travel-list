/* eslint-disable react/prop-types */
import React, { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 4, packed: true },
];

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  return (
    <div>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away 🌴</h1>;
}
function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { quantity, description, id: Date.now(), packed: false };
    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 🤩 trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
function PackingList({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <span>❌</span>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em> You have X items on your list,and you already packed X(X%)</em>;
    </footer>
  );
}

// import React, { useState } from "react";

// export default function ParentComponent() {
// const [parentCount,sd setParentCount] = useState(0);
// return (
// <div>
// <h2>Parent Componet</h2>
// <p>Parent Count: {parentCount}</p>
// <button onClick={() => setParentCount((prev) => prev + 1)}>
// Update Parent State
// </button>
// <ChildComponent propValue={parentCount} />
// </div>
// );
// }

// function ChildComponent({ propValue }) {
// const [childState, setChildState] = useState(0);

// return (
// <div>
// <h3>Child Component</h3>
// <p>Prop from Parent: {propValue}</p>
// <p>Child Internal State: {childState}</p>

// <button onClick={() => setChildState((prev) => prev + 1)}>
// Update Child Component
// </button>
// </div>
// );
// }
