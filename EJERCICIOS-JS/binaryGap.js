function maxBinaryGap(n){
  let maxGap=0;
  let zeroCounter=0;
  let chosenNumber=n;
  let foundOne=false;

  while(chosenNumber!==0){

    if(chosenNumber % 2==1){//si es true es porque encontro un 1, like: chosenNumber%2==1
      foundOne=true
      zeroCounter=0
    }else if(foundOne===true){
      zeroCounter++

      if(zeroCounter>maxGap){
        maxGap=zeroCounter
      }
    }

    chosenNumber=Math.floor(chosenNumber/2)

  }
  return  console.log("the greatest zero gap is "+maxGap);

}
maxBinaryGap(23);
 //just did the following with successfully result:

function solution(A, K) {

    for (var i =0; i < K; i++) {

        A.unshift(A[A.length-1])

        A.pop()

    }

    return A

}

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let contador=0;
    A.sort(function(a,b) {return a-b })//first sort the array

    for(let i=0;i<A.length;i++){
        if(A[i]>0){//first we check the condition integer>0
        if(A[i]!=contador) contador++;//si contador es dif que el valor aumenta
        if(A[i]==contador) continue;//sino sigue hasta que termina y como va en orden el valor que queda es el que faltaria
        return contador;

        }

    }
    contador++;
    return contador;
}
import cx from "classnames";
import { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counterValue: 42,
    };
  }
  onClick() {
    this.setState({ counterValue: this.state.counterValue + 1 });
  }
  render() {
    return (
      <>
        <div>
          <h2>{this.state.counterValue}</h2>
          <button className="counter-button" onClick={() => this.onClick()}>
            "Click"
          </button>
        </div>

        <style>{`
                    .counter-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                    }
                `}</style>
      </>
    );
  }
}
import cx from 'classnames';
import { Component } from 'react';

export default class Counter extends Component {
    constructor(props){
        super(props);
    this.state={
        counterValue:42
    };
    }
    onClick(){
        this.setState(
            {counterValue:this.state.counterValue+1}
        )
    }
    render() {
        return (
            <>
                <div>
                <h2 className="counter">
                {this.state.counterValue}
                </h2>
                 <button className="counter-button" onClick= {() => this.onClick()}>
                 Click</button>
                </div>

                <style>{`
                    .counter-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                    }
                `}</style>
            </>
        );
    }
}