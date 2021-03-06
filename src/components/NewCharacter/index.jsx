/* eslint-disable jsx-a11y/control-has-associated-label */
import Link from 'next/link';
import HomeLayout from '../layouts/HomeLayout';
import Err from '../Err';
import RaceSelect from './RaceSelect';
import ClassSelect from './ClassSelect';
import AttributesSelect from './AttributesSelect';
import useNewCharacter from '../../hooks/useNewCharacter';
import { FormStyles } from './styles';

const NewCharacter = ({ races, classes }) => {
	const {
		error,
		loading,
		handleChange,
		handleSubmit,
		submitted,
		handleNumericChange,
		formData,
		numericFields,
	} = useNewCharacter({ races, classes });

	return (
		<HomeLayout>
			<h1>Create a new character</h1>
			{loading
				? <h1>loading...</h1>
				: (
					<FormStyles method="POST" onSubmit={handleSubmit} aria-busy={submitted} disabled={submitted}>
						<label htmlFor="name" className="large">
							Name
							<input
								type="text"
								name="name"
								id="name"
								vale={formData.name}
								onChange={handleChange}
								disabled={submitted}
							/>
						</label>
						<RaceSelect races={races} handleChange={handleChange} selected={formData.race} />
						<ClassSelect
							classes={classes}
							handleChange={handleChange}
							selected={formData.characterClass}
						/>
						<AttributesSelect
							attributes={numericFields}
							formData={formData}
							handleChange={handleNumericChange}
						/>
						{error && <Err err={error} />}
						<button type="submit">Create</button>
					</FormStyles>
				)}
			<Link href="/">
				<a>Go Back</a>
			</Link>
		</HomeLayout>
	);
};

export default NewCharacter;
