import Todo from "./Todo";

const TodoList = ({ todos, deleteTodo, toggleActive }) => {
    if(!todos.length){
        const styles = {
            width: '50%',
            margin: 'auto', 
            textAlign: 'center'
        };
        return <p style={styles} >No Todos!!</p>;
    }

    return (
        <div className="TodoList">
            {
                todos.map(todo => {
                    return <Todo 
                        todo={todo} 
                        deleteTodo={deleteTodo}
                        toggleActive={toggleActive} 
                        key={todo.id}
                    />
                })
            }
        </div>
    );
}

export default TodoList;