export default class EventController {
    constructor(view){
        this.view = view;
    }

    getEvent(){
        this.view.setState({
            event: this.view.props.navigation.getParam('event')
        });
    }
}