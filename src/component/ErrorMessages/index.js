import React from 'react';

export default ({errors}) => {
  if (errors.message === 'unauthorized') {
    return (
      <ul className="error-messages">
        <li>invalid username or password</li>
      </ul>
    );
  }
};
