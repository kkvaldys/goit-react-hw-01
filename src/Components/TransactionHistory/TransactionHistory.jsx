import css from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead className={css.transactionName}>
        <tr>
          <th className={css.transactionText}>Type</th>
          <th className={css.transactionText}>Amount</th>
          <th className={css.transactionText}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr className={css.transactionItem} key={item.id}>
            <td className={css.transactionUser}>{item.type}</td>
            <td className={css.transactionUser}>{item.amount}</td>
            <td className={css.transactionUser}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
