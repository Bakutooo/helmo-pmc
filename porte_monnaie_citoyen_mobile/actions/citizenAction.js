import { FETCH_CITIZEN, SHOW_ERROR, ADD_CITIZEN, LOGOUT_CITIZEN, FETCH_PARTICIPATION_CITIZEN, FETCH_ALL_PARTICIPATION_CITIZEN } from "./types";
import server from './../server-info';

export const fetchCitizen = (citizen) => dispatch => {
    fetch(server.url + "/citizen/connection", server.postConfig(citizen))
    .then(res => res.json())
    .then(res => {
        if(res.hasOwnProperty('error')){
            dispatch({
                type: SHOW_ERROR,
                payload: res.error
            })
        }
        else{
            dispatch({
                type: FETCH_CITIZEN,
                payload: res
            })
        }
    })
    .catch(err => console.log(err));
}

export const addCitizen = (citizen) => dispatch => {
    if(citizen.password !== citizen.passwordConfirm) {
        dispatch({
            type: SHOW_ERROR,
            payload: "Les mots de passe ne correspondent pas"
        })
    }

    let tempDate = citizen.birthday.split('/');
    citizen.birthday = new Date(tempDate[1] + "/" + tempDate[0] + "/" + tempDate[2])

    fetch(server.url + "/citizen", server.postConfig(citizen))
    .then(res => res.json())
    .then(res => {
        dispatch({
            type: ADD_CITIZEN,
            payload: "Citoyen ajouté"
        })
    })
    .catch(err => console.log(err));
}

export const logoutCitizen = () => dispatch => {
    dispatch({
        type: LOGOUT_CITIZEN
    });
}

export const fetchAllParticipationsCitizen = (citizen) => dispatch => {
    fetch(server.url + '/participation/citizen/' + citizen)
    .then(res => res.json())
    .then(res => {
        res = res.map(e => ({...e, key: e._id}));
        dispatch({
            type: FETCH_ALL_PARTICIPATION_CITIZEN,
            payload: res
        });
    })
    .catch(err => console.log(err));
}

export const fetchParticipationCitizen = (id) => dispatch => {
    dispatch({
        type: FETCH_PARTICIPATION_CITIZEN,
        payload: id
    });
}