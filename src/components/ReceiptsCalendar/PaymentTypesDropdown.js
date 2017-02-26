import React, { PropTypes } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {PaymentTypes} from './Data';


class PaymentTypesDropdown extends React.Component {
    render() {
        const items = PaymentTypes.map(t => 
        <MenuItem value={t.id} key={t.id} primaryText={t.name} />);
        return (
            <SelectField
                value={this.props.paymentType === undefined ? 0 : this.props.paymentType}
                onChange={this.props.paymentTypeChange}
                maxHeight={200}
            >
            {items}
            </SelectField>
        );
    }
}

export default PaymentTypesDropdown;