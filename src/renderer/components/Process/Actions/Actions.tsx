import { useState } from 'react';
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';
//const { ipcRenderer } = window.require('electron');

import '../Process.css';

type ActionsProps = {
  currentAction: number;
  onClick: (action: number) => void;
};

export default function Actions(props: ActionsProps) {
  const { currentAction, onClick } = props;

  const [directory, setDirectory] = useState('');

  /* const pickDirectory = async () => {
    ipcRenderer.send('open-directory-dialog');
    ipcRenderer.on('selected-directory', (event, path) => {
      setDirectory(path);
    });
  }; */

  // default state, which is basically showing a CANCEL button
  if (currentAction === 0)
    return (
      <button type="button" className="progressBtn ghost">
        Cancel
      </button>
    );
  else if (currentAction === 1) {
    // show a button to select the directory
    return (
      <button type="button" className="progressBtn primary" onClick={onClick}>
        Select
        <FeatherIcon icon="folder" size={16} />
      </button>
    );
  }

  return <div>Actions</div>;
}
