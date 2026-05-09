import './App.css';
import { MainContainer } from './components/MainContainer';
import { Header } from './components/Header';
import { MainSection } from './components/MainSection';

function App() {
	return (
		<>
			<Header />
			<MainContainer>
				<MainSection />
			</MainContainer>
		</>
	);
}

export default App;
