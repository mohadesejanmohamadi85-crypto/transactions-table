import { transactions } from '../data/transactions';
import './TransactionTable.css';
const TransactionTable = () => {
  return (
    <table className="transaction-table" dir="rtl">
      <thead className="table-head">
        <tr>
          <th className="table-header">تاریخ</th>
          <th className="table-header">درآمد (تومان)</th>
          <th className="table-header">هزینه (تومان)</th>
          <th className="table-header">شرح</th>
        </tr>
      </thead>
      <tbody className="table-body">
        {transactions.map((item) => (
          <tr key={item.id} className="table-row">
            <td className="table-cell table-date">{item.date}</td>
            <td className="income table-cell">
              {item.type === 'income' ? `${item.amount}+` : ''}
            </td>
            <td className="expense table-cell">
              {item.type === 'expense' ? `${item.amount}-` : ''}
            </td>
            <td className="description-cell">{item.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default TransactionTable;
