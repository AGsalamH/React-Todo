const Todo = ({ todo, deleteTodo, toggleActive }) => {
    const styles = {
        margin: 'auto'
    };

    return (
        <div className="Todo">
            <div className="card w-50 " style={styles} onDoubleClick={() => toggleActive(todo.id)} >
                <div className="card-body">
                    <h5 className="card-title">{todo.title}</h5>
                    <p className="card-text">{todo.description}</p>
                    <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button>
                    <div>{todo.active && 'Active'}</div>
                </div>
            </div>
        </div>
    );
}

export default Todo;