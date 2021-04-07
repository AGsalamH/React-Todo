import Todo from "./Todo";

const TodoList = ({ todos, deleteTodo, toggleActive }) => {
    const renderTodos = () => {
        if(todos.length > 0){
            return todos.map(todo => {
                return <Todo 
                    todo={todo} 
                    deleteTodo={deleteTodo}
                    toggleActive={toggleActive} 
                    key={todo.id}
                />
            });
        }
        return <p style={{width: '50%',margin: 'auto', textAlign: 'center'}} >No Todos!!</p>;
    }

    return (
        <div className="TodoList">
            {renderTodos()}
        </div>
    );
}

export default TodoList;