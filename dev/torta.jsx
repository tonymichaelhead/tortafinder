import React from 'react';

class Torta extends React.Component{
    constructor(props) {
        super(props);

    }

    render(){
        return (
            <tr>
                <td><img id="torta-pic" src={this.props.torta.image_url} style={{height:"100px"}}/></td>
                <td>{this.props.torta.name}</td>
                <td>{this.props.torta.location.city}</td>
                <td>{this.props.torta.rating}/5</td>
                <td>Reviews: {this.props.torta.review_count}</td>
            </tr>
        )
    }
}

export default Torta;