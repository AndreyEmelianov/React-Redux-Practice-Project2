import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

import styles from './CartItem.module.css';

const CartItem = (props) => {
	const { title, quantity, total, price, id } = props.item;

	const dispatchFunction = useDispatch();

	const addItemHandler = () => {
		dispatchFunction(
			cartActions.addItem({
				id,
				title,
				price,
			})
		);
	};

	const removeItemHandler = () => {
		dispatchFunction(cartActions.removeItem(id));
	};

	return (
		<li className={styles.item}>
			<header>
				<h3>{title}</h3>
				<div className={styles.price}>
					${total.toFixed(2)}{' '}
					<span className={styles['item-price']}>(${price.toFixed(2)} / шт.)</span>
				</div>
			</header>
			<div className={styles.details}>
				<div className={styles.quantity}>
					x <span>{quantity}</span>
				</div>
				<div className={styles.actions}>
					<button onClick={removeItemHandler}>-</button>
					<button onClick={addItemHandler}>+</button>
				</div>
			</div>
		</li>
	);
};

export default CartItem;
