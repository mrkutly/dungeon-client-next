import { useState, useRef } from 'react';
import Router from 'next/router';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import debounce from 'lodash.debounce';
import { update } from '../../../redux/actions/characters';
import useSearch from '../../../hooks/useSearch';
import Results from './Results';

const Search = ({ type }) => {
	const searchInputRef = useRef();
	const [query, setQuery] = useState();
	const [active, setActive] = useState(false);
	const dispatch = useDispatch();
	const debouncedSetQuery = debounce(setQuery, 300);
	const { data, error, loading } = useSearch(type, query);
	const characterId = Router.query.id;

	const add = (selected) => {
		if (!selected) return;
		const controller = new AbortController();
		dispatch(update({ type, characterId, data: selected }, controller));
		setActive(false);
	};

	return (
		<SearchSyles>
			<div className="search-controls">
				<input
					ref={searchInputRef}
					type="text"
					aria-label="search"
					placeholder="Search"
					onChange={(e) => debouncedSetQuery(e.target.value)}
					onFocus={() => setActive(true)}
				/>
			</div>
			<div className="message">
				{active && (
					<Results
						inputRef={searchInputRef}
						data={data}
						error={error}
						loading={loading}
						add={add}
						close={() => setActive(false)}
					/>
				)}
			</div>
		</SearchSyles>
	);
};

const SearchSyles = styled.div`
	.message {
		min-height: 1.8rem;
	}
	input {
		margin-left: 0;
	}
	button {
		padding: var(--one-width);
	}
`;

export default Search;
