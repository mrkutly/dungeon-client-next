import PleaseSignIn from '../components/PleaseSignIn';
import UserHome from '../components/UserHome';
import withRedux from '../redux/withRedux';

const HomePage = () => (
	<PleaseSignIn>
		<UserHome />
	</PleaseSignIn>
);

export default withRedux(HomePage);
