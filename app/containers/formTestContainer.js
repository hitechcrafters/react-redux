import React from 'react';
import { withRouter } from 'react-router-dom';

const FormTestContainer = (props) => (
  <div>
    <button onClick={() => props.history.push('/dashboard')}>Back</button>
  </div>
);

export default withRouter(FormTestContainer);
