import PleaseSignIn from '../components/PleaseSignIn';
import withRedux from '../redux/withRedux';

const HomePage = () => (
	<PleaseSignIn>
		<div>welcome to the homepage</div>
	</PleaseSignIn>
);

export default withRedux(HomePage);
