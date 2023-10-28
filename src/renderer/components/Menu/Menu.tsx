import React, { useState } from 'react';

import './Menu.css';

import MenuItem from '../MenuItem/MenuItem';
// eslint-disable-next-line import/order
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';

export default function Menu() {
  const [showQuickActions, setShowQuickActions] = useState<boolean>(false);

  return (
    <div id="menu">
      <div className="section">
        <h6 className="capsTitle">Upcoming Activities</h6>
        <div className="innerSection">
          <MenuItem
            icon="https://static.vecteezy.com/system/resources/previews/016/716/479/non_2x/zoom-meetings-icon-free-png.png"
            label="Meeting at 04:00 PM with Johnathan"
            sideCall="Browser"
          />
          <MenuItem
            icon="https://cdn.icon-icons.com/icons2/2072/PNG/512/alarm_alert_bell_internet_notice_notification_security_icon_127089.png"
            label="Inform Kowalski about the new UI updates in Immutus"
            sideCall="Swiftly"
          />
        </div>
      </div>
      {showQuickActions ? (
        <div className="section">
          <h6 className="capsTitle">Quick Actions</h6>
          <div className="innerSection">
            <MenuItem icon="check-square" label="Create a task" featherIcon />
            <MenuItem icon="bell" label="Set a reminder" featherIcon />
            <MenuItem icon="calendar" label="Schedule a meeting" featherIcon />
            <MenuItem icon="mail" label="Send an email" featherIcon />
            <MenuItem
              icon="monitor"
              label="Install an application"
              featherIcon
            />
          </div>
        </div>
      ) : (
        <button
          type="button"
          className="showQuickActionsBtn"
          onClick={() => setShowQuickActions(!showQuickActions)}
        >
          <p>Show Quick Actions</p>
          <FeatherIcon icon="chevron-down" size="18" />
        </button>
      )}
    </div>
  );
}
