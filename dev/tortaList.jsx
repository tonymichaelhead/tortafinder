import React from 'react';
import Torta from './torta.jsx';

class TortaList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('tortalist state: ', this.props.tortaList)
        return (
            <table style={{width:'100%'}}>
                    { this.props.tortaList.map(torta => <Torta torta={torta}/>) }
            </table>
        )
    }
}

export default TortaList;