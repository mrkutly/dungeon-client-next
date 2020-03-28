import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setField, submitForm, loadOptions } from '../redux/actions/new';

const useNewCharacter = () => {
	const dispatch = useDispatch();
	const { races, classes } = useSelector((s) => s.new.options);
	const submitted = useSelector((s) => s.new.submitted);
	const loading = useSelector((s) => s.new.loading);
	const error = useSelector((s) => s.new.error);
	const formData = useSelector((s) => s.new.character);

	useEffect(() => {
		let controllerOne;
		let controllerTwo;

		if (!races.length || !classes.length) {
			controllerOne = new AbortController();
			controllerTwo	= new AbortController();
			dispatch(loadOptions(controllerOne, controllerTwo));
		}

		return () => {
			controllerOne.abort();
			controllerTwo.abort();
		};
	}, []);

	const numericFields = Object.keys(formData).filter((k) => typeof formData[k] === 'number');

	const handleChange = ({ target }) => {
		let field = target.name === 'class' ? 'characterClass' : target.name;
		let { value } = target;

		if (field === 'characterClass') {
			value = classes.find((c) => c._id === target.value);
		}

		if (field === 'race') {
			value = races.find((r) => r._id === target.value);
		}

		dispatch(setField({ field, value }));
	};

	const handleNumericChange = ({ target }) => {
		let value = Number(target.value);
		if (value > 20) value = 20;
		if (value < 1) value = 1;
		dispatch(setField({ value, field: target.name }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const controller = new AbortController();
		await dispatch(submitForm(controller));
	};

	return {
		handleChange,
		handleNumericChange,
		formData,
		handleSubmit,
		submitted,
		numericFields,
		loading,
		error,
		races,
		classes,
	};
};

export default useNewCharacter;
