export default function OrderStatus({ orderId, status }) {
  return (
    <div>
      <h4>
        Заказ #{orderId}: {status}
      </h4>
    </div>
  );
}
