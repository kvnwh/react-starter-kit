import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { Months } from './Data';
import ReceiptsList from '../ReceiptsList';

class ReceiptsCalendar extends React.Component {
  constructor() {
    super();

    this.state = {
      currentYear: new Date().getUTCFullYear(),
    };
  }

  render() {
    const data = [];
    let i = 0;
    for (; i < 12; i++) {
      const calendar = `${this.state.currentYear - 1}-${i + 1}-1`;
      data.push(
        <Card key={calendar}>
          <CardHeader title={Months[i]}>
            <CardText expandable>
              <ReceiptsList calendar={calendar} />
            </CardText>
          </CardHeader>
        </Card>);
    }
    return (
      <div>
        {data}
      </div>

    );
  }
}


export default ReceiptsCalendar;
