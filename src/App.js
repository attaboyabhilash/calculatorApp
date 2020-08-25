import React, { Component } from 'react'
import myLogo from "./myMainLogoWithBlackText.svg";

export default class App extends Component {
  state = {
    input: 0,
    previousVal: "",
    operator: ""
  }

  clearHandler = () => {
    this.setState({
      input: 0,
      previousVal: "",
      currentVal: "",
      operator: ""
    })
  }

  zeroHandler = (e) => {
    if(this.state.input !== 0){
      this.setState({
        input: this.state.input + e.target.value
      })
    }
  }

  deciHandler = (e) => {
    if(this.state.input.indexOf(".") === -1){
      this.setState({
        input: this.state.input + e.target.value
      })
    }
  }

  clickHandler = (e) => {
    if(this.state.input === 0){
      this.setState({
        input: e.target.value
      })
    }else{
      this.setState({
        input: this.state.input + e.target.value
      })
    }
  }

  addHandler = (e) => {
    if(this.state.previousVal === ""){
      this.setState({
        previousVal: this.state.input,
        input: 0,
        operator: e.target.value
      })
    }else if(this.state.input !== 0 && this.state.previousVal !== "" && this.state.operator === '*'){
      this.setState({
        previousVal: parseFloat(this.state.previousVal) * parseFloat(this.state.input),
        input: 0,
        operator: e.target.value
      })
    }else if(this.state.input !== 0 && this.state.previousVal !== "" && this.state.operator === '-'){
      this.setState({
        previousVal: parseFloat(this.state.previousVal) - parseFloat(this.state.input),
        input: 0,
        operator: e.target.value
      })
    }else if(this.state.input !== 0 && this.state.previousVal !== "" && this.state.operator === '/'){
      this.setState({
        previousVal: parseFloat(this.state.previousVal) / parseFloat(this.state.input),
        input: 0,
        operator: e.target.value
      })
    }else{
      this.setState({
        previousVal: parseFloat(this.state.previousVal) + parseFloat(this.state.input),
        input: 0,
        operator: e.target.value
      })
    }
  }

  subHandler = (e) => {
    if(this.state.previousVal === ""){
      this.setState({
        previousVal: this.state.input,
        input: 0,
        operator: e.target.value
      })
    }else if(this.state.input !== 0 && this.state.previousVal !== "" && this.state.operator === '+'){
      this.setState({
        previousVal: parseFloat(this.state.previousVal) + parseFloat(this.state.input),
        input: 0,
        operator: e.target.value
      })
    }else if(this.state.input !== 0 && this.state.previousVal !== "" && this.state.operator === '*'){
      this.setState({
        previousVal: parseFloat(this.state.previousVal) * parseFloat(this.state.input),
        input: 0,
        operator: e.target.value
      })
    }else if(this.state.input !== 0 && this.state.previousVal !== "" && this.state.operator === '/'){
      this.setState({
        previousVal: parseFloat(this.state.previousVal) / parseFloat(this.state.input),
        input: 0,
        operator: e.target.value
      })
    }else{
      this.setState({
        previousVal: parseFloat(this.state.previousVal) - parseFloat(this.state.input),
        input: 0,
        operator: e.target.value
      })
    }
  }

  mulHandler = (e) => {
    if(this.state.previousVal === ""){
      this.setState({
        previousVal: this.state.input,
        input: 0,
        operator: e.target.value
      })
    }else if(this.state.input !== 0 && this.state.previousVal !== "" && this.state.operator === '+'){
      this.setState({
        previousVal: parseFloat(this.state.previousVal) + parseFloat(this.state.input),
        input: 0,
        operator: e.target.value
      })
    }else if(this.state.input !== 0 && this.state.previousVal !== "" && this.state.operator === '-'){
      this.setState({
        previousVal: parseFloat(this.state.previousVal) - parseFloat(this.state.input),
        input: 0,
        operator: e.target.value
      })
    }else if(this.state.input !== 0 && this.state.previousVal !== "" && this.state.operator === '/'){
      this.setState({
        previousVal: parseFloat(this.state.previousVal) / parseFloat(this.state.input),
        input: 0,
        operator: e.target.value
      })
    }else{
      this.setState({
        previousVal: parseFloat(this.state.previousVal) * parseFloat(this.state.input),
        input: 0,
        operator: e.target.value
      })
    }
  }

