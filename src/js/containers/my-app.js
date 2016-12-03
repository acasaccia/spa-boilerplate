import React from "react";
import { connect } from "react-redux";
import MyApp from "../components/my-app";
import Actions from "../actions";

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        onClickLogo: function() {
            dispatch({
                type: Actions.TOGGLE_HIGHLIGHT
            });
        }
    };
}

const MyAppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MyApp);

MyAppContainer.contextTypes = {store: React.PropTypes.object};

export default MyAppContainer;