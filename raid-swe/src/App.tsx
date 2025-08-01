import React from 'react';
import { FruitList } from './components/FruitList';
import { fruits as initialFruits, Fruit } from './data/fruits';

interface CartItem {
	fruit: Fruit;
	quantity: number;
}


function App() {
	const [cart, setCart] = React.useState<CartItem[]>([]);
	const [fruits, setFruits] = React.useState<Fruit[]>(initialFruits);

	const addToCart = (fruit: Fruit) => {
		console.log('Adding to cart:', fruit.name);
		
		const stockItem = fruits.find(item => item.id === fruit.id);
		console.log('Stock before adding:', stockItem?.stock);
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

		setCart((prev) => {
			const existing = prev.find(item => item.fruit.id === fruit.id);
			if (existing) {
				return prev.map(item =>
					item.fruit.id === fruit.id
						? { ...item, quantity: item.quantity + 1 }
						: item
				);
			}
			return [...prev, { fruit, quantity: 1 }];
		});
	};

	const removeFromCart = function (fruit: Fruit) {
		setCart((prev) =>
			prev.map(item =>
				item.fruit.id === fruit.id
					? { ...item, quantity: item.quantity - 1 }
					: item
			).filter(item => item.quantity > 0)
		);
		setFruits((prev) =>
			prev.map(item =>
				item.id === fruit.id ? { ...item, stock: item.stock + 1 }
					: item
			)
		);
	};

	const getTotal = function () {
		return cart.reduce((total, item) => total + item.fruit.price * item.quantity, 0);
	};

	const submitOrder = function () {
		console.log('Order submitted:', cart);
		alert(`Order submitted! Total: $${getTotal().toFixed(2)}`);
		setCart([]);
	};
	return (
		<div>
			<h1>Fruit Store POS</h1>
			<FruitList fruits={fruits} onAddToCart={addToCart} />

			<h2>Shopping Cart</h2>
			{
				cart.length === 0 ? (
					<p>Your cart is empty.</p>
				) : (
					<ul>
						{cart.map(({ fruit, quantity }) => (
							<li key={fruit.id}>
								{fruit.name} x {quantity} = ${(fruit.price * quantity).toFixed(2)}
								<button onClick={() => removeFromCart(fruit)} >Remove</button>
							</li>
						))}
					</ul>
				)}
			{cart.length > 0 && (
				<div>
					<p>Total: ${getTotal().toFixed(2)}</p>
					<button onClick={submitOrder}>Submit Order</button>
				</div>
			)
			}
		</div>


	);
}

export default App;
