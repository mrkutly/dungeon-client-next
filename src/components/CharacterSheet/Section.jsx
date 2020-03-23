const Section = ({ name, data }) => (
	<section id={name.toLowerCase()}>
		<h2>{name}</h2>
		<ul>
			{data.map((f) => <li key={`${name.toLowerCase}-${f.id}`}>{f.name}</li>)}
		</ul>
	</section>
);

export default Section;
