import server from './../server-info';

export default class HomeController {
    constructor(view){
        this.view = view;
    }

    getAllMissions(){
        return new Promise((resolve, reject) => {
            //fetch(server);
        });
    }


}