import React from 'react';
import Layout from '../../components/Layout';
import Page from '../../components/Page';

export default {
  path: '/kevin',

  async action() {
    const data = {
      title: 'kevin is awesome',
      html: '<p>Just a test.</p>',
    };

    return {
      title: 'wtf',
      component: <Layout><Page {...data} /></Layout>,
    };
  },
};
