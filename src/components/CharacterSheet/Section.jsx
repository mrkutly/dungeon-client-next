import Attribute from './Attribute';
import Search from './Search';

const Section = ({ type, data }) => {
	const title = type[0].toUpperCase() + type.slice(1);

	return (
		<section id={type}>
			<h2>{title}</h2>
			<Search type={type} />
			<ul>
				{data.map((f) => (
					<Attribute key={`${type}-${f._id}`} type={type} value={f} />
				))}
			</ul>
		</section>
	);
};

export default Section;
