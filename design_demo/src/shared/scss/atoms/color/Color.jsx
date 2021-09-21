import React from 'react';

const Color = ({ hexCode, width, height }) => {
  return <div style={{ backgroundColor: hexCode, width, height }}></div>;
};

export default Color;
