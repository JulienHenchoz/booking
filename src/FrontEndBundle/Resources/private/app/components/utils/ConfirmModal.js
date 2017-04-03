import React from "react"
import {Button, Icon} from 'react-materialize';
import * as actions from '../../actions/venuesActions';
import {connect} from "react-redux"
import l10n from '../../l10n/localization';

export default class ConfirmModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({
            itemId: null,
            selector: '#confirmModal'
        }, props);
    }

    /**
     * Update the active state, title and content of the component
     * @param nextProps
     */
    componentWillReceiveProps(nextProps) {
        this.setState({
            active: nextProps.active,
            title: nextProps.title,
            content: nextProps.content
        }, function() {
            if (this.state.active) {
                $(this.state.selector).modal({
                    complete: self.onCancel
                });
                $(this.state.selector).modal('open');
            }
            else {
                $(this.state.selector).modal('close');
            }
        });
    }

    onCancel(e) {
        if (typeof(e.preventDefault) === 'function') {
            e.preventDefault();
        }
        this.state.dispatch(this.state.cancelAction());
    }

    onConfirm(e) {
        e.preventDefault();
        this.state.dispatch(this.state.confirmAction(this.props.itemId));
    }

    render() {
        let title = '';
        if (this.state.title !== undefined && this.state.title) {
            title = <h4>{this.state.title}</h4>
        }
        let content = '';
        if (this.state.content !== undefined && this.state.content) {
            content = <p>{this.state.content}</p>
        }
        return (
            <div id={this.state.selector.substr(1, this.state.selector.length - 1)} className="modal">
                <div className="modal-content">
                    {title}
                    {content}
                </div>
                <div className="modal-footer">
                    <a href="#" onClick={this.onConfirm.bind(this)}
                       className="btn modal-action modal-close waves-effect red">{l10n.btn_confirm}</a>
                    <a href="#" onClick={this.onCancel.bind(this)}
                       className="btn modal-action modal-close waves-effect btn-flat">{l10n.btn_cancel}</a>
                </div>
            </div>
        );
    }
}

