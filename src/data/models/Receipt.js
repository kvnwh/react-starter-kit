import db from '../db';

export default {
  all: (done) => {
    const collection = db.get().collection('receipt');

    collection.find().toArray((err, docs) => {
      done(err, docs);
    });
  },

  recent: (done) => {
    const collection = db.get().collection('receipt');

    collection.find().sort({ date: -1 }).limit(100).toArray((err, docs) => {
      done(err, docs);
    });
  },
};
