import React from "react"
import {Button, Icon} from 'react-materialize';

class ConfirmModal extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        $('#confirmModal').modal();
        $('#confirmModal').modal('open');
    }

    render() {
        let title = '';
        if (this.props.title !== undefined && this.props.title) {
            title = <h4>{this.props.title}</h4>
        }
        let content = '';
        if (this.props.content !== undefined && this.props.content) {
            content = <p>{this.props.content}</p>
        }
        return (
            <div id="confirmModal" className="modal">
                <div className="modal-content">
                    {title}
                    {content}
                </div>
                <div className="modal-footer">
                    <a href="#" className="btn modal-action modal-close waves-effect red">Confirmer</a>
                    <a href="#" className="btn modal-action modal-close waves-effect btn-flat">Annuler</a>
                </div>
            </div>
        );
    }
}

export default ConfirmModal;
