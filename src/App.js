import React, { useState, useEffect } from 'react';
import './index.css';
import { Bottom } from './components/Bottom.js';
import { Loader } from './components/Loader.js';
import { Top } from './components/Top.js';
export const App = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <>
      {!loaded ? <Loader class="loader" innerText="Loading..." /> : null}
      {loaded && 
      <>
      <header className="headers__containers main--header--container">
        <h1 className='headers main--header'>PresupuestApp</h1>
      </header>
      <div className='main__budget__container'>
        <Top />
        <Bottom />
      </div>
      </>}
    </>
  );
};