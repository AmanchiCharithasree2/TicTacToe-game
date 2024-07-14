// src/components/StatusMessage.js
import React from 'react';

const StatusMessage = ({ status }) => {
  return (
    <div className="status-message">
      {status}
    </div>
  );
};

export default StatusMessage;
