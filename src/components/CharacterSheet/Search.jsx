import { useState } from 'react';
import debounce from 'lodash.debounce';
import useSearch from '../../hooks/useSearch';

const Search = ({ type }) => {
	const [query, setQuery] = useState();
	const debouncedSetQuery = debounce(setQuery, 300);
	const { data, error, loading } = useSearch(type, query);
	console.log(data);

	return (
		<div>
			<div style={{ minHeigt: '1.2rem' }}>
				{
					loading ? 'loading...' : error
				}
			</div>

			<input
				style={{ marginLeft: 0 }}
				autoComplete="off"
				type="text"
				aria-label="search"
				placeholder={`Search to add ${type}`}
				onChange={(e) => debouncedSetQuery(e.target.value)}
				list={`${type}-list`}
			/>
			<datalist id={`${type}-list`} name={`${type}-list`}>
				{data.map((d) => <option key={d.index}>{d.name}</option>)}
			</datalist>
		</div>
	);
};

export default Search;
