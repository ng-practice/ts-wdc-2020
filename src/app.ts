import { Customer } from './models/customer';
import { Order } from './models/order';
import { OrderList } from './models/order-list';
import { OrderPriority } from './models/order-priority';

const orders: Order[] = new OrderList().items;

orders.push({
  id: 1,
  priority: OrderPriority.Medium,
  customer: new Customer(),
  items: [],
  orderNumber: 'O815',
});
