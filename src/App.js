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
    userGuessed: [],
    score: 0,
    highScore: 0
  }
  componentDidMount(){
    //loads current state of animals to dom. called more than once. 
    this.setState({animals: this.shuffle(this.state.animals)});
  }
  shuffle = animals => {
    console.log("shuffle called");
    //call this function each time to sort the animals in a random order. (called a Fisher-Yates-Durstenfeld shuffle.)
    for (let i = 0; i < animals.length; i++) {
      let j = i + Math.floor(Math.random() * (animals.length - i));
      let temp = animals[j];
      animals[j] = animals[i];
      animals[i] = temp;
    }
    return animals; 
  }
  imageClick = currentId => {
    //click handler, most game logic is here.
    if (this.state.userGuessed.includes(currentId)) {
      console.log("Game Over")
      let updateTopScore = this.state.score;
      this.setState({
      userGuessed: [],
      score: 0,
      highScore: updateTopScore
    })
    } else {
      console.log("no match");
      this.state.userGuessed.push(currentId);
      let updateScore = this.state.score;
      updateScore = updateScore + 1;
      console.log("score " + updateScore);
      this.setState({
        score: updateScore
      })
    }
    this.componentDidMount();
  }

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