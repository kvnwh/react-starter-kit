import express from 'express';
import Receipts from '../../data/models/Receipt';

let router = express.Router();

router.get('/all', function(req, res){
  Receipts.all(function(err, docs){
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ receipts: docs }));
  });
});

router.get('/recent', function(req, res){
  Receipts.recent(function(err, docs){
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ receipts: docs }));
  });
});

export default router;
