const RaceSelect = ({ races, handleChange, selected }) => (
	<fieldset id="races-fieldset">
		<legend>Race</legend>
		<div className="radio-buttons">
			{races?.map((r) => (
				<div className="radio-container" key={r._id}>
					<input
						type="radio"
						id={r.name}
						name="race"
						value={r._id}
						checked={selected?._id === r._id}
						onChange={handleChange}
					/>
					<label htmlFor={r.name} className="radio">
						{r.name}
					</label>
				</div>
			))}
		</div>
	</fieldset>
);

export default RaceSelect;
