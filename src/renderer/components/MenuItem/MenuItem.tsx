import React from 'react';

import './MenuItem.css';
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';

type MenuItemProps = {
  icon: string;
  label: string;
  // eslint-disable-next-line react/require-default-props
  featherIcon?: boolean;
  // eslint-disable-next-line react/require-default-props
  sideCall?: string;
};

function MenuItem(props: MenuItemProps) {
  const { icon, label, featherIcon, sideCall } = props;

  return (
    <div className="menuItem">
      {featherIcon ? (
        <FeatherIcon icon={icon} size="18" strokeWidth="2" />
      ) : (
        <img src={icon} className="menuItemIcon" alt="" />
      )}

      <p className="menuItemLabel">{label}</p>
      <p className="menuItemSideCall">{sideCall}</p>
    </div>
  );
}

export default MenuItem;
