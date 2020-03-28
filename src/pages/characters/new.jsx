import PleaseSignIn from '../../components/PleaseSignIn';
import NewCharacter from '../../components/NewCharacter';
import withRedux from '../../redux/withRedux';

const NewCharPage = () => (
	<PleaseSignIn>
		<NewCharacter />
	</PleaseSignIn>
);

export default withRedux(NewCharPage);
