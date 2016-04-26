import React from 'react';

export default class CreateTodoForm extends React.Component {
    render() {
        return(
            <form>
                <input type="text" placeholder="What do you need to do ?" />
                <button> Create </button>
            </form>
        )
    }
}
