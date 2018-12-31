const LocalStrategy = require('passport-local').Strategy;
const hash = require('password-hash');

/**
 * Mise en place de la stratégie de mot de passe pour citizen
 */
module.exports = function(passport) {
    passport.use('citizen', new LocalStrategy(
        { usernameField : 'mail', passReqToCallback : true },
        (req, email, password, done) => {
            req.body.Citizen.findOne({mail : email})
            .populate("town")
            .then(citizen => {
                if(hash.verify(password, citizen.password)){
                    return done(null, {user : citizen, role : "citizen"});
                }
                else{
                    return done(null, false, {error : "Identifiants incorrectes"});
                }
            })
            .catch(error => {
                done(null, false, {error : "Une erreur s'est produite"});
            });
        }
    ));

    passport.use('town', new LocalStrategy(
        { usernameField : 'name', passReqToCallback : true },
        (req, name, password, done) => {
            req.body.Town.findOne({name: req.body.name})
            .then(town => {
                if(town !== null && hash.verify(password, town.password)) {
                    return done(null, {user : town, role : "town"});
                }
                else{
                    return done(null, false, {error : "Identifiants incorrectes"});
                }
            })
            .catch(error => {
                done(null, false, {error : "Une erreur s'est produite"});
            });
        }
    ));

    passport.use('partner', new LocalStrategy(
        { usernameField : 'mail', passReqToCallback : true },
        (req, mail, password, done) => {
            req.body.Partner.findOne({mail: req.body.mail})
            .then(partner => {
                if(partner === null) return done(null, false, {error: "Identifiants incorrectes"});
                else if(hash.verify(req.body.password, partner.password)) {
                    
                    if(partner.state === "W") return done(null, false, {error: "Partenariat pas encore validé"});
                    else if(partner.state === "A") return done(null, {user : partner, role : "partner"});
                }
                else return done(null, false, {error : "Identifiants incorrectes"});
            })
            .catch(error => {
                done(null, false, {error : "Une erreur s'est produite"});
            });
        }
    ));

    passport.serializeUser((user, done) => {
        done(null, {id : user.user.id, role : user.role});
    });
    
    passport.deserializeUser((id, done) => {
        done(null, id);
    });
}
