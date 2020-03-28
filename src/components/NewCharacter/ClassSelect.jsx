const ClassSelect = ({ classes, handleChange, selected }) => (
	<fieldset>
		<legend>Class</legend>
		<div className="radio-buttons">
			{classes.map((c) => (
				<div className="radio-container" key={c._id}>
					<input
						type="radio"
						id={c.name}
						name="class"
						checked={selected?._id === c._id}
						value={c._id}
						onChange={handleChange}
					/>
					<label htmlFor={c.name} className="radio">
						{c.name}
					</label>
				</div>
			))}
		</div>
	</fieldset>
);

export default ClassSelect;
