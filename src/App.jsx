import { useState } from "react";
import Greeting from "./components/Greeting";
import ShoppingList from "./ShoppingList";
import OrderStatus from "./OrderStatus";

function App() {
  const items = [
    "Ноутбук",
    "Смартфон",
    "Наушники",
    "Часы",
    "Планшет",
    "Клавиатура",
    "Мышь",
  ];

  const orders = [
    { orderId: 123, status: "в пути" },
    { orderId: 456, status: "доставлен" },
    { orderId: 789, status: "отменён" },
  ];

  return (
    <>
      <div>
        <Greeting name="Mark" />
        <ShoppingList items={items} />
        <hr />


        <ul>
          {orders.map(({ orderId, status }) => (
            <li>
              <OrderStatus key={orderId} orderId={orderId} status={status} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
