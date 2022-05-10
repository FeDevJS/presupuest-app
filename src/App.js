import React, { useState, useEffect } from 'react';
import { BudgetSheet } from './components/BudgetSheet';
export const App = () => {
  return (
    <>
      <header className="headers__containers main--header--container">
        <h1 className='headers main--header'>PresupuestApp</h1>
      </header>
      <BudgetSheet />
    </>
  );
}