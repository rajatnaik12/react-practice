import React, { Component } from 'react'
import TodoItem from './TodoItem'
import todosData from './todosData'


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: todosData
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        const toUpdateTodos = this.state.todos.slice()
        const updatedTodos = toUpdateTodos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
                console.log("Clicked the item: ", id)
            }
            return todo
        })

        this.setState({ todos: updatedTodos })

    }

    render() {
        const todoItems = this.state.todos.map(item =>
            <TodoItem key={item.id} item={item} handleChange={this.handleChange} />
        )

        return (
            <main className="todo-list">
                {todoItems}
            </main>
        )
    }
}

export default App
