import styles from './header.module.css';
import logo from '../../assets/Icon.png';

export const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.brand}>
					<img className={styles.logo} src={logo} alt="Logo" />
					<h1 className={styles.name}>
						Diego <span className={styles.lastName}>Maglia</span>
					</h1>
				</div>

				<nav>
					<ul className={styles.navList}>
						<li>
							<a href="#">Inicio</a>
						</li>

						<li>
							<a href="#about">Sobre</a>
						</li>
						<li>
							<a href="#projects">Projetos</a>
						</li>
						<li>
							<a href="#">Habilidades</a>
						</li>
						<li>
							<a href="#">Contato</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};
