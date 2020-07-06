import React from 'react';

const ResumeSubheader = ({ main, sub, style }) => {
  return (
    <div className="resume-sub-header" style={style}>
      <p>{main}</p>
      <p style={{ fontStyle: 'italic' }}>{sub}</p>
    </div>
  );
};

export default ResumeSubheader;
