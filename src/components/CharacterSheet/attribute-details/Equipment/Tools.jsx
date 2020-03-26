const Tools = ({ data }) => {
	const { item } = data;
	const { name } = item;
	return <h2>{name}</h2>;
};

export default Tools;
