export default (arr) => {
	if (arr.length === 1) return arr[0];
	if (arr.length === 2) return `${arr[0]} and ${arr[1]}`;
	const last = arr.pop();
	let joined = arr.join(', ');
	return `${joined}, and ${last}`;
};
