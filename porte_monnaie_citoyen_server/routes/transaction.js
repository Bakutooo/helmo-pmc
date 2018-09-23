const express = require('express');
const router = express.Router();
const Transaction = require('./../models/Transaction');


router.get('/', (req, res) => {
    Transaction.find()
        .then(transaction => res.json(transaction));
});


router.post('/', (req, res) => {
    let newTransaction = new Transaction({
        sender: req.body.sender,
        receiver: req.body.receiver,
        amount: req.body.amount,
        date: Date.now()
    });

    newTransaction.save()
        .then(res.json(newTransaction));
});

module.exports = router;
