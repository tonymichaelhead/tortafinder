import React from "react";
import ReactDom from 'react-dom';
import axios from 'axios';
import TortaList from './tortaList.jsx';
 
class App extends React.Component {
  constructor(props) {
    super(props);
        this.state = {
            tortaList: []
        }
        this.getTortas = this.getTortas.bind(this);
        this.showFavorites = this.showFavorites.bind(this);
    }
  
  getTortas(e) {
    e.preventDefault();  
    let query = { text: 'ayyoo' };
    
    axios
        .post('/search', query)
            .then(results => {

                let newTortaList = [];
                
                for (var i = 0; i < results.data.businesses.length; i++) {
                    let newTorta = {
                        image: results.data.businesses[i].image_url,
                        name: results.data.businesses[i].name,
                        city: results.data.businesses[i].location.city,
                        rating: results.data.businesses[i].rating,
                        reviewCount: results.data.businesses[i].review_count,
                    }
                    console.log('new object',newTorta)
                    newTortaList.push(newTorta);    
                }
                //console.log(newTortaList);
                this.setState({ tortaList: newTortaList });
            })
            .catch(err => {
                console.log(err);
            })
  }

  showFavorites(e) {
    e.preventDefault();
    //wipe current state and send a get request to the server to 
    axios.get('/favorites')
        .then(results => {
            console.log('GOT favorites!!', results.data);
            this.setState({ tortaList: results.data });
            console.log('favorites', this.state)
        })
        .catch(err => {
            console.log(err);
        })
  }

  render() {
      console.log('render state: ', this.state)
    return (
        <div>
            <h1>TortAmigo</h1>
            <br/>
            <button className="btn btn-lg btn-default" id="front-buttons" onClick={this.getTortas}>Get Tortas!</button>
            <button className="btn btn-lg btn-default" id="front-buttons" onClick={this.showFavorites}>Favorites</button>
            <TortaList tortaList={this.state.tortaList}/>
        </div>
    );
  }
}

export default App;