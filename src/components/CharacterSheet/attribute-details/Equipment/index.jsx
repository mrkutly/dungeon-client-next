import Weapon from './Weapon';
import AdventuringGear from './AdventuringGear';
import Tools from './Tools';
import Armor from './Armor';

const Equipment = ({ data }) => {
	const category = data.item.equipment_category;

	if (category === 'Weapon') return <Weapon data={data} />;
	if (category === 'Armor') return <Armor data={data} />;
	if (category === 'Tools') return <Tools data={data} />;
	if (category === 'Adventuring Gear') return <AdventuringGear data={data} />;

	return null;
};

export default Equipment;
