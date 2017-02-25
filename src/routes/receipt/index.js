import express from 'express';
import Receipts from '../../data/models/Receipt';

const router = express.Router();

router.get('/all', (req, res) => {
  Receipts.all((err, docs) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ receipts: docs }));
  });
});

router.get('/recent', (req, res) => {
  Receipts.recent((err, docs) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ receipts: docs }));
  });
});

router.get('/byMonth/:expenseTime', (req, res) => {
  Receipts.findByMonth(req.params.expenseTime, (err, docs) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ receipts: docs }));
  });
});


export default router;
