const AttributesSelect = ({ attributes, handleChange, formData }) => (
	<fieldset id="attributes-fieldset">
		<legend>Attributes</legend>
		{attributes.map((attr) => (
			<label htmlFor={attr} key={attr}>
				{attr[0].toUpperCase() + attr.slice(1)}
				<input
					type="number"
					id={attr}
					name={attr}
					value={formData[attr]}
					onChange={handleChange}
				/>
			</label>
		))}
	</fieldset>
);

export default AttributesSelect;
