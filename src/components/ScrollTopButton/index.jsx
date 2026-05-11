import { ArrowUpIcon } from '../Icons';
import styles from './scroll-top-button.module.css';

export const ScrollTopButton = () => {
	const handleScrollTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<button className={styles.button} onClick={handleScrollTop}>
			<ArrowUpIcon />
		</button>
	);
};
