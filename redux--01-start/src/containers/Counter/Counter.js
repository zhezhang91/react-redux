import React, { Component } from 'react';
import { connect } from 'react-redux'
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionsType from '../../store/actions/actions';
import { increment,decrement,add, subtract, deleteResult, storeResult } from '.././../store/actions/actions';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 15" clicked={this.props.onSubtractCounter}  />
                <hr />
                <button onClick={ () => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storeResults.map( strResult => (
                        <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li> // anonymous function pass argument
                    ))}
                </ul>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
       ctr: state.ctr.counter,
        storeResults: state.res.results
    };
};

const mapDispatchToProps = dispatch => {
  return {
      onIncrementCounter: () => dispatch(increment()),
      onDecrementCounter: () => dispatch(decrement()),
      onAddCounter: () => dispatch(add(10)),
      onSubtractCounter: () => dispatch(subtract(15)),
      onStoreResult: (result) => dispatch(storeResult(result)),
      onDeleteResult: (id) => dispatch(deleteResult(id)),  // expecting id from input and pass to redux store

  }
};


export default connect(mapStateToProps,mapDispatchToProps)(Counter);