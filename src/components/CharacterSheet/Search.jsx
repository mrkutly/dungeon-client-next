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
		const selected = data.find((d) => d.name === query);
		if (!selected) return;
		const controller = new AbortController();
		dispatch(update({ type, characterId, data: selected }, controller));
	};
	console.log(data);

	return (
		<SearchSyles>
			<div className="search-controls">
				<input
					type="text"
					aria-label="search"
					placeholder="Search"
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
				{
					data.slice(0, 7).map((d) => (
						<option
							key={d._id}
							value={d.name}
						>{d.name}
						</option>
					))
				}
			</datalist>
			<div className="message">
				{data.length === 0 && query?.length > 0 ? 'No Results 🙁' : null}
				{
					loading ? 'loading...' : error
				}
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
