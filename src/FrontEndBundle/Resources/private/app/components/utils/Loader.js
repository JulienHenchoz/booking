import React from "react"
import { Preloader } from 'react-materialize';

class Loader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Preloader className="global" size='big'/>

        );
    }
}

export default Loader;
