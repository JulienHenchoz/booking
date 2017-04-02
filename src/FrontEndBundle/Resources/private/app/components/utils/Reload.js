import React from "react"
import {Button, Icon} from 'react-materialize';

class Reload extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let error = '';
        if (this.props.error !== undefined && this.props.error) {
            error = <p className="error grey-text">{this.props.error}</p>
        }
        return (
            <div className="reload-block valign-wrapper">
                <div className="valign">
                    <a href="#" onClick={this.props.onClick}><Icon className="large grey-text">refresh</Icon></a>
                    {error}
                </div>
            </div>
        );
    }
}

export default Reload;
