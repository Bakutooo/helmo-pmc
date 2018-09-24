const express = require('express');
const router = express.Router();
const Transaction = require('./../models/Transaction');
const Citizen = require('./../models/Citizen');


router.get('/', (req, res) => {
    Transaction.find()
        .populate('sender')
        .populate('receiver')
        .then(transaction => res.json(transaction));
});


router.post('/', (req, res) => {
    let citizen = req.body.sender;
    let newTransaction = new Transaction({
        sender: citizen,
        receiver: req.body.receiver,
        amount: req.body.amount,
        date: Date.now()
    });

    newTransaction.save()
        .then(() => {
            Citizen.findOne({_id: citizen._id}, (err, doc) => {
                doc.sold = (doc.sold - newTransaction.amount);
                doc.save();
            });
            res.json(newTransaction);
        });
});

router.post('/:id_receiver/:amount', (req, res) => {
    let newTransaction = new Transaction({
        sender: req.body.sender,
        receiver: req.params.id_receiver,
        amount: req.params.amount,
        date: Date.now()
    });

    newTransaction.save()
        .then(() => {
            Citizen.findById(newTransaction.sender, (err, doc) => {
                doc.sold = (doc.sold - newTransaction.amount);
                doc.save();
            });
            
            Transaction.findById(newTransaction._id)
                    .populate('sender')
                    .populate('receiver')
                    .then(result => res.json(result));
        });
    
});

module.exports = router;
