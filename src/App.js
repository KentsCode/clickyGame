import React, { Component } from 'react';
import './App.css';
import animals from './animals.json';
import NavBar from './components/NavBar';
import Card from './components/Card';
import Wrapper from './components/Wrapper';

class App extends Component {
  state = {
    //initializes game, sets scores to zero
    animals: animals,
    userGuessed: [0],
    score: 0,
    highScore: 0
  }
  componentDidMount(){
    //creates an instance of animals component  
    this.setState({animals: this.shuffle(this.state.animals)})
  }
  shuffle = animals => {
    console.log("shuffle called");
    //call this function each time to sort the animals in a random order. (called a Fisher-Yates-Durstenfeld shuffle.)
    for (let i = 0; i < animals.length; i++) {
      let j = i + Math.floor(Math.random() * (animals.length - i));
      //console.log("shuffling");
      let temp = animals[j];
      animals[j] = animals[i];
      animals[i] = temp;
    }
    return animals; 
  }
  imageClick = currentId => {
    //console.log("picture clicked " + currentId);
    //console.log(this.state.userGuessed.length);
    if (this.state.userGuessed.includes(currentId)) {
      console.log("Game Over")
      this.setState({
      userGuessed: [],
      score: 0,
      highScore: 0
    })
    } else {
      console.log("no match");
      this.state.userGuessed.push(currentId);
    }
    this.componentDidMount();
    //this.shuffle(this.state.animals);
    //console.log(this.state.animals);
  }
  //correct 

  //incorrect

  render() {
    return (
      <div>
        <NavBar score={this.state.score} highScore={this.state.highScore} />
        <Wrapper>
          {this.state.animals.map((animalMapped) => (
            <Card
              id={animalMapped.id}
              key={animalMapped.id}
              image={animalMapped.imageUrl}
              handleClick={this.imageClick}
            />
          ))}
        </Wrapper>
      </div>
      
    )
  }
}

export default App;
