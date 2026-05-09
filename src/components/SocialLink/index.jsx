import styles from './social-link.module.css';
export const SocialLink = ({ children, href }) => {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className={styles.iconContainer}
		>
			{children}
		</a>
	);
};
