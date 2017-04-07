import React from "react";
import DateTime from 'react-datetime';

export default ({fieldName, value, onChange, error, label}) => (
    <div className="col input-field s12">
        <DateTime
            inputProps={{name: fieldName, id: 'input_' + fieldName}}
            dateFormat="DD.MM.YYYY"
            timeFormat="HH:mm"
            closeOnSelect={true}
            value={value}
            onChange={onChange}
        />
        <label className={value ? 'active' : ''} htmlFor={'input_' + fieldName}
               data-error={error ? error : ''}>
            {label}
        </label>
    </div>
);
