import styles from './skill-section.module.css';
import { ContactButton } from '../ContactButton';
import { TerminalIcon } from '../Icons';
import java from '../../assets/java.png';
import js from '../../assets/js.png';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import cpp from '../../assets/c++.png';
import git from '../../assets/git.png';
import react from '../../assets/react.png';
import ts from '../../assets/ts.png';

export const SkillSection = () => {
	return (
		<section className={styles.container}>
			<div className={styles.skillsContainer}>
				<div className={styles.sectionHeader}>
					<TerminalIcon size={40} />
					<h2>Habilidades</h2>
				</div>

				<div className={styles.skillsContent}>
					<div className={styles.skillCard}>
						<img src={java} alt="" />
					</div>
					<div className={styles.skillCard}>
						<img src={js} alt="" />
					</div>
					<div className={styles.skillCard}>
						<img src={html} alt="" />
					</div>
					<div className={styles.skillCard}>
						<img src={css} alt="" />
					</div>
					<div className={styles.skillCard}>
						<img src={cpp} alt="" />
					</div>
					<div className={styles.skillCard}>
						<img src={git} alt="" />
					</div>
					<div className={styles.skillCard}>
						<img src={react} alt="" />
					</div>
					<div className={styles.skillCard}>
						<img src={ts} alt="" />
					</div>
				</div>
			</div>

			<div className={styles.contactCard}>
				<h3 className={styles.contactTitle}>Vamos trabalhar juntos?</h3>

				<p className={styles.contactDescription}>
					Estou aberto a novas oportunidades e projetos
				</p>

				<p className={styles.contactText}>Entre em contato comigo!</p>

				<ContactButton />
			</div>
		</section>
	);
};
