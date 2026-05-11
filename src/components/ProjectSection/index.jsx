import { Card } from '../Card';
import { ArrowRightIcon, FolderIcon } from '../Icons';
import styles from './project-section.module.css';
import imgCardEscape from '../../assets/escapeOne.jpeg';
import imgCardStudyDeck from '../../assets/studyDeck.jpeg';

export const ProjectSection = () => {
	return (
		<section className={styles.container}>
			<div className={styles.sectionHeader}>
				<div className={styles.sectionBadge}>
					<FolderIcon size={40} color="#a855f7" />
					<h2>Projetos em destaque</h2>
				</div>

				<a
					className={styles.viewAll}
					href="https://github.com/diegowmmuller"
					target="_blank"
				>
					Ver todos
					<ArrowRightIcon />
				</a>
			</div>
			<div className={styles.cardContainer}>
				<Card>
					<Card.Image src={imgCardEscape} />
					<Card.Wrapper>
						<Card.Title>Escape One</Card.Title>
						<Card.Description>
							Software desenvolvido para gerenciamento de jogos e prestamento de
							contas para uma casa de escape room
						</Card.Description>
						<Card.Technologies>
							<span>React</span>
							<span>Java</span>
							<span>Spring boot</span>
						</Card.Technologies>
						<Card.Link href="https://github.com/diegowmmuller/escapeone_frontend">
							Ver Projeto
						</Card.Link>
					</Card.Wrapper>
				</Card>
				<Card>
					<Card.Image src={imgCardStudyDeck} />
					<Card.Wrapper>
						<Card.Title>Study Deck</Card.Title>
						<Card.Description>
							Software desenvolvido para gerenciamento de estudos estilo trello.
						</Card.Description>
						<Card.Technologies>
							<span>React</span>
							<span>Express</span>
							<span>Better-sqlite</span>
						</Card.Technologies>
						<Card.Link href="https://github.com/diegowmmuller/frontend_studydeck">
							Ver Projeto
						</Card.Link>
					</Card.Wrapper>
				</Card>
			</div>
		</section>
	);
};
