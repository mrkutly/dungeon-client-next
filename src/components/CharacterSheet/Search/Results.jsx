import styled from 'styled-components';
import { useEffect, useRef } from 'react';

const Results = ({
	data, error, loading, add, close, inputRef,
}) => {
	const resultBoxRef = useRef();
	const focusRef = useRef();

	useEffect(() => {
		const closeListener = (e) => {
			if (e.key === 'Escape') {
				return close();
			}

			const isResultBox = e.target === resultBoxRef.current;
			const isSearchInput = e.target === inputRef.current;

			if (!e.key && !isResultBox && !isSearchInput) {
				close();
			}
		};

		document.addEventListener('click', closeListener);
		document.addEventListener('keydown', closeListener);

		return () => {
			document.removeEventListener('click', closeListener);
			document.removeEventListener('keydown', closeListener);
		};
	}, []);

	if (loading) return 'loading...';
	if (error) return error;

	return (
		<ResultsStyles ref={resultBoxRef} tabIndex="-1">
			{data.length === 0 && 'No Results 🙁'}
			{data.map((d, idx) => {
				const className = d.class?.name;
				const displayName = className ? `${d.name} (${className})` : d.name;

				return (
					<div
						className="search-result"
						ref={idx === 0 ? focusRef : null}
						key={d._id}
						role="button"
						tabIndex="0"
						onKeyPress={(e) => e.key === 'Enter' && add(d)}
						onClick={() => add(d, displayName)}
					>
						{displayName}
					</div>
				);
			})}
		</ResultsStyles>
	);
};

const ResultsStyles = styled.div`
    padding: 5px 10px;
		border-radius: 5px;
		background: white; 
		z-index: 1;
		border: var(--one-width) solid var(--highlight);
    position: absolute;
		width: calc(var(--one-space) * 20);
		max-height: calc(var(--one-space) * 20);
		overflow: scroll;
		
		div {
			transition: var(--transition);
			cursor: pointer;
			border-bottom: 1px solid var(--accent);
			padding: 5px 0;

			&:hover, &:focus {
				color: var(--accent);
			}

			&:last-of-type {
				border-bottom: none;
			}
		}
`;

export default Results;
