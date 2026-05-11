import { ClockIcon, EmailIcon, LocationIcon, UserIcon } from '../Icons';
import styles from './about-section.module.css';

export const AboutSection = () => {
	return (
		<section id="about" className={styles.container}>
			<div className={styles.aboutContent}>
				<div className={styles.iconWrapper}>
					<div className={styles.icon}>
						<UserIcon size={32} color="#6144cc" />
					</div>
					<div>
						<h2>Sobre mim</h2>
					</div>
				</div>
				<div>
					<p className={styles.aboutParagraph}>
						Sou desenvolvedor full stack com experiência na criação de backends
						utilizando Node.js, NestJS e Java, desenvolvendo APIs escaláveis,
						seguras e bem estruturadas. Atualmente também venho aprimorando
						minhas habilidades em frontend, criando interfaces modernas,
						responsivas e focadas na melhor experiência do usuário.
					</p>
				</div>
			</div>

			<div className={styles.contactInfo}>
				<div className={styles.infoItem}>
					<div className={styles.infoIcon}>
						<LocationIcon size={30} color="#6144cc" />
					</div>

					<div className={styles.infoContent}>
						<p className={styles.infoLabel}>Localização</p>
						<p className={styles.infoValue}>Florianópolis, SC</p>
					</div>
				</div>
				<div className={styles.infoItem}>
					<div className={styles.infoIcon}>
						<EmailIcon size={30} color="#6144cc" />
					</div>
					<div className={styles.infoContent}>
						<p className={styles.infoLabel}>E-mail</p>
						<p className={styles.infoValue}>diegomaglia96@gmail.com</p>
					</div>
				</div>
				<div className={styles.infoItem}>
					<div className={styles.infoIcon}>
						<ClockIcon size={30} color="#6144cc" />
					</div>
					<div className={styles.infoContent}>
						<p className={styles.infoLabel}>Disponibilidade</p>
						<p className={styles.infoValue}>Disponível para novos projetos</p>
					</div>
				</div>
			</div>
		</section>
	);
};
