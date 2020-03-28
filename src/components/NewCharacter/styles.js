import styled from 'styled-components';

export const FormStyles = styled.form`
	fieldset {
		margin: 6rem 0;
	}

	label.large {
		font-size: 2.5rem;
		margin: calc(2 * var(--one-space)) 0;
		font-family: 'Poiret One', serif;

		input {
			display: block;
			margin: 1rem 0;
		}
	}

	input[type="text"] {
		padding: 0.5rem;
	}

	.radio-buttons {
		display: grid;
		grid-template-columns: repeat(3, max-content);
		grid-gap: var(--one-space) calc(var(--one-space) * 3);
	}

	.radio-container {
		cursor: pointer;
		display: inline-block;
		font-size: 1.2rem;
		transition: var(--transition);
	}

	.radio-container:hover {
		background: var(--highlight);
		color: white;
	}

	
	input[type="radio"] {
		position: absolute;
		opacity: 0;
		height: 0;
		width: 0;
	}
	
	label.radio {
		cursor: pointer;
		padding: var(--one-space) calc(2 * var(--one-space));
		height: auto;
		display: block;
		margin: 0;
	}
	
	.radio-container input[type="radio"]:checked ~ label {
		background: var(--highlight-2);
		color: white;
	}
	
	.radio-container input[type="radio"]:focus ~ label {
		background: var(--highlight);
		color: white;
	}
`;
