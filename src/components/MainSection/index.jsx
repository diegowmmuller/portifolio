import { CVButton } from '../CVButton';
import styles from './main-section.module.css';
import diegoImg from '../../assets/diego.png';
import { GithubIcon, HtmlIcon, LinkedinIcon } from '../Icons';
import { ContactButton } from '../ContactButton';
import { SocialLink } from '../SocialLink';

export const MainSection = () => {
	return (
		<section className={styles.container}>
			<div className={styles.infoWrapper}>
				<div className={styles.badge}>
					<HtmlIcon color="#a855f7" />
					<p>Desenvolvedor full stack</p>
				</div>
				<h2>
					Transformo ideias em <br /> <span>experiências digitais</span>
				</h2>
				<p>
					Desenvolvedor Full Stack com foco em criar aplicações modernas,
					escaláveis e acessíveis. Apaixonado por tecnologia e por desenvolver
					soluções completas, integrando interfaces intuitivas com back-ends
					robustos e eficientes.
				</p>
				<div className={styles.buttonContainer}>
					<CVButton />
					<ContactButton />
				</div>
				<div className={styles.socialLinks}>
					<SocialLink href="https://github.com/diegowmmuller">
						<GithubIcon />
					</SocialLink>
					<SocialLink href="https://www.linkedin.com/in/diegowmmuller">
						<LinkedinIcon />
					</SocialLink>
				</div>
			</div>
			<div className={styles.imageWrapper}>
				<img className={styles.image} src={diegoImg} alt="" />
			</div>
		</section>
	);
};
