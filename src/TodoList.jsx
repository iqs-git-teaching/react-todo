import React, { Component } from 'react';

class TodoList extends Component {

    isShow = done=>{
        const { filter } = this.props
        switch(filter){
            case 'Active': return done===false
            case 'Completed': return done===true
            default: return true
        }
    }

    renderItem = (item, i) => {
        const { changeDone } = this.props
        const isShow = this.isShow(item.done);
        return  isShow && <li key={i}>
            <input type='checkbox' checked={item.done} onChange={e => changeDone(i)} />
            <span>{item.name}</span>
        </li>
    }
    render() {

        return (
            <ul>
                {this.props.list.map((item, i) => this.renderItem(item, i))}
            </ul>
        );
    }
}

export default TodoList;