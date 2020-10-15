import { Customer } from './customer';
import { OrderPriority } from './order-priority';

type MandatoryPriority = OrderPriority.Low | OrderPriority.Medium
type UrgentPriority = OrderPriority.High | OrderPriority.VeryHigh


export interface Order {
  id: number;
  orderNumber: string;
  customer: Customer;
  items: string[];
  priority: OrderPriority;
}

export class MandatoryOrder implements Order{
  id: number
  orderNumber: string
  customer: Customer
  items: string[]
  priority: MandatoryPriority

  shipLater() {}

  constructor(order: Omit<MandatoryOrder, 'shipLater'>) {
    this.id = order.id
    this.orderNumber = order.orderNumber
    this.customer = order.customer
    this.items = order.items
    this.priority = order.priority
  }
}

export class UrgentOrder implements Order{
  id: number
  orderNumber: string
  customer: Customer
  items: string[]
  priority: UrgentPriority

  shipNow() {
    console.log('urgentorder')
  }

  constructor(order: Omit<UrgentOrder, 'shipNow'>) {
    this.id = order.id
    this.orderNumber = order.orderNumber
    this.customer = order.customer
    this.items = order.items
    this.priority = order.priority
  }
}

export function isUrgent(order: Order): order is UrgentOrder {
  return order.priority === OrderPriority.VeryHigh || order.priority === OrderPriority.High
}


{

}



