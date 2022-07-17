import './index.css';
import { MainBudgetContainer } from './components/MainBudgetContainer';
import { MainHeaderContainer } from './components/MainHeaderContainer';
import { FieldProvider, RowsProvider } from './components/contexts/FieldProvider';
export const App = () => {
  return (
    <>
      <FieldProvider>
        <MainHeaderContainer />
        <RowsProvider>
          <MainBudgetContainer />
        </RowsProvider>
      </FieldProvider>
    </>
  );
};