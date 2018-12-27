const LocalStrategy = require('passport-local').Strategy;
const hash = require('password-hash');

/**
 * Mise en place de la stratégie de mot de passe pour citizen
 */
module.exports = function(passport) {
    passport.use('citizen', new LocalStrategy(
        { usernameField : 'email', passReqToCallback : true },
        (req, email, password, done) => {
            console.log("Login citizen");
            console.log("email : " + email + ", password : " + password);
            req.body.Citizen.findOne({mail : email})
            .populate("town")
            .then(citizen => {
                if(hash.verify(password, citizen.password)){
                    console.log("Good pswd");
                    return done(null, {user : citizen, role : "citizen"});
                }
                else{
                    console.log("Wrong pswd");
                    return done(null, false, {error : "Identifiants incorrectes"});
                }
            })
            .catch(error => {
                console.log(error);
                done(null, false, {error : "Une erreur s'est produite"});
            });
        }
    ));

    passport.use('town', new LocalStrategy(
        { usernameField : 'name', passReqToCallback : true },
        (req, name, password, done) => {
            console.log("Login town");
            console.log("name : " + name + ", password : " + password);
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
                console.log(error);
                done(null, false, {error : "Une erreur s'est produite"});
            });
        }
    ));

    passport.use('partner', new LocalStrategy(
        { usernameField : 'name', passReqToCallback : true },
        (req, name, password, done) => {
            console.log("Login partner");
            console.log("name : " + name + ", password : " + password);
            req.body.Partner.findOne({name: req.body.name})
            .then(partner => {
                if(partner !== null && partner.state === "W") {
                    return done(null, false, {error: "Partenariat pas encore validé"});
                }
                else if(partner !== null && hash.verify(password, partner.password)) {
                    return done(null, {user : town, role : "partner"});
                }
                else{
                    return done(null, false, {error : "Identifiants incorrectes"});
                }
            })
            .catch(error => {
                console.log(error);
                done(null, false, {error : "Une erreur s'est produite"});
            });
        }
    ));

    passport.serializeUser((user, done) => {
        console.log('Inside serializeUser callback. User id is save to the session file store here');
        done(null, {id : user.user.id, role : user.role});
    });
    
    passport.deserializeUser((id, done) => {
        done(null, id);
    });
}
