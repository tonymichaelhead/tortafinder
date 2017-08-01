import React from "react";
import ReactDom from 'react-dom';
import axios from 'axios';
import TortaList from './tortaList.jsx';
 
class App extends React.Component {
  constructor(props) {
    super(props);
        this.getTortas = this.getTortas.bind(this);
        this.state = {
            tortaList: []
        }
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

  render() {
    return (
        <div>
            <h1>Torta Amigo</h1>
            <button onClick={this.getTortas}>Get Tortas!</button>
            <TortaList tortaList={this.state.tortaList}/>
        </div>
    );
  }
}

export default App;