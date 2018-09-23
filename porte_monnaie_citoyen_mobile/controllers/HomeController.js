import server from './../server-info';

export default class HomeController {
    constructor(view){
        this.view = view;
    }

    getAllMissions(){
        fetch(server.url + "/mission")
        .then(res => res.json())
        .then((res) => {
            res.forEach(element => {
               element.key = element._id; 
            });
            this.view.setState({missions: res});
        });
    }

    goToMission(mission){
        this.view.props.navigation.navigate('Mission', {mission: mission});
    }
}