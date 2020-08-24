import React from 'react';
import { connect } from 'react-redux';
import { addTask, deleteTask, editTask, completeTask } from './ActionCreator.js'
import './ToDoApp.css';

const mapStateToProps = state => {
    return { tasks: state }
}

class ToDoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            id: null
        };
    }

    handleChange = e => {
        this.setState({
            inputValue: e.target.value,
        })
    }
    handleSave = () => {
        const text = this.state.inputValue;
        if (this.state.id !== null) {
            this.props.dispatch(editTask(
                parseInt(this.state.id),
                text
            ))
        }
        else {
            this.props.dispatch(addTask(text))
        }
        this.setState({
            inputValue: '',
            id: null
        })
    }

    handleDeleteTask = (id) => {
        this.props.dispatch(deleteTask(id))
    }

    handleEditTask = (id, text) => {
        document.getElementById('inputTask').focus();
        this.setState({
            inputValue: text,
            id: id
        })
    }

    handleCompleteTask = (e, id) => {
        this.props.dispatch(completeTask(id, e.target.checked))
    }

    render() {
        let totalLength = this.props.tasks.length;
        let completedLength = this.props.tasks.filter((task) => task.complete === true).length;
        return (
            <div className="todoDiv">
                <h3>To-Do App</h3>
                <div>
                    {totalLength < 1 ? `Total Tasks: ${totalLength}` : `Total Tasks: ${totalLength}`}
                </div>
                <div>
                    {completedLength < 1 ? `Completed Tasks: ${completedLength}` : `Completed Tasks: ${completedLength}`}
                </div>
                <br />
                <input id="inputTask" type='text' value={this.state.inputValue} placeholder="Enter task" onChange={this.handleChange} />
                <button id="saveButton" onClick={this.handleSave}>Save</button>
                {
                    this.props.tasks.length > 0
                        ? <ul className="taskList">{
                            this.props.tasks.map((task, index) => {
                                return <li key={index}>
                                    {task.text}
                                    <button onClick={() => this.handleEditTask(task.id, task.text)}>Edit Task</button>
                                    <button onClick={() => this.handleDeleteTask(task.id)}>Delete Task</button>
                                    <input type="checkbox" onChange={(e) => this.handleCompleteTask(e, task.id)} /> <label>Complete Task</label>
                                </li>
                            })}
                        </ul>
                        : <div>No Tasks found</div>
                }
            </div>
        )
    }
}
export default connect(mapStateToProps)(ToDoApp);