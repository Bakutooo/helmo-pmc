import server from './../server-info';

export default class MissionController {
    constructor(view){
        this.view = view;
    }

    getMission(){
        this.view.setState({
            mission: this.view.props.navigation.getParam('mission')
        });
    }
}