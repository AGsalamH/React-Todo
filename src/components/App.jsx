import React, { Component } from 'react';
import TodoList from './TodoList';
import Header from './Header';
import AddTodo from './AddTodo';


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: [
                {id: 1001, title: 'Code', describtion: 'Time to code', active: false},
                {id: 1002, title: 'Make lunch', describtion: 'Cook Pasta', active: false},
                {id: 1003, title: 'Study', describtion: '2 lectures of distributed systems', active: true},
                {id: 1004, title: 'Walk the dog', describtion: 'For 30 mins around the house', active: false},
            ],
            showAddTodo: false,
            title: '',
            description: ''
        }
    }

    handleTitleInput = (e) => {
        const title = e.target.value;
        this.setState({title});
    }

    handleDescriptionInput = (e) => {
        const description = e.target.value;
        this.setState({description});
    }

    // On form submit
    addTodo = (e) => {
        e.preventDefault();
        const todo = {
            id: Math.floor(Math.random()*100),
            title: this.state.title,
            active: false,
            description: this.state.description || ''
        }
        const todos = [...this.state.todos];
        todos.push(todo);
        this.setState({todos}, () => {
            this.setState({
                title: '',
                description: ''
            });
        });
    }

    deleteTodo = id => {
        const todos = [...this.state.todos];
        const filteredTodos = todos.filter(todo => todo.id !== id);
        this.setState({
            todos: filteredTodos
        });
    }

    toggleActive = id => {
        const todos = [...this.state.todos];
        const todoIndex = todos.findIndex(todo => todo.id === id);
        todos[todoIndex].active = !todos[todoIndex].active;
        this.setState({todos});
    }

    toggleAddTodo = () => {
        this.setState({showAddTodo: !this.state.showAddTodo})
    }

    render(){
        let addTodo = null;
        if(this.state.showAddTodo){
            addTodo = (<AddTodo 
            handleTitleInput={this.handleTitleInput} 
            handleDescriptionInput={this.handleDescriptionInput} 
            addTodo={this.addTodo}
            title={this.state.title}
            description={this.state.description}
        />);
        }
        return (
            <div className="App">
                <Header title='TodoApp' />
                <div className="addTodoWrapper mb-3" style={{textAlign: 'center'}} onClick={this.toggleAddTodo} >
                    <button className="btn btn-primary">
                        Add new Todo
                    </button>
                </div>
                {addTodo}
                <TodoList
                    todos={this.state.todos} 
                    deleteTodo={this.deleteTodo}
                    toggleActive={this.toggleActive} 
                />
            </div>
        );
    }
}

export default App;