import React, { Component } from 'react'
import PartnerShort from './components/PartnerShort'
import PartnerLong from './components/PartnerLong'
import { connect } from "react-redux";
import { fetchPartnerAccepted, fetchPartnerWaiting } from "./../actions/partnerAction";

class Partners extends Component {
    
    componentWillMount(){
        this.props.fetchPartnerAccepted(this.props.town._id);
        this.props.fetchPartnerWaiting(this.props.town._id);
    }

    renderWaitingPartners(){
        return (
            <div className="d-flex flex-row flex-wrap justify-content-between p-2">
                {this.props.partnersWaiting.map((item, index) => 
                    (item = <PartnerShort data={item} />)
                )}
            </div>
        )
    }
    
    renderAcceptedPartners(){
        return (
            <div className="d-flex flex-row flex-wrap justify-content-between p-2">
                {this.props.partnersAccepted.map((item, index) => 
                    (item = <PartnerLong data={item} />)
                )}
            </div>
        )
    }
    
    render() {
        return (
            <div className="row w-100">
                <div className="w-75 p-3 event-demande">
                    <h4>Partenariats :</h4>
                    {this.renderAcceptedPartners()}
                </div>
                <div className="w-25 p-3">
                    <h4>Demandes de partenariat:</h4>
                    {this.renderWaitingPartners()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    partnersAccepted: state.partner.partnersAccepted,
    partnersWaiting: state.partner.partnersWaiting,
    town: state.town.town
});

export default connect(mapStateToProps, { fetchPartnerAccepted, fetchPartnerWaiting })(Partners);