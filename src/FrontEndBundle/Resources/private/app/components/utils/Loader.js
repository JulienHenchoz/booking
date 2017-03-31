import React from "react"
import { Preloader } from 'react-materialize';

class Loader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Preloader size='big'/>
        );
    }
}

export default Loader;
