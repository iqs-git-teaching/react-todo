import React, { Component } from 'react';

class Left extends Component {

    count = ()=>{
        let count = 0;
        this.props.list.forEach(item=>{
            if(!item.done) count++;
        })
        return count;
    }

    render() {
        return (
            <div>{this.count()} items left</div>
        );
    }
}

export default Left;