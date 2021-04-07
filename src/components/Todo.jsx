const Todo = ({ todo, deleteTodo, toggleActive }) => {
    const styles = {
        margin: 'auto'
    };

    let activeClass = todo.active ? 'active' : '' 

    return (
        <div className="Todo">
            <div className={"card w-50 " + activeClass} style={styles} onDoubleClick={() => toggleActive(todo.id)} >
                <div className="card-body">
                    <h5 className="card-title">{todo.title}</h5>
                    <p className="card-text">{todo.describtion}</p>
                    <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button>
                    <div>{todo.active && 'Active'}</div>
                </div>
            </div>
        </div>
    );
}

export default Todo;