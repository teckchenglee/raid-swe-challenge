import { fruits } from '../data/fruits';

export function FruitList() {
	return (
		<div>
			<h2>Available Fruits</h2>
			<ul>
				{fruits.map((fruit) => (
					<li key={fruit.id}>
						{fruit.name} - ${fruit.price.toFixed(2)} (Stock: {fruit.stock})
					</li>
				))}
			</ul>
		</div>
	);
}