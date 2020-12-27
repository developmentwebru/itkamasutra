import React from 'react';
import Content from "./Content";
import * as axios from "axios";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/wthAuthRedirect";
import {compose} from "redux";


class ContentContainer extends React.Component{

    componentDidMount() {
        let userId =this.props.match.params.userId;
        if (!userId) {
            userId =2;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {


        return (
            <Content {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status

});
export default compose(
    connect(mapStateToProps,{getUserProfile, getStatus, updateStatus}),
    withRouter,
    //withAuthRedirect
)(ContentContainer);


