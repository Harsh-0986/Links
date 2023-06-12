import * as bsIcons from "react-icons/bs";
import * as giIcons from 'react-icons/gi'

const DynamicIcon = ({ icon, className }) => {
  const getIcon = (iconName) => {
    const iconsMap = new Map();
    iconsMap.set("Bs", bsIcons);
    iconsMap.set("Gi", giIcons);

    return iconsMap.get(iconName.substring(0, 2));
  };

  const icons = getIcon(icon);
  const TheIcon = icons[icon];

  return <TheIcon className={className} />;
};

export default DynamicIcon;
