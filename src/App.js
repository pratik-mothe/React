import "./styles.css";
import { useState } from "react";

import Logo from "./Logo";

import Form from "./Form";
import Stat from "./Stat";
import PackingList from "./PackList";

export default function App() {
  const [list, setList] = useState([]);

  function handleAddItem(item) {
    setList([...list, item]);
  }

  function handleDeleletItem(id) {
    setList((list) => list.filter((item) => item.id !== id));
  }

  function handleToggle(id) {
    setList((list) =>
      list.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm("Are you sure ? ");
    if (confirmed) setList([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        list={list}
        onDeleteItem={handleDeleletItem}
        onToggleItem={handleToggle}
        onClearItems={handleClearList}
      />
      <Stat items={list} />
    </div>
  );
}
