import {Customer, isUrgent, MandatoryOrder, Order, OrderList, OrderPriority, UrgentOrder} from './models';
import {create, createTimestamped} from "./lib/create";
import {Mutator} from "./lib/model-mutator";

const orderList: OrderList = create(OrderList);
let orders: { [p: string]: Order } = orderList.items

const timeStamped = createTimestamped(Customer)


type oderId = Order['id'];
type oderPriority = Order['priority'];

type readOnlyOderProperties = {
  [key in keyof Order]?: Order[key]
}

type stringValue = {
  [key: string]: string
}


type customer = Pick<Order, 'customer'>



const order: UrgentOrder = new UrgentOrder({
  id: 1,
  customer: new Customer(),
  items: ['Milk'],
  orderNumber: 'O-815',
  priority: OrderPriority.High
})

const order2: UrgentOrder = new UrgentOrder(
    {
      id: 2,
      customer: new Customer(),
      items: ['Milk'],
      orderNumber: 'O-815',
      priority: OrderPriority.High
    }
)

const mutator = new Mutator<Order>({getIdentifier: (model) => `${model.id}`})
const customerMutator = new Mutator<Customer>({getIdentifier: (model) => `${model.guid}`})

orders = mutator.addOne(order, orders)
orders = mutator.addOne(order2, orders)



console.log(orders);

type CustomerAddress = Pick<Customer, 'zipCode' | 'street' | 'city'>

const address: CustomerAddress = {
    city: 'Chemnitz',
    street: 'Müllerstraße',
    zipCode: '09111'
}

const addresses: CustomerAddress[] = []

function findAdresses(field: keyof CustomerAddress, query: string): CustomerAddress[] {
    return addresses.filter(address => address[field] === query)
}

const filteredAdresses: CustomerAddress[] = findAdresses('city', 'Chemnitz')


const urgentOrders = Object.values(orders).filter((order ) => {
  // order = order as UrgentOrder
  // console.log(order)
  if(isUrgent(order)) {
    order.shipNow()
    return true
  } else  {
    return false
  }
})

/*
function addOrderWithoutPriority(order: any) {
  orders.push(order)
}

addOrderWithoutPriority(order);
*/
