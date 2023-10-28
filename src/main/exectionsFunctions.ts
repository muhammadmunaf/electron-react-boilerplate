import { app, BrowserWindow, dialog } from 'electron';
import { exec } from 'child_process';

async function runDirectoryManagerScript(
  action: string,
  location: string,
  folderName: string,
  targetLocation?: string,
  targetFolderName?: string
) {
  // Provide the path to your bash script
  let scriptPath = 'D:/DATA/Swiftly/Bash/directory_manager.sh';

  // If location is not provided, open a dialog to select directory
  if (!location) {
    const directory = await dialog.showOpenDialog({
      properties: ['openDirectory'],
    });
    if (!directory.canceled) {
      location = directory.filePaths[0];
    } else {
      console.log('Directory selection was cancelled');
      return;
    }
  }

  // Construct the command to run
  let cmd = `${scriptPath} ${action} ${location} ${folderName} ${
    targetLocation || ''
  } ${targetFolderName || ''}`;

  exec(cmd, (error, stdout, stderr) => {
    if (error) {
      console.warn(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.warn(`Error: ${stderr}`);
      return;
    }
    console.log(`Output: ${stdout}`);
  });
}

// Test run
runDirectoryManagerScript('create_folder', '', 'FolderName');
