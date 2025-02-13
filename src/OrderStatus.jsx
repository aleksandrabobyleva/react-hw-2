export default function OrderStatus({ orderId, status }) {
  return (
    <div>
      <h3>
        Заказ #{orderId}: {status}
      </h3>
    </div>
  );
}