  divHandler = (e) => {
    if(this.state.previousVal === ""){
      this.setState({
        previousVal: this.state.input,
        input: 0,
        operator: e.target.value
      })
    }else if(this.state.input !== 0 && this.state.previousVal !== "" && this.state.operator === '+'){
      this.setState({
        previousVal: parseFloat(this.state.previousVal) + parseFloat(this.state.input),
        input: 0,
        operator: e.target.value
      })
    }else if(this.state.input !== 0 && this.state.previousVal !== "" && this.state.operator === '-'){
      this.setState({
        previousVal: parseFloat(this.state.previousVal) - parseFloat(this.state.input),
        input: 0,
        operator: e.target.value
      })
    }else if(this.state.input !== 0 && this.state.previousVal !== "" && this.state.operator === '*'){
      this.setState({
        previousVal: parseFloat(this.state.previousVal) * parseFloat(this.state.input),
        input: 0,
        operator: e.target.value
      })
    }else{
      this.setState({
        previousVal: parseFloat(this.state.previousVal) / parseFloat(this.state.input),
        input: 0,
        operator: e.target.value
      })
    }
  }

  equalHandler = (e) => {
    if(this.state.operator === '+'){
      this.setState({
        input: parseFloat(this.state.previousVal) + parseFloat(this.state.input),
        previousVal: ""
      })
    }
    if(this.state.operator === '-'){
      this.setState({
        input: parseFloat(this.state.previousVal) - parseFloat(this.state.input),
        previousVal: ""
      })
    }
    if(this.state.operator === '*'){
      this.setState({
        input: parseFloat(this.state.previousVal) * parseFloat(this.state.input),
        previousVal: ""
      })
    }
    if(this.state.operator === '/'){
      this.setState({
        input: parseFloat(this.state.previousVal) / parseFloat(this.state.input),
        previousVal: ""
      })
    }
  }


  render() {
    return (
      <div>
        <div className="head">
          <img src={myLogo} alt="myLogo"/>
          <h1>Calculator App</h1>
        </div>
        <div className="calci">
          <input type="text" id="displayLess" value={this.state.previousVal}/><br/>
          <input type="text" id="display" value={this.state.input}/><br/>
          <button id="clear" value="0" onClick={this.clearHandler}>AC</button>
          <button id="divide" value="/" onClick={this.divHandler}>/</button>
          <button id="multiply" value="*" onClick={this.mulHandler}>x</button>
          <br/>
          <button id="seven" value="7" onClick={this.clickHandler}>7</button>
          <button id="eight" value="8" onClick={this.clickHandler}>8</button>
          <button id="nine" value="9" onClick={this.clickHandler}>9</button>
          <button id="subtract" value="-" onClick={this.subHandler}>-</button>
          <br/>
          <button id="four" value="4" onClick={this.clickHandler}>4</button>
          <button id="five" value="5" onClick={this.clickHandler}>5</button>
          <button id="six" value="6" onClick={this.clickHandler}>6</button>
          <button id="add" value="+" onClick={this.addHandler}>+</button>
          <br/>
          <button id="one" value="1" onClick={this.clickHandler}>1</button>
          <button id="two" value="2" onClick={this.clickHandler}>2</button>
          <button id="three" value="3" onClick={this.clickHandler}>3</button>
          <button id="equals" value="=" onClick={this.equalHandler}>=</button>
          <br/>
          <button id="zero" value="0" onClick={this.zeroHandler}>0</button>
          <button id="decimal" value="." onClick={this.deciHandler}>.</button>
        </div>
        <div className="foot">
          <h6>Designed &amp; Coded By : </h6>
          <h6 className="name">Abhilash Negi</h6>
        </div>
      </div>
    )
  }
}
