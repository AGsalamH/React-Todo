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
            todo: '',
            describtion: '',
            showAddTodo: false
        }
    }

    addTodo = () => {
        const todo = {
            id: Math.floor(Math.random()*100),
            title: this.state.todo,
            active: false,
            describtion: this.state.describtion || ''
        }
        const todos = [...this.state.todos];
        todos.push(todo);
        this.setState({todos}, () => {
            this.setState({
                todo: '',
                describtion: ''
            });
        });
    }

    handleTodoInput = (e) => {
        const todo = e.target.value;
        this.setState({todo});
    }

    handleDescribtionInput = (e) => {
        const describtion = e.target.value;
        this.setState({describtion});
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

    render(){
        let addTodo = null;
        if(this.state.showAddTodo){
            addTodo = (<AddTodo 
            handleTodoInput={this.handleTodoInput} 
            handleDescribtionInput={this.handleDescribtionInput} 
            addTodo={this.addTodo}
            todo={this.state.todo}
            describtion={this.state.describtion}
        />);
        }
        return (
            <div className="App">
                <Header title='TodoApp' />
                <div className="addTodoWrapper mb-3" style={{textAlign: 'center'}} onClick={()=> this.setState({showAddTodo: !this.state.showAddTodo})} >
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