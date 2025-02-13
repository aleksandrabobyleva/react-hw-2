export default function ShoppingList({ items }) {
  if (items.length === 0) {
    return <p>Список покупок пуст</p>;
  }

  return (
    <div>
      {items.map((item) => (
        <ul>
          <li key={item}>{item}</li>
        </ul>
      ))}
    </div>
  );
}
