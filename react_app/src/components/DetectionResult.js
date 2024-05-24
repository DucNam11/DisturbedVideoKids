import React from 'react';

function DetectionResult({ detectResult }) {
  return (
    <div className="DetectionResult">
      <h2>Detection Result</h2>
      <p>{detectResult}</p>
    </div>
  );
}

export default DetectionResult;
