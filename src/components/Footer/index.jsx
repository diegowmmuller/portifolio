import styles from './footer.module.css';
import logo from '../../assets/Icon.png';
import { ScrollTopButton } from '../ScrollTopButton';
export const Footer = () => {
	return (
		<footer className={styles.container}>
			<div className={styles.content}>
				<img className={styles.logo} src={logo} alt="" />
				<ScrollTopButton />
			</div>
		</footer>
	);
};
