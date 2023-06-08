import ProductItem from './ProductItem';
import styles from './Products.module.css';

const DUMMY_ITEMS = [
	{
		id: '1',
		price: 7,
		title: 'Red Bull',
		description: 'Благодаря своему высокому качеству, этот товар взбодрит вас на долго.',
	},
	{
		id: '2',
		price: 11,
		title: 'Протеиновый Батончик',
		description: 'Благодаря своему высокому качеству, этот товар насытит вас на долго.',
	},
	{
		id: '3',
		price: 9,
		title: 'Витамин С',
		description:
			'Благодаря своему высокому качеству, этот товар восполнит нехватку витамина С.',
	},
];

const Products = () => {
	return (
		<section className={styles.products}>
			<h2>В нашем магазине товары самого высокого качества</h2>
			<ul>
				{DUMMY_ITEMS.map((item) => (
					<ProductItem
						key={item.id}
						title={item.title}
						price={item.price}
						description={item.description}
						id={item.id}
					/>
				))}
			</ul>
		</section>
	);
};

export default Products;
