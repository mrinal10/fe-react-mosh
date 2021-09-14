import React, { Component } from 'react';
import './App.css';
import Navbar from './component/navbar';
import Counters from './component/counters';

class App extends Component {
  state = {
      counters: [
          { id: 1, value: 1 },
          { id: 2, value: 0 },
          { id: 3, value: 0 },
          { id: 4, value: 0 }
      ]
  };

  handleDelete= (counterId) => {
      console.log(counterId);
      const counters = this.state.counters.filter(counter => counter.id !== counterId);
      this.setState({ counters: counters });
  }

  handleIncrement= (counter) => {
      const counters =  [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = { ...counter };
      counters[index].value++;
      this.setState({counters});
  }

  handleDecrement= (counter) => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = { ...counter };
      counters[index].value--;
      this.setState({ counters });
  }

  handleReset= () => {
      const counters = [...this.state.counters];
      counters[0].value = 0;
      counters[1].value = 0;
      counters[2].value = 0;
      counters[3].value = 0;
      this.setState({ counters });
  }

  render() {
      return (
        <React.Fragment>
          <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
          <Counters 
            counters={this.state.counters}
            onReset={this.handleReset} 
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement} 
            onDelete={this.handleDelete} />
        </React.Fragment>
      );
  }
}

export default App;
