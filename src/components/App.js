import React from "react";

import Button from "./Button";
import Input from "./Input";
import ClearButton from "./ClearButton";
import "./App.css";

class App extends React.Component {
  state = {
    input: "",
    prevNum: "",
    curNum: "",
    operator: ""
  };

  addToInput = val => {
    this.setState({
      input: this.state.input + val
    });
  };

  addZeroToInput = val => {
    if (this.state.input !== "") {
      this.setState({
        input: this.state.input + val
      });
    }
  };

  addDecimal = val => {
    if (this.state.input.indexOf(".") === -1) {
      this.setState({ input: this.state.input + val });
    }
  };

  clearInput = () => {
    this.setState({
      input: ""
    });
  };

  add = () => {
    this.state.prevNum = this.state.input;
    this.setState({
      input: ""
    });
    this.state.operator = "plus";
  };

  evaluate = () => {
    this.state.curNum = this.state.input;
    if (this.state.operator == "plus") {
      this.setState({
        input: parseInt(this.state.prevNum) + parseInt(this.state.curNum)
      });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="cal-wrapper">
          <div className="row">
            <Input>{this.state.input}</Input>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button>-</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addDecimal}>.</Button>
            <Button handleClick={this.addZeroToInput}>0</Button>
            <Button handleClick={this.evaluate}>=</Button>
            <Button handleClick={this.add}>+</Button>
          </div>
          <div className="row">
            <ClearButton handleClick={this.clearInput}>AC</ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
