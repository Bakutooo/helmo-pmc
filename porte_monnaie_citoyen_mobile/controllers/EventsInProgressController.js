import server from './../server-info';

export default class EventsInProgressController {
    constructor(view){
        this.view = view;
    }

    getEvents(id){
        fetch(server.url + '/citizen/' + id)
        .then(res => res.json())
        .then(res => {
            res.events_inprogress.forEach(element => {
                element.key = element._id
            });
            
            this.view.setState({events: res.events_inprogress});
        });
    }

    goToEvent(event){
        this.view.props.navigation.navigate('EventInProgress', {event: event});
    }
}