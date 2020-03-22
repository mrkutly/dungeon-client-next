import PleaseSignIn from '../../components/PleaseSignIn';
import CharacterPage from '../../components/CharacterPage';
import withRedux from '../../redux/withRedux';

const HomePage = () => (
	<PleaseSignIn>
		<CharacterPage />
	</PleaseSignIn>
);

export default withRedux(HomePage);
