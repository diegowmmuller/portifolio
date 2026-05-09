import { EmailIcon } from '../Icons';
import styles from './contact-button.module.css';

export const ContactButton = () => {
	return (
		<a href="mailto:diegomaglia96@gmail.com" className={styles.button}>
			<EmailIcon />
			Entre em contato
		</a>
	);
};
