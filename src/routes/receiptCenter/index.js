/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Layout from '../../components/Layout';
import ReceiptsList from '../../components/ReceiptsList';

export default {

  path: '/receiptCenter',

  async action() {
    // const data = await require.ensure([], require => require('./about.md'), 'about');
    const receipts = await axios.get('/receipts/byMonth/2015-01-01');// await axios.get('/receipts/recent');

    return {
      title: 'Report List',
      chunk: 'about',
      component: <MuiThemeProvider>
        <Layout>
          <ReceiptsList {...receipts.data} />
        </Layout>
      </MuiThemeProvider>,
    };
  },

};
