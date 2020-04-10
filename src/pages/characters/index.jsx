import PleaseSignIn from '../../components/PleaseSignIn';
import UserHome from '../../components/UserHome';

const HomePage = () => (
	<PleaseSignIn>
		<UserHome />
	</PleaseSignIn>
);

export default HomePage;
