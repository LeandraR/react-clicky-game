import React from "react";
import Photos from "./Photos";
import Score from "./Score";
import PhotoArray from './PhotoArray';

class Game extends React.Component {

    constructor(props) {
            super(props);
            this.state = {
                PhotoArray: PhotoArray,
                guessed: [],
                topScore: 0,
                currentScore: 0,
                message: "Click an image to begin!"
            };
        };

        handleClick = (id) => {
            if (this.state.guessed.indexOf(id) === -1) {
                this.setState({
                    guessed: this.state.guessed.concat(id),
                    currentScore: this.state.currentScore + 1,
                    message: "Good guess!"
                })
                this.shuffleCards();
                this.checkHighScore();
            } else {
                this.setState({
                    guessed: [],
                    currentScore: 0,
                    message: "Sorry, you lose!"
                })
            }
        };

        shuffleCards = () => {
            for (let i = 0; i < this.state.PhotoArray.length; i++) {
                const j = Math.floor(Math.random() * (i + 1));
                [this.state.PhotoArray[i], this.state.PhotoArray[j]] = [this.state.PhotoArray[j], this.state.PhotoArray[i]];
            };
            this.setState({
                PhotoArray:PhotoArray
            })
        };

        checkHighScore = () => {
            if (this.state.currentScore >= this.state.topScore){
                this.setState({
                    topScore: this.state.currentScore + 1
                })
            }
        }

        render() {
            return (
                <div className = "game">
                    <Score topScore={this.state.topScore} currentScore = {this.state.currentScore} message={this.state.message}/>
                    <Photos check={this.handleClick} photo={this.state.PhotoArray} />
                </div >
                );
        }
}

export default Game;