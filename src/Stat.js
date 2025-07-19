function Stat({ items }) {
  if (items.length == 0) {
    return <p className="stats">Please add items to your list</p>;
  }

  let numItems = items.length;
  let numPackedItems = items.filter((item) => item.packed).length;
  let percentage = Math.round((numPackedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {numPackedItems === numItems
          ? "All set !! Ready to go 🚀"
          : `  You have ${numItems} items in the list, and you have already packed
          ${numPackedItems} - (${percentage}%)`}
      </em>
    </footer>
  );
}
export default Stat;
