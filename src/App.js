import { Authenticator  } from '@aws-amplify/ui-react'
import React from 'react';
import LandingPage from './pages/landingpage'

import './App.css';

function App() {

  return (
    <Authenticator >
      <LandingPage />
    </Authenticator>
  );
}

export default App;
