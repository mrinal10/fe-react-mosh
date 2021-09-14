import React, { Component } from 'react';

class Counter extends React.Component {
    state = {
        value: this.props.value
     };

    styles = {
        fontSize: 30,
        fontWeight: "bold"
    };

    renderTags() {
        if(this.state.tags.length === 0) return <p>There are no tags!</p>;

        return ( <ul>
                    { this.state.tags.map(tag => <li key={tag}>{ tag }</li>) }
                </ul>);
    }

    handleIncreament = product => {
        this.setState( { value: this.state.value + 1 });
        console.log(product);
    }

    render() {        
        return (
            <div>
                <h4>{this.props.children}</h4>
                <span style={ this.styles } className= {this.getBadgeClasses()}>
                    {this.formatCoCount()}
                </span>
                <button onClick={() => this.handleIncreament({ id: 1 })} 
                    className="btn btn-secondary btn-sm">
                    Increament
                </button>
            </div>
        );
    }

    formatCoCount() {
        const { value } = this.state;
        return value === 0 ? 'Zero' : value;
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }
}
 
export default Counter;