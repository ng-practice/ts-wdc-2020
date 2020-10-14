import { Customer } from './customer';
import { OrderPriority } from './order-priority';

export interface Order {
  id: number;
  orderNumber: string;
  customer: Customer;
  items: string[];
  priority: OrderPriority;
}
