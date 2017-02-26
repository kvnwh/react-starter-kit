import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AutoComplete from 'material-ui/AutoComplete';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import DatePicker from 'material-ui/DatePicker';
import PaymentTypesDropdown from './PaymentTypesDropdown';
import {Months} from './Data';
import ReceiptsList from '../ReceiptsList';

injectTapEventPlugin();
class ReceiptsCalendar extends React.Component {
  constructor() {
    super();
    
    this.state = {
      open: false,
      currentYear: new Date().getUTCFullYear()
    };
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    let months = [];
    let i = 0;
    for(; i<12; i++){
      const calendar = `${this.state.currentYear-1}-${i+1}-1`;
      months.push(
        <Card key={calendar} >

           <CardTitle title={Months[i]} subtitle={`${this.state.currentYear}`} />
          <CardText >
              <RaisedButton label="Add" primary={true} onTouchTap={this.handleOpen}/>
              <ReceiptsList calendar={calendar}/>
            </CardText>
        </Card>)
    }

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];
    
    return (
      <div>
        {months}
        <Dialog
          title="New Receipt"
          actions= {actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
           <AutoComplete
            floatingLabelText="Store"
            filter={AutoComplete.caseInsensitiveFilter}
            dataSource={Months}
          />
          
          <TextField
              hintText="Amount"
            />


          <AutoComplete
            floatingLabelText="Category"
            filter={AutoComplete.caseInsensitiveFilter}
            dataSource={Months}
          />

          <DatePicker hintText="Date Picker" defaultDate={new Date("2015-01-01")}/>


          <TextField
              hintText="Items Count"
            />
           <TextField
              hintText="Notes"
              fullWidth={true}
            />
            <PaymentTypesDropdown />

        </Dialog>
      </div>

    )
  }
}


export default ReceiptsCalendar;