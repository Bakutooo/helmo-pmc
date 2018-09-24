export default class ConfirmParticipationController{
    constructor(view){
        this.view = view;
    }

    testQREvenement(data, success){
        this.view.props.navigation.goBack();
        fetch(data)
            .then(res => res.json())
            .then(res => {
                if(res.access === 'ok') success();
            });
    }

    testQRPayment(data, success){
        fetch(data, {
            method: "POST",
            body: JSON.stringify({sender: this.view.state.sender}),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        })
        .then(res => res.json())
        .then(res => {
            this.view.setState({transaction: res});
            success();
        });

        
    }
}