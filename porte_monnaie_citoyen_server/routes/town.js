const express = require('express');
const router = express.Router();
const Town = require('./../models/Town');
const hash = require('password-hash');

/**
 * Recupère tous les commune
 * @route   /town/
 */
router.get('/', (req, res) => {
    Town.find()
        .then(town => res.json(town));
});

/**
 * @route   /town/connexion
 */
router.post('/connexion', (req, res) => {
    Town.findOne({name: req.body.name})
    .then(town => {
        if(hash.verify(req.body.password, town.password)){
            console.log(town.name + " vient de se connecter");
            res.json(town);
        } else {
            res.json({erreur: "Identifiant incorrect"});
        }
    });
});

/**
 * Creation d'un town
 * @route   /town/
 */
router.post('/', (req, res) => {
    let newTown = new Town({
        name: req.body.name,
        password: hash.generate(req.body.password),
    });

    newTown.save()
    .then(newTown =>{
        if(newTown == null){
        res.json({error : "La commune n'a pas été créé 1"});
        }else{
            res.json(newTown._id);
        }
    }).catch(error => { res.json({error : "La commune n'a pas été créé 2"})});
});
/**
 * find parteners of one town
 * @route   /town/partners
 */
router.get('/partners', (req, res) => {
    Town.findOne({_id: req.body.id}).select(partners);
});
/**
 * post parteners of town
 * @route   /town/postPartners
 */
router.post('/postPartners',(req, res) => {
    Town.findOne({_id: req.body._id}, (err, doc) => {
        doc.partners = req.body.partners;
        doc.save();
        res.json(doc);
    });
});

/**
 * get events of town
 * @route   /town/events
 */
router.get('/events', (req, res) => {
    Town.findOne({_id: req.body.id}).select(events);
});
/**
 * post events of town
 * @route   /town/postEvents
 */
router.post('/postEvents',(req, res) => {
    Town.findOne({_id: req.body._id}, (err, doc) => {
        doc.events = req.body.events;
        doc.save();
        res.json(doc);
    });
});
module.exports = router;

