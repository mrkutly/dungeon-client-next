import Attribute from './Attribute';

const Section = ({ name, data }) => {
	const lowerName = name.toLowerCase();
	return (
		<section id={lowerName}>
			<h2>{name}</h2>
			<ul>
				{data.map((f) => (
					<Attribute key={`${lowerName}-${f.id}`} type={lowerName} value={f} />
				))}
			</ul>
		</section>
	);
};

export default Section;
