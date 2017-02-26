/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Layout from '../../components/Layout';
// import ReceiptsList from '../../components/ReceiptsList';
import Calendar from '../../components/ReceiptsCalendar';

export default {

  path: '/receiptCenter',

  async action() {
    return {
      title: 'Report List',
      chunk: 'about',
      component: <MuiThemeProvider>
        <Layout>
          <Calendar />
        </Layout>
      </MuiThemeProvider>,
    };
  },

};
