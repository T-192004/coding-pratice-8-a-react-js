// Write your code here.
import './index.css'
import {Component} from 'react'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  onChangeLetterInput = event => {
    console.log(event.target.value)
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const lettersCount = searchInput.length
    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label className="label" htmlFor="InputLetter">
            Enter the phrase
          </label>
          <input
            type="text"
            placeholder="Enter the letters"
            id="InputLetter"
            className="letter-input"
            onChange={this.onChangeLetterInput}
          />
          <div className="result-container">
            <h1 className="letter-count">No.of Letters: {lettersCount}</h1>
          </div>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
          className="logo-img"
          alt="letters"
        />
      </div>
    )
  }
}

export default LettersCalculator
