import React, { useState, useEffect } from 'react';
import Layout from './components/Layout/Layout';
import Candidates from './components/Candidates/Candidates';
import Place from './components/Place/Place';
import Connect from './components/Connect/Connect';
import Setup from './components/Setup/Setup';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout isLoading={isLoading}>
      <Candidates />
      <Place />
      <Connect />
      <Setup />
    </Layout>
  );
};

export default App;