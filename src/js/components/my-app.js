import React from "react";

class Home extends React.Component {

    render() {
        return <div className="container-fluid">
            <div onClick={() => this.props.onClickLogo()} id="logo"></div>
            <div className={this.props.highlight ? "highlight" : ""}>Click me!</div>
        </div>;
    }

}

export default Home;