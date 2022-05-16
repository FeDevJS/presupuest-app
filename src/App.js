import React, { useState, useEffect } from 'react';
import './index.css';
import { Loader } from './components/Loader.js';
import { MainBudgetContainer } from './components/MainBudgetContainer';
import { MainHeaderContainer } from './components/MainHeaderContainer';
export const App = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <>
      {!loaded ? <Loader class="loader" innerText="Loading..." /> : null}
      {
      loaded && 
      <>
      <MainHeaderContainer />
      <MainBudgetContainer />
      </>
      }
    </>
  );
};