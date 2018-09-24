const express = require('express');
const router = express.Router();
const Request = require('./../models/Request');
const hash = require('password-hash');

/**
 * get all request
 * @route   /request/
 */
router.get('/', (req, res) => {
    Request.find()
        .then(request => res.json(request));
});

/**
 * post a new request
 * @route   /request/
 */
router.post('/', (req, res) => {
    let newRequest = new Request({
        title: req.body.title,
        description: req.body.description,
        type: req.body.type,
        status:"En attente"
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
/**
 * update a request
 * @route   /request/change
 */
router.post('/change',(req, res) => {
    Request.findOne({_id: req.body._id}, (err, doc) => {
        doc.title= req.body.title,
        doc.description= req.body.description,
        doc.type= req.body.type;
        doc.save();
        res.json(doc);
    });
})
/**
 * find request by type
 * @route   /request/requestType
 */
router.get('/requestType/:type',(req, res) => {
    Request.find({type: req.body.type}).select("_id, title")
    .then(result => {
        if(event == null){
            res.json({access: 'nok'});
        }else{
            res.json(event);
        }
    })
    .catch(result => res.json({access: 'nok'}));
})
/**
 * change status of a request
 * @route   /request/changeStatus
 */
router.post('/changeStatus',(req, res) => {
    Request.findOne({_id: req.body._id}, (err, doc) => {
        doc.status= req.body.status;
        doc.save();
        res.json(doc);
    });
})

module.exports = router;

