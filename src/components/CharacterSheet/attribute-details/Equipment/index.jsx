import Weapon from './Weapon';
import AdventuringGear from './AdventuringGear';

const Equipment = ({ data }) => {
	const category = data.item.equipment_category;

	if (category === 'Weapon') return <Weapon data={data} />;
	if (category === 'Adventuring Gear') return <AdventuringGear data={data} />;
	return null;
};

export default Equipment;
