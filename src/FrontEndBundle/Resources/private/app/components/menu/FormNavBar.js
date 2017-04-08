import React from "react";
import FixedNavBar from '../menu/FixedNavBar';
import {Icon} from 'react-materialize';

export default ({title, icon, showRemoveBtn, onValidate, onRemove}) => (
    <div>
        <FixedNavBar icon={icon}>
            <ul id="action-buttons" className="right">
                {showRemoveBtn &&
                <li>
                    <a className="red waves-effect" href="#" onClick={onRemove}>
                        <Icon>delete</Icon>
                    </a>
                </li>
                }

                <li>
                    <a className="blue waves-effect" href="#" onClick={onValidate}>
                        <Icon>done</Icon>
                    </a>
                </li>
            </ul>
        </FixedNavBar>

        <h1>
            <Icon className="right medium hide-on-small-only">{icon}</Icon>
            <Icon className="right small hide-on-large-only">{icon}</Icon>
            {title}
        </h1>
    </div>
);
