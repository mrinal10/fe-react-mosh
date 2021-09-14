import React from 'react';
import Counter from './counter';


class Counters extends React.Component {
    

    render() { 
        return (
        <div>
            <button 
            onClick={this.props.onReset} 
                className="btn btn-secondary btn-sm">
                Reset
            </button>
            { this.props.counters.map(counter => 
                <Counter key={counter.id} 
                    onDelete={this.props.onDelete}
                    onIncrement={this.props.onIncrement}
                    onDecrement={this.props.onDecrement}
                    counter={counter}>
                </Counter>)}
        </div>);
    }


}
 
export default Counters;