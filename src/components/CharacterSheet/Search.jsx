import { useState } from 'react';
import Router from 'next/router';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import debounce from 'lodash.debounce';
import { update } from '../../redux/actions/characters';
import useSearch from '../../hooks/useSearch';

const Search = ({ type }) => {
	const [query, setQuery] = useState();
	const dispatch = useDispatch();
	const debouncedSetQuery = debounce(setQuery, 300);
	const { data, error, loading } = useSearch(type, query);
	const characterId = Router.query.id;

	const add = () => {
		const controller = new AbortController();
		dispatch(update({ type, characterId, data: data[0] }, controller));
	};

	return (
		<SearchSyles>
			<div className="message">
				{
					loading ? 'loading...' : error
				}
			</div>
			<div className="search-controls">
				<input
					autoComplete="off"
					type="text"
					aria-label="search"
					placeholder={`Search to add ${type}`}
					onChange={(e) => debouncedSetQuery(e.target.value)}
					list={`${type}-list`}
				/>
				<button type="button" onClick={add}>Add</button>
			</div>
			<datalist
				id={`${type}-list`}
				name={`${type}-list`}
				style={{ maxHeight: '10vh' }}
			>
				{data.length === 0 ? <option disabled>No Results</option>
					: <>{data.slice(0, 5).map((d) => <option key={d.index}>{d.name}</option>)}</>}
			</datalist>
		</SearchSyles>
	);
};

const SearchSyles = styled.div`
	.message {
		min-height: 1.2rem;
	}
	input {
		margin-left: 0;
	}
	button {
		padding: var(--one-width);
	}
`;

export default Search;
