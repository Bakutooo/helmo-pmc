import server from './../server-info';

export default class EventsController {
    constructor(view){
        this.view = view;
    }

    getAllEvents(){
        fetch(server.url + "/event")
        .then(res => res.json())
        .then((res) => {
            res.forEach(element => {
               element.key = element._id; 
            });
            this.view.setState({events: res});
        });
    }

    goToEvent(event){
        this.view.navigation.navigate('Event', {event: event});
    }
}