import React from 'react';
import axios from 'axios';

class Torta extends React.Component{
    constructor(props) {
        super(props);
        this.saveToFavorites = this.saveToFavorites.bind(this);
    }

                  

    saveToFavorites() {
        console.log(this.props.torta)
        let favTorta = {
            image: this.props.torta.image_url,
            name: this.props.torta.name,
            city: this.props.torta.location.city,
            rating: this.props.torta.rating,
            reviewCount: this.props.torta.review_count,
        }

        axios
            .post('/favorites', favTorta)
                .then(result => {
                    console.log('Successfully POSTed!!');
                    //toggle button state to say favorited!
                })
                .catch(err => {
                    console.log(err);
                })
    } 
    
    render(){
        return (
            <div>
                <tr>
                    <td><img className="torta-pic" src={this.props.torta.image_url} style={{height:"100px"}}/></td>
                    <td>{this.props.torta.name}</td>
                    {/* <td>{this.props.torta.location.city}</td> */}
                    <td>{this.props.torta.rating}/5</td>
                    <td>Reviews: {this.props.torta.review_count}</td>
                </tr>
                <button onClick={this.saveToFavorites}>Favorite this!</button>
            </div>
        )
    }
}

export default Torta;