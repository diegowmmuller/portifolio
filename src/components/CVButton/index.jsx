import { DownloadIcon } from '../Icons';
import styles from './cv-button.module.css';

export const CVButton = () => {
	return (
		<a
			className={styles.button}
			href="/curriculo.pdf"
			download="Diego_Maglia_Curriculo.pdf"
		>
			<DownloadIcon />
			Baixar curriculo
		</a>
	);
};
