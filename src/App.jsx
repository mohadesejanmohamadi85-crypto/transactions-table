import TransactionTable from './components/TransactionTable';
import './App.css';
const App = () => {
  return (
    <div className="app-wrapper">
      <div className="table-container">
        <h1 className="page-title">تراکنش‌ها</h1>
        <TransactionTable />
      </div>
    </div>
  );
};
export default App;
