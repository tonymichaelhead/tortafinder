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
  
  getTortas() {
    let query = { text: 'ayyoo' };
    
    axios
        .post('/search', query)
            .then(results => {
                console.log(results.data);
                this.setState({ tortaList: results.data.businesses });
            })
            .catch(err => {
                console.log(err);
            })
  }

  showFavorites() {
    //wipe current state and send a get request to the server to 
    axios.get('/favorites')
        .then(results => {
            console.log('GOT favorites!!', results.data);
            this.setState({ tortaList: results.data });
        })
        .catch(err => {
            console.log(err);
        })
  }

  render() {
    return (
        <div>
            <h1>TortAmigo</h1>
            <br/>
            <button onClick={this.getTortas}>Get Tortas!</button>
            <button onClick={this.showFavorites}> Show Favorites</button>
            <TortaList tortaList={this.state.tortaList}/>
        </div>
    );
  }
}

export default App;