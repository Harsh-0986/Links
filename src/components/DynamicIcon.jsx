import * as faIcons from "react-icons/fa6";

const DynamicIcon = ({ icon, className }) => {
  const getIcon = (iconName) => {
    const iconsMap = new Map();
    iconsMap.set("Fa", faIcons);

    return iconsMap.get(iconName.substring(0, 2));
  };

  const icons = getIcon(icon);
  const TheIcon = icons[icon];

  return <TheIcon className={className} />;
};

export default DynamicIcon;
