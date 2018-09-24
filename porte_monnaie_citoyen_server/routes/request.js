const express = require('express');
const router = express.Router();
const Request = require('./../models/Request');
const hash = require('password-hash');


router.get('/', (req, res) => {
    Request.find()
        .then(request => res.json(request));
});


router.post('/', (req, res) => {
    let newRequest = new Request({
        title: req.body.title,
        description: req.body.description,
        price: req.body.title
        });

    newRequest.save()
    .then(newRequest =>{
        if(newRequest == null){
        res.json({error : "La demande n'a pas été créé (1)"});
        }else{
            res.json(newRequest._id);
        }
    }).catch(error => { res.json({error : "La demande n'a pas été créé (2)"})});
});

router.post('/change',(req, res) => {
    Request.findOne({_id: req.body._id}, (err, doc) => {
        doc.title= req.body.title,
        doc.description= req.body.description,
        doc.type= req.body.type
        doc.save();
        res.json(doc);
    });
})

router.get('/change',(req, res) => {
    Request.find({type: req.body.type}).select("_id, title");
})

module.exports = router;

