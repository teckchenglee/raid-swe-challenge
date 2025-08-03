import { useState } from 'react'
import { type Fruit, initialFruits } from './data/fruits.ts'

interface CartItem extends Fruit {
	quantity: number;
}

function App() {
	const [cart, setCart] = useState<CartItem[]>([]);
	const [fruits, setFruits] = useState<Fruit[]>(initialFruits);

	const addToCart = (fruit: Fruit) => {
		setCart(prevCart => {
			const existingItem = prevCart.find(item => item.id === fruit.id);
			if (existingItem) {
				return prevCart.map(item => item.id === fruit.id ? { ...item, quantity: item.quantity + 1 } : item);
			}
			else {
				return [...prevCart, { ...fruit, quantity: 1 }];
			}
		});
		console.log('Adding to cart', fruit.name);

		const stockItem = fruits.find(item => item.id === fruit.id);
		if (!stockItem || stockItem.stock <= 0) {
			alert(`Sorry, ${fruit.name} is out of stock!`);
			return;
		}
		setFruits((prev) =>
			prev.map(item =>
				item.id === fruit.id ? { ...item, stock: item.stock - 1 }
					: item
			)
		);
	};

	const removeFromCart = (fruitId: number) => {
		setCart(prevCart => {
			return prevCart.map(item => item.id === fruitId ? { ...item, quantity: item.quantity - 1 } : item).filter(item => item.quantity > 0);
		});
		setFruits((prev) =>
			prev.map(item =>
				item.id === fruitId ? { ...item, stock: item.stock + 1 }
					: item
			)
		);
	};

	const getTotal = function () {
		return cart.reduce((total, item) => total + item.price * item.quantity, 0)
	};

	const submitOrder = () => {
		console.log('Order submitted: ', cart);
		alert(`Order submitted! Total: $${getTotal().toFixed(2)}`);
		setCart([]);
	};

	return (
		<>
			<h1>Fruit Store POS</h1>
			<ul>
				{fruits.map(fruit => (
					<li key={fruit.id}>
						{fruit.name} - ${fruit.price.toFixed(2)}{' '}
						(Stock: {fruit.stock}){' '}<button onClick={() => addToCart(fruit)} disabled={fruit.stock === 0}>Add to Cart</button>
					</li>
				))}
			</ul>
			<h2>Cart</h2>
			<ul>
				{cart.map(item => (
					<li key={item.id}>
						{item.name} x {item.quantity} - ${item.price.toFixed(2)} each{' '}
						<button onClick={() => removeFromCart(item.id)}>Remove</button>
					</li>
				))}
			</ul>
			<h3>Total: ${getTotal().toFixed(2)}</h3>
			<button onClick={submitOrder} disabled={cart.length === 0}>Submit</button>
		</>
	);
}

export default App
