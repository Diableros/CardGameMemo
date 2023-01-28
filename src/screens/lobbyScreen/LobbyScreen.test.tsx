import renderer from 'react-test-renderer';
import Router from 'router/Router';
import LobbyScreen from './LobbyScreen';

it('renders correctly', () => {
	const tree = renderer
		.create(
			<Router>
				<LobbyScreen />
			</Router>
		)
		.toJSON();
	/*eslint no-undef: "off"*/ expect(tree).toMatchSnapshot();
});
