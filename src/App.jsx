import React, { Component } from 'react';
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import Left from './Left'
import FilterList from './FilterList'

class App extends Component {

    constructor(props) {
        super(props)
        this.state = { list: [], filter: 'All' }
    }

    addToList = value => {
        const item = { name: value, done: false }
        this.setState({ list: [...this.state.list, item] })
    }

    selectAll = (done) => {
        this.setState({
            list: this.state.list.map(item => ({ ...item, done: done })),
        })
    }

    changeDone = idx => {
        this.setState({
            list: this.state.list.map((item, i) => idx === i ? ({ ...item, done: !item.done }) : ({ ...item }))
        })
    }

    changeFilter = filter=>{
        this.setState({
            filter: filter
        })
    }

    render() {
        return (
            <div>
                <h1>todos</h1>
                <TodoForm addToList={this.addToList} selectAll={this.selectAll} isSelectAll={this.state.isAll} list={this.state.list} />
                <TodoList list={this.state.list} changeDone={this.changeDone} filter={this.state.filter} />
                <Left list={this.state.list}/>
                <FilterList filter={this.state.filter} changeFilter={this.changeFilter}/>
            </div>
        );
    }
}

export default App;