/* eslint-disable jsx-a11y/control-has-associated-label */
import Link from 'next/link';
import HomeLayout from '../layouts/HomeLayout';
import RaceSelect from './RaceSelect';
import ClassSelect from './ClassSelect';
import AttributesSelect from './AttributesSelect';
import useNewCharacter from '../../hooks/useNewCharacter';
import { FormStyles } from './styles';

const NewCharacter = () => {
	const {
		races,
		classes,
		error,
		loading,
		handleChange,
		handleSubmit,
		submitted,
		handleNumericChange,
		formData,
		numericFields,
	} = useNewCharacter();

	const dataLoaded = races.length > 0 && classes.length > 0;

	return (
		<HomeLayout>
			<h1>Create a new character</h1>
			{loading && <h1>loading...</h1>}
			{dataLoaded && (
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
					<button type="submit">Create</button>
				</FormStyles>
			)}
			<Link href="/">
				<a>Go Back</a>
			</Link>
			<h2>
				{error}
			</h2>
		</HomeLayout>
	);
};

export default NewCharacter;
