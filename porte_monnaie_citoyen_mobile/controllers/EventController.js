import server from './../server-info';

export default class EventController {
    constructor(view){
        this.view = view;
    }

    getCurrentCitizenEventInProgress(id){
        fetch(server.url + '/citizen/' + id)
        .then(res => res.json())
        .then(res => {
            this.view.setState({citizen: res});
        });
    }

    getEvent(){
        this.view.setState({
            event: this.view.props.navigation.getParam('event')
        });
    }

    participate(id_citizen){
        let data = {
            id: id_citizen,
            event: this.view.state.event
        }

        fetch(server.url + '/citizen/participate', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        })
        .then(res => res.json())
        .then(res => {this.getCurrentCitizenEventInProgress(res._id)});
    }

    complete(id_citizen, id_event, success){
        let data = {
            id: id_citizen,
            event_id: id_event
        }

        this.view.props.navigation.goBack();
        fetch(server.url + '/citizen/complete', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        })
        .then(res => res.json())
        .then(res => {
            success();
        });
    }
}