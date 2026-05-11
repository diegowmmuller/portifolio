import './App.css';
import { MainContainer } from './components/MainContainer';
import { Header } from './components/Header';
import { MainSection } from './components/MainSection';
import { AppLayout } from './Layout/AppLayout';
import { AboutSection } from './components/AboutSection';
import { ProjectSection } from './components/ProjectSection';
import { SkillSection } from './components/SkillSection';

function App() {
	return (
		<AppLayout>
			<Header />
			<MainContainer>
				<MainSection />
				<AboutSection />
				<ProjectSection />
				<SkillSection />
			</MainContainer>
		</AppLayout>
	);
}

export default App;
