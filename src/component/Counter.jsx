import React, { Component } from 'react';

class Counter extends React.Component {
    state = {
        count: 2,
        imageUrl: 'https://picsum.photos/200',
        tags: ['tag1', 'tag2', 'tag3']
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

    handleIncreament = () => {
        this.setState( { count: this.state.count + 1 });
        console.log('Increment Clicked', this);
    }

    render() {         
        return (
            <div>               
                <span style={ this.styles } className= {this.getBadgeClasses()}>
                    {this.formatCoCount()}
                </span>
                <button 
                        onClick={this.handleIncreament} 
                        className="btn btn-secondary btn-sm">
                    Increament
                </button>
                { this.renderTags() }
            </div>
        );
    }

    formatCoCount() {
        const { count} = this.state;
        return count === 0 ? 'Zero' : count;
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }
}
 
export default Counter;