import styles from './card.module.css';
export const Card = ({ children }) => {
	return <div className={styles.card}>{children}</div>;
};

Card.Image = ({ src, alt }) => {
	return <img className={styles.image} src={src} alt={alt} />;
};

Card.Wrapper = ({ children }) => {
	return <div className={styles.wrapper}>{children}</div>;
};

Card.Title = ({ children }) => {
	return <h3 className={styles.title}>{children}</h3>;
};

Card.Description = ({ children }) => {
	return <p className={styles.description}>{children}</p>;
};

Card.Technologies = ({ children }) => {
	return <div className={styles.technologies}>{children}</div>;
};

Card.Link = ({ children, href }) => {
	return (
		<a className={styles.link} href={href} target="_blank">
			{children}
		</a>
	);
};
