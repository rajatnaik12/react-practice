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

    /** The handle changed method is actually used to handle the
    * changes on checkboxes but as if anyone try that tutorial exactly in 2020 then result will be not 
    * as excepted and if you have tried then the handleChange is being called two times. Thats why I have created 
    * this repository to keep those learning react motivated.
    * If you see below and the content on the video then you will notice that I have created toUpdateTodos
    * and sliced the state of todos. Because you should not change the state directly and as in the video is was
    * generating the bug.
    * check this official documentation and tutorial at https://reactjs.org/tutorial/tutorial.html#why-immutability-is-important
    * I insist to read and try the tutorial. 
    * # Using this approach it becomes easy to detect changes
    * # Also it helps in Determining When to Re-Render in React.
    */
    handleChange(id) {
        // Will be slicing and change this to prevent from the bug which does not 
        // give us to change even after following the video on youtube.
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
