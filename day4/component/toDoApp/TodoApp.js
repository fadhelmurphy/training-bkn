import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { connect } from "react-redux";
import { addTodo, delTodo } from "../../redux/store/actions/todoAction"

const TodoApp = () => {

    const todos = useSelector(state => state.todoReducer.todos)
    const dispatch = useDispatch()
    const addNewTodo = (id) => {
        const data = {
            id,
            title: `This is ${id}`,
            complete: false
        }
        dispatch(addTodo(data))
    }
    return (
        <div>
            <h1>todo app</h1>
            <button onClick={() => addNewTodo(todos.length + 1)}>add</button>
            {todos.map(todo =>
                <div key={todo.id}>
                    <p>{todo.title}</p>
                    <button onClick={() => dispatch(delTodo(todo.id))}>delete</button>
                </div>
            )}
        </div>
    )
}
// const mapStateToProps = state => ({
//   todos: state.todoReducer.todos
// })
export default TodoApp
// export default connect(mapStateToProps,{ addTodo, delTodo })(TodoApp);
