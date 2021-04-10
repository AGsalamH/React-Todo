const AddTodo = ({ addTodo, handleDescriptionInput, handleTitleInput, title, description }) => {
    return (
        <div className="AddTodo" style={{width: '50%', margin: 'auto'}}>
            <h2 style={{textAlign: 'center'}}>Add new Todo:</h2>
            <form onSubmit={addTodo}>
                <div className="mb-3">
                    <label htmlFor="todo" className="form-label">Todo</label>
                    <input type="text" className="form-control" name="title" id="todo" aria-describedby="todo" placeholder="TODO" onChange={handleTitleInput} value={title} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label"> Description </label>
                    <textarea className="form-control" id="description" rows="3" placeholder="Optional description" onChange={handleDescriptionInput} value={description} name="description" />
                </div>
                <div className="mb-3 text-center">
                    <input type="submit" className="btn btn-success" value="Add" />
                </div>
            </form>
            <hr/>
        </div>
    );
}

export default AddTodo;