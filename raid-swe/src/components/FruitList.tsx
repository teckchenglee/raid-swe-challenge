import { Fruit, fruits } from '../data/fruits';

interface FruitListProps {
	fruits: Fruit[];
	onAddToCart: (fruit: Fruit) => void;
}

export function FruitList({fruits, onAddToCart} :FruitListProps) {
	return (
		<div>
			<h2>Available Fruits</h2>
			<ul>
				{fruits.map((fruit) => (
					<li key={fruit.id}>
						{fruit.name} - ${fruit.price.toFixed(2)} (Stock: {fruit.stock}){" "}
						<button onClick={() => onAddToCart(fruit)} disabled={fruit.stock <= 0}>
							Add to Cart</button>
					</li>
				))}
			</ul>
		</div>
	);
}