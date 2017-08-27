import React from 'react';
import axios from 'axios';

class Torta extends React.Component{
    constructor(props) {
        super(props);
        this.saveToFavorites = this.saveToFavorites.bind(this);
        // this.state.torta = this.props.torta;
        
        //{
            // image_url: this.props.torta.image_url,
            // name: this.props.torta.name,
            // location: { this.props}this.props.torta.location.city,
            // rating: this.props.torta.rating,
            // reviewCount: this.props.torta.review_count,

            // image: this.props.torta.image_url,
            // name: this.props.torta.name,
            // city: this.props.torta.location.city,
            // rating: this.props.torta.rating,
            // reviewCount: this.props.torta.review_count,
        //}
    }

                  

    saveToFavorites() { 
        // let favTorta = {
        //     image: this.props.torta.image_url,
        //     name: this.props.torta.name,
        //     city: this.props.torta.location.city,
        //     rating: this.props.torta.rating,
        //     reviewCount: this.props.torta.review_count,
        // }
        console.log(this.props.torta)
        axios
            .post('/favorites', this.props.torta)
                .then(result => {
                    console.log('Successfully POSTed!!', this.props.torta);
                    //toggle button state to say favorited!
                })
                .catch(err => {
                    console.log(err);
                })
    } 
    
    render(){
        console.log('torta state: ', this.props.torta)
        return (
            <div className="table-responsive" id="list-item">
                <tr>
                    <td><img className="torta-pic" src={this.props.torta.image} style={{height:"100px"}}/></td>
                    <td>{this.props.torta.name}</td>
                    <td>{this.props.torta.city}</td> 
                    <td>{this.props.torta.rating}/5</td>
                    <td>Reviews: {this.props.torta.reviewCount}</td>
                    <button id="add-to-fav-button" onClick={this.saveToFavorites}>Favorite this!</button>
                </tr>
                <hr/>
            </div>
        )
    }
}

export default Torta;