import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import axios from 'axios';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import s from './r.css';

class ReceiptsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      receipts: [],
      total: 0,
    };
  }

  componentDidMount() {
    axios.get(`/receipts/byMonth/${this.props.calendar}`).then(
      (res) => {
        this.setState({ receipts: res.data });
        const sum = res.data.receipts.reduce((s, r) => s + r.amount, 0);
        this.setState({ total: sum });
      },
    );
  }

  render() {
    const { receipts } = this.state.receipts;
    const x = receipts === undefined ? null : receipts.map(re =>
      <TableRow key={re._id}>
        <TableRowColumn>{re.store}</TableRowColumn>
        <TableRowColumn>{re.amount}</TableRowColumn>
        <TableRowColumn>{new Date(re.expense_date).toDateString()}</TableRowColumn>
        <TableRowColumn>{re.cat}</TableRowColumn>
      </TableRow>);

    return (
      <Table selectable={false}>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn colSpan="4" style={{ textAlign: 'center' }}>
                Total: ${this.state.total}
            </TableHeaderColumn>
          </TableRow>
          <TableRow>
            <TableHeaderColumn>store</TableHeaderColumn>
            <TableHeaderColumn>Amount</TableHeaderColumn>
            <TableHeaderColumn>Date</TableHeaderColumn>
            <TableHeaderColumn>Category</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {x}
        </TableBody>
      </Table>
    );
  }
}

export default withStyles(s)(ReceiptsList);
