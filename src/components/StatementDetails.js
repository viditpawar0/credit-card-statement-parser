import './StatementDetails.css';

export default function StatementDetails({
  accountSummary = {},
  totalCreditLimit,
  availableCreditLimit,
  availableCashLimit,
  dueDate
}) {
  const keys = Object.keys(accountSummary);
  const values = Object.values(accountSummary);

  return (
    <div className="statement-details">
      <h2>📋 Statement Details</h2>

      {/* Account Summary Section */}
      <div className="summary-section">
        <h3>💰 Account Summary</h3>
        <table className="styled-table">
          <thead>
            <tr>
              {keys.map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {values.map((value, index) => (
                <td key={index}>{value || '-'}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Limits Section */}
      <div className="limits-section">
        <h3>🏦 Credit & Cash Limits</h3>
        <table className="styled-table">
          <tbody>
            <tr>
              <td>Total Credit Limit</td>
              <td>{totalCreditLimit || '-'}</td>
            </tr>
            <tr>
              <td>Available Credit Limit</td>
              <td>{availableCreditLimit || '-'}</td>
            </tr>
            <tr>
              <td>Available Cash Limit</td>
              <td>{availableCashLimit || '-'}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Billing Info Section */}
      <div className="billing-section">
        <h3>📅 Billing Information</h3>
        <table className="styled-table">
          <tbody>
            <tr>
              <td>Due Date</td>
              <td>{dueDate || '-'}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}