import React from "react";
import FixedNavBar from '../menu/FixedNavBar';
import {Icon} from 'react-materialize';

export default ({title, icon, showRemoveBtn, onValidate, onRemove}) => (
    <FixedNavBar title={title} icon={icon}>
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
    </FixedNavBar>
);
