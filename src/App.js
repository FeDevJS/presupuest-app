import React, { useState, useEffect } from 'react';
import './index.css';
import { Loader } from './components/Loader.js';
import { MainBudgetContainer } from './components/MainBudgetContainer';
import { MainHeaderContainer } from './components/MainHeaderContainer';
import { FieldProvider, RowsProvider } from './components/contexts/FieldProvider';
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
      <FieldProvider>
        <MainHeaderContainer />
        <RowsProvider>
          <MainBudgetContainer />
        </RowsProvider>
      </FieldProvider>
      }
    </>
  );
};