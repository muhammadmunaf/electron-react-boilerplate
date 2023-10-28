import React, { useEffect } from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';

import './Process.css';
import SizedBox from '../SizedBox/SizedBox';
import Actions from './Actions/Actions';

type ProcessProps = {
  title: string;
  progressDetails: string;
  currentAction: number;
  lastUpdated: Date;
  status: number;
  progress: number;
  paused: boolean;
};

export default function Process(props: ProcessProps) {
  let {
    title,
    progressDetails,
    currentAction,
    lastUpdated, // this is to maintain the order of the list
    status, // idk
    progress,
    paused, // idk
  } = props;

  // write a basic useEffect code
  // it will update the lastUpdated time

  useEffect(() => {
    UpdateLastUpdated();
  }, [currentAction]);

  const UpdateLastUpdated = () => {
    /* this will only be updated incase of:
     * 1. the currentAction is changed
     * 2. the status is changed
     */

    lastUpdated = new Date();
  };

  return (
    <div className="processItemContainer">
      <p className="capsTitle" style={{ margin: 0 }}>
        {title}
      </p>
      <div className="processItem">
        <p className="progressDetails">{progressDetails}</p>
        <Actions
          currentAction={currentAction}
          onClick={() => {
            console.log('Hello');
          }}
        />
      </div>
      <SizedBox height="8px" />
      <ProgressBar percentage={progress} />
      <ProgressBar percentage={Math.floor(Math.random() * 100) + 1} />
    </div>
  );
}
