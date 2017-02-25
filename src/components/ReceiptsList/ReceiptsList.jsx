import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import s from './r.css';

class ReceiptsList extends React.Component {
  static propTypes = {
    receipts: PropTypes.array.isRequired,
  };

  render() {
    const { receipts } = this.props;
    const x = receipts === undefined ? null : receipts.map(re =>
      <TableRow>
        <TableRowColumn>{re.store}</TableRowColumn>
        <TableRowColumn>{re.amount}</TableRowColumn>
        <TableRowColumn>{re.expense_date}</TableRowColumn>
        <TableRowColumn>{re.cat}</TableRowColumn>
      </TableRow>);

    return (
      <Table selectable={false}>
        <TableHeader>
          <TableHeaderColumn>store</TableHeaderColumn>
          <TableHeaderColumn>Amount</TableHeaderColumn>
          <TableHeaderColumn>Date</TableHeaderColumn>
          <TableHeaderColumn>Category</TableHeaderColumn>
        </TableHeader>
        <TableBody>
          {x}
        </TableBody>
      </Table>
    );
  }
}

export default withStyles(s)(ReceiptsList);
