const Err = ({ err }) => (
	<div id="error">
		<h2>Fix these problems pls thx!</h2>
		<ul>
			{err.split('. ').map((e) => <li key={e}>{e}</li>)}
		</ul>
	</div>
);

export default Err;
