import React from 'react';
import './ProgressBar.css';

interface ProgressBarProps {
  percentage: number;
}

function ProgressBar(props: ProgressBarProps) {
  const { percentage } = props;
  const filledWidth = `${percentage}%`;

  return (
    <div className="progress-bar">
      <div
        className="progress-bar-line progress-bar-line-filled"
        style={{ width: filledWidth }}
      />
      <div className="progress-bar-line progress-bar-line-static" />
    </div>
  );
}

export default ProgressBar;
