/* eslint consistent-return: "off" */

import { MongoClient } from 'mongodb';

const state = {
  db: null,
};

export default {
  connect: (url, done) => {
    if (state.db) return done();

    MongoClient.connect(url, (err, db) => {
      if (err) return done(err);
      state.db = db;
      done();
    });
  },

  get: () => {
    return state.db;
  },

  close: (done) => {
    if (state.db) {
      state.db.close((err) => {
        state.db = null;
        state.mode = null;
        done(err);
      });
    }
  },
};

