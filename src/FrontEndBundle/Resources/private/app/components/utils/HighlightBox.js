import React from "react";
import {Col, Icon} from 'react-materialize';
import CountUp from 'react-countup';

export default ({colSize, className, colorClassName, value, label, suffix, icon}) => (
    <Col s={colSize ? colSize : 4} className="highlight-box">
        <div className={"inner " + (className ? className : '')}>
            {icon &&
            <Icon large className="left hide-on-med-and-down">{icon}</Icon>
            }
            {icon &&
            <Icon medium className="left visible-on-med-only">{icon}</Icon>
            }
            {icon &&
            <Icon small className="left hide-on-med-and-up">{icon}</Icon>
            }
            <span className={"number " + (colorClassName ? colorClassName : '')}>
            <CountUp duration={4} start={0} end={value}/>{suffix}
        </span>
            <span className="label">{label}</span>
        </div>
    </Col>
);
