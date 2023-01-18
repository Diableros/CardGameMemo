import GameScreen from './components/GameScreen';
import Providers from './context/Providers';

const App = () => {
	return (
		<Providers>
			<GameScreen />
		</Providers>
	);
};

export default App;
