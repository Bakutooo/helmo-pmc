import server from './../server-info';

export default class HomeController {
    constructor(view){
        this.view = view;
    }

    getAllMissions(){
        fetch(server + "/mission")
        .then(res => res.json())
        .then((res) => console.log(res));
    }


}