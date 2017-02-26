import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import axios from 'axios';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import style from './r.css';

class ReceiptsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      receipts: [],
      total: 0
    };
  }

  componentDidMount() {
    axios.get(`/receipts/byMonth/${this.props.calendar}`).then(
      (res) => {
        this.setState( res.data );
        const sum = res.data.receipts.reduce((s, r) => s + r.amount, 0);
        this.setState({ total: sum });
      },
    );
  }

  static propTypes = {
    calendar: PropTypes.string.isRequired,
  };

  render() {
    const receipts  = this.state.receipts;
    const x = receipts === undefined ? null : receipts.map(re =>
      <TableRow key={re._id} className={ re.amount > 50 ? ( re.amount > 100 ? style.alert : style.warn) :  "" }>
        <TableRowColumn>{re.store}</TableRowColumn>
        <TableRowColumn>{re.amount}</TableRowColumn>
        <TableRowColumn>{new Date(re.expense_date).toDateString()}</TableRowColumn>
        <TableRowColumn>{re.cat}</TableRowColumn>
        <TableRowColumn>{re.item_count}</TableRowColumn>
      </TableRow>
    );

    return (
      <Table selectable={false}>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn colSpan="5" style={{ textAlign: 'center' }}>
                Total: ${this.state.total} | Count: {this.state.receipts.length}
            </TableHeaderColumn>
          </TableRow>
          <TableRow>
            <TableHeaderColumn>store</TableHeaderColumn>
            <TableHeaderColumn>Amount</TableHeaderColumn>
            <TableHeaderColumn>Date</TableHeaderColumn>
            <TableHeaderColumn>Category</TableHeaderColumn>
            <TableHeaderColumn>Items</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {x}
        </TableBody>
      </Table>
    );
  }
}

export default withStyles(style)(ReceiptsList);
