import React, { Component } from 'react';
import './App.css';

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      shakeSpeare: ''
    }
  }

  componentDidMount(){
    var base = this

    let poemApi = 'http://ShakeItSpeare.com/api/poem'
    fetch(poemApi)
      .then((response) => {
        return response.json()
    }).then((json) => {
      base.setState({ shakeSpeare: json.poem })
    }).catch((ex) => {
      console.log('An error occured', ex)
    })
  }

  render() {
    let poetry = this.state.shakeSpeare;
    if (!this.state.shakeSpeare) {
      return (
        <div>Formulating deep thoughts</div>
        )
      } 
    return (
      <div>
        <header className="hero">
        	<h1>DOG DOES A BLOG</h1>
          <h4><em>{poetry}</em></h4>
        </header>
      </div>
    );
  }
}

export default Home;
