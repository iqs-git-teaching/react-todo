import React, { Component } from 'react';

class FilterList extends Component {

    renderItem = name=>{
        const {filter,changeFilter} = this.props
        return name===filter? 
            <span>{name}</span> : 
            <a href={'#'+name} onClick={e=>changeFilter(name)}>{name}</a>
    }

    render() {
        return (
            <div>
                {this.renderItem('All')} | 
                {this.renderItem('Active')} | 
                {this.renderItem('Completed')}
            </div>
        );
    }
}



export default FilterList;