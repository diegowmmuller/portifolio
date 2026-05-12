import styles from './header.module.css';
import logo from '../../assets/Icon.png';
import { useState } from 'react';

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.topBar}>
					<div className={styles.brand}>
						<img className={styles.logo} src={logo} alt="Logo" />
						<h1 className={styles.name}>
							Diego <span className={styles.lastName}>Maglia</span>
						</h1>
					</div>

					<button
						className={styles.menuButton}
						onClick={() => setIsOpen(!isOpen)}
					>
						☰
					</button>
				</div>

				<ul className={`${styles.navList} ${isOpen ? styles.open : ''}`}>
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
						<a href="#skills">Habilidades</a>
					</li>
					<li>
						<a href="https://wa.me/5548999990839">Contato</a>
					</li>
				</ul>
			</div>
		</header>
	);
};
