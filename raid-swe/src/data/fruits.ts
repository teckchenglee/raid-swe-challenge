export interface Fruit {
  id: number;
  name: string;
  price: number;
  stock: number;
}

export const fruits: Fruit[] = [
  { id: 1, name: 'Apple', price: 1.00, stock: 30 },
  { id: 2, name: 'Orange', price: 1.50, stock: 25 },
  { id: 3, name: 'Banana', price: 2.00, stock: 40 }
];