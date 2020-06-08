import React from 'react'

function TodoItem(props) {
    // Destructuring of props 
    // https://www.youtube.com/watch?v=5_PdMS9CLLI this video has good explaination on this
    const { item, handleChange } = props
    return (
        <div className="todo-item" >
            <input type="checkbox" checked={item.completed} onChange={() => handleChange(item.id)} />
            <p>{item.text}</p>
        </div>
    )

}

export default TodoItem
