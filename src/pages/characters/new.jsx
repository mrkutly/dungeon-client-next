import PleaseSignIn from '../../components/PleaseSignIn';
import NewCharacter from '../../components/NewCharacter';
import { get } from '../../lib/fetches';

const NewCharPage = ({ races, classes }) => (
	<PleaseSignIn>
		<NewCharacter races={races} classes={classes} />
	</PleaseSignIn>
);

export async function getStaticProps() {
	const raceResult = await get('/races');
	const classResult = await get('/classes');
	const sort = (arr) => arr.sort((a, b) => (a.name < b.name ? -1 : 0));
	return {
		props: {
			races: sort(raceResult.data),
			classes: sort(classResult.data),
		},
	};
}

export default NewCharPage;
