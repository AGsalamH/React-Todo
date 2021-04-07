const AddTodo = ({ handleTodoInput, handleDescribtionInput, addTodo, todo, describtion }) => {
    return (
        <div className="AddTodo" style={{width: '50%', margin: 'auto'}}>
            <h2 style={{textAlign: 'center'}}>Add new Todo:</h2>
            <div className="mb-3">
                <label htmlFor="todo" className="form-label">Todo</label>
                <input type="text" className="form-control" id="todo" aria-describedby="todo" placeholder="TODO" onChange={handleTodoInput} value={todo} />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label"> Description </label>
                <textarea className="form-control" id="description" rows="3" placeholder="Optional description" onChange={handleDescribtionInput} value={describtion}></textarea>
            </div>
            <div className="mb-3 text-center">
                <button className="btn btn-success" onClick={addTodo} >Add</button>
            </div>
            <hr/>
        </div>
    );
}

export default AddTodo;