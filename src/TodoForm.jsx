import React, { Component } from 'react';

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.state = { value: '' }
    }

    isSelectAll = () => {
        if (!this.props.list.length) return false
        for (let i = 0; i < this.props.list.length; i++) {
            console.log(this.props.list[i].name, this.props.list[i].done)
            if (!this.props.list[i].done) return false
        }
        return true
    }

    handleSelectAll = () => {
        const isAll = this.isSelectAll()
        this.props.selectAll(!isAll)
    }

    handleChange = e => {
        this.setState({ value: e.target.value })
    }
    handleSubmit = e => {
        e.preventDefault()
        this.setState({ value: '' })
        this.props.addToList(this.state.value)
    }

    render() {
        return (
            <div>
                <input type="checkbox" onChange={this.handleSelectAll} checked={this.isSelectAll()} />
                <span>全選</span>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </form>
            </div>
        );
    }
}

export default TodoForm;