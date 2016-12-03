import React from "react";

class MyApp extends React.Component {

    render() {
        return <div className="container-fluid">
            <div onClick={() => this.props.onClickLogo()} id="logo"></div>
            <div className={this.props.highlight ? "highlight" : ""}>Click me!</div>
        </div>;
    }

}

MyApp.propTypes = {
    onClickLogo: React.PropTypes.func.isRequired,
    highlight: React.PropTypes.bool.isRequired
};

export default MyApp;