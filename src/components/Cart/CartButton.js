import { useDispatch, useSelector } from 'react-redux';
import { mainActions } from '../../store/main-slice';

import styles from './CartButton.module.css';

const CartButton = () => {
	const itemsQuantity = useSelector((state) => state.cart.itemsQuantity);
	const dispatchFunction = useDispatch();

	const cartVisibilityHandler = () => {
		dispatchFunction(mainActions.toggleCartVisibility());
	};

	return (
		<button className={styles.button} onClick={cartVisibilityHandler}>
			<span>Корзина</span>
			<span className={styles.badge}>{itemsQuantity}</span>
		</button>
	);
};

export default CartButton;
