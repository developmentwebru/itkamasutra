import React from 'react';
import Content from "./Content";
import * as axios from "axios";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
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

    }

    render() {


        return (
            <Content {...this.props} profile={this.props.profile}/>
        )
    }
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile

});
export default compose(
    connect(mapStateToProps,{getUserProfile}),
    withRouter,
    withAuthRedirect
)(ContentContainer);


