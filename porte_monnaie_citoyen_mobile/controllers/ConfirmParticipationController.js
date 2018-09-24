export default class ConfirmParticipationController{
    constructor(view){
        this.view = view;
    }

    testQR(data, success){
        this.view.props.navigation.goBack();
        fetch(data)
        .then(res => res.json())
        .then(res => {
            if(res.access === 'ok'){
                success();
            }
        })
    }
}