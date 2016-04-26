import _ from 'lodash';
import React from 'react';
import TodoListHeader from './todo-list-header';
import TodoListItem from './todo-list-item';

export default class Todos extends React.Component {

    renderItems() {
        return _.map(this.props.todos, (todo, index) => <TodoListItem key={index} {...todo }/>);
        // {...todo} = task={todo.task} done={task.done}
    };

    render() {
        console.log(this.props);
        return(
            <table>
                <TodoListHeader />
                <tbody>
                    {this.renderItems()}
                </tbody>
            </table>
        );
    }
}
