import React from 'react';
import TodoList from './todos-list';
import CreateTodoForm from './create-todo';

const todos = [
    {
        task: 'Make react tutorial',
        done: false
    },
    {
        task: 'Go to gym',
        done: false
    },
    {
        task: 'Bake a cake',
        done: true
    },
    {
        task: 'Walk the dog',
        done: false
    },
    {
        task: 'Do the dishes',
        done: false
    }
];

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            todos // Same as todos: todos
        };
    }

    render() {
        return(
            <div>
                <h1> React todos app </h1>
                <CreateTodoForm createTask={this.createTask.bind(this)}/>
                <TodoList
                todos={this.state.todos}
                toggleTask={this.toggleTask.bind(this)}
                saveTask={this.saveTask.bind(this)}
                deleteTask={this.deleteTask.bind(this)}/>
            </div>
        );
    }

    createTask(task) {
        this.state.todos.push({
            task,
            done: false
        });
        this.setState({todos: this.state.todos});
    };

    toggleTask(task) {
        const foundTodo = _.find(this.state.todos, todo => todo.task === task);
        foundTodo.done = !foundTodo.done;
        this.setState({todos: this.state.todos});
    };

    saveTask(oldTask, newTask) {
        const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
        foundTodo.task = newTask;
        this.setState({todos: this.state.todos});
    };

    deleteTask(taskToDelete) {
        const foundTodo = _.remove(this.state.todos, todo => todo.task === taskToDelete);
        this.setState({todos: this.state.todos});
    }
}
