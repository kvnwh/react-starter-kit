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

  findByMonth: (expenseTime, done) => {
    const collection = db.get().collection('receipt');
    const givenExpensePeriod = new Date(expenseTime);
    const month = givenExpensePeriod.getUTCMonth();
    const year = givenExpensePeriod.getUTCFullYear();
    collection.find({
      expense_date: {
        $gte: new Date(year, month, 1),
        $lt: new Date(year, month + 1, 0),
      },
    }).sort({ expense_date: -1 }).toArray((err, docs) => {
      done(err, docs);
    });
  },
};

