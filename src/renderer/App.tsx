import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Search from './components/Search/Search';
import Menu from './components/Menu/Menu';
import Process from './components/Process/Process';
import Actions from './components/Process/Actions/Actions';

function InitiateProcess() {
  // it will receive the search from the Search component
  // It will send a request to the GPT API and get the instructions
  // Once the instructions are there
}

function InitiateDirectoryAction(prompt: string) {
  // receive prompt
  // ** a process card is generated **
  // send prompt to GPT for breakdown
  // GPT will return a JSON object
  // JSON object will be used to fetch required data
  // that data will be sent to the exectionFunctions
  // that will execute the directory_manager function
  // if the location is not valid, it will send back a request
  // we will show directory selection button
  // ** process card will change text and show button **
  // we will again call that function and send the updated directory as well
  // ** process card will continue with the process **
  // then the action will be performed
  // will result in either a success or give an error
  // ** process card will display the message accordingly **
}

function Hello() {
  return (
    <div id="mainWidget">
      <Search />
      {/* <Process
        title="Downloading Immutus"
        progressDetails="Downloading 1.2 GB of 2.3 GB..."
      /> */}
      {/* <Menu /> */}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
