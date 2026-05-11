import styles from './app-layout.module.css';

export const AppLayout = ({ children }) => {
	return <div className={styles.appLayout}>{children}</div>;
};
