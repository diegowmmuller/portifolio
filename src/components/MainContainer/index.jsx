import styles from './main-container.module.css';

export const MainContainer = ({ children }) => {
	return <div className={styles.container}>{children}</div>;
};
