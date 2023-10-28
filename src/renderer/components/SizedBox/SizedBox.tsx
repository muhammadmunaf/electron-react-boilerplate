/* eslint-disable react/require-default-props */
import React from 'react';

interface SizedBoxProps {
  width?: number | string;
  height?: number | string;
}

function SizedBox({ width, height }: SizedBoxProps) {
  const boxStyle: React.CSSProperties = {
    width: width || 'auto',
    height: height || 'auto',
  };

  return <div style={boxStyle} />;
}

export default SizedBox;
