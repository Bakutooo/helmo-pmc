import server from './../server-info';

export default class EventController {
    constructor(view){
        this.view = view;
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
        .then(res => {
            console.log(res);
        });
    }
}