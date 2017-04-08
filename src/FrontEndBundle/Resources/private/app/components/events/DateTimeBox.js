import React from "react";
import moment from "moment";

export default ({dateTime, className}) => (
    <div className={"datetime-box " + className}>
        <span className="month">{moment(dateTime).format('MMM')}</span>
        <span className="month-day">{moment(dateTime).format('DD')}</span>
        <span className="year">{moment(dateTime).format('YYYY')}</span>
    </div>
);
