import React from 'react';
import TodoList from './todos-list';

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
    render() {
        return(
            <div>
                <h1> React todos app </h1>
                <TodoList />
            </div>
        );
    }
}
