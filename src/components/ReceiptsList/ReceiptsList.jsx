import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './r.css';

class ReceiptsList extends React.Component {
  static propTypes = {
    receipts: PropTypes.array.isRequired,
  };

  render() {
    const { receipts } = this.props;
    const x = receipts.map(re => <tr>
      <td>{re.store}</td>
      <td>{re.amount}</td>
      <td>{re.expense_date}</td>
      <td>{re.cat}</td>
    </tr>);
    return (
      <div >
        <table>
          <thead>
            <tr>
              <th>store</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {x}
          </tbody>
        </table>
      </div>
    );
  }
}

export default withStyles(s)(ReceiptsList);
