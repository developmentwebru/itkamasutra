import React from 'react';
import Content from "./Content";
import * as axios from "axios";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/wthAuthRedirect";


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

let AuthRedirectComponent = withAuthRedirect(ContentContainer);

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile

});

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps,{getUserProfile})(WithUrlDataContainerComponent);

