import React from "react";
import {Col} from 'react-materialize';
import CountUp from 'react-countup';

export default ({colSize, colorClassName, value, label, suffix}) => (
    <Col s={colSize ? colSize : 4} className="highlight-box">
        <span className={"number " + (colorClassName ? colorClassName : '')}>
            <CountUp duration={4} start={0} end={value}/>{suffix}
        </span>
        <span className="label">{label}</span>
    </Col>
);
