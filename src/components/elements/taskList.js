import React from 'react';
import { connect } from 'react-redux';
import Task from './task';
import { fetchTasks, changeStatus, createTask } from '../../actions/taskActions';
import NewTask from './newTask';


const TaskList = React.createClass({
  componentDidMount: function() {
    this.props.fetchTasks(this.props.list.id);
  },

  render: function() {
    return (
      <div className="my-box">
      
        <div className="panel panel-default">
          <div className="panel-heading">
            <span>{ this.props.list.name }</span>
          </div>

          <div className="panel-body">
            <NewTask createTask={
              (name)=> this.props.createTask(this.props.list.id, name) } />

            {
              (this.props.isFetching || !this.props.tasks)
                ? <div>loading...</div>
                : this.props.tasks.map( (task, i) => {
                    return (
                      <Task
                        key={i}
                        name={task.name}
                        status={task.status}
                        changeStatus={
                          (status) => { this.props.changeStatus(task.id, status); }
                        } />
                    );
                  })
            }

          </div>

        </div>
      </div>

    );
  }
});

function mapStateToProps(state, ownProps) {
  const taskIds = state.tasks.byList[ownProps.list.id] || [];
  const result = {
    list: ownProps.list,
    tasks: taskIds.map(id => state.tasks.byId[id]),
    isFetching: state.tasks.isFetching,
	};

  return result;
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    fetchTasks : (listId) => {
      dispatch(fetchTasks(listId));
    },
    changeStatus : (id, status) => {
      dispatch(changeStatus(id, status));
    },
    createTask : (listId, name) => {
      dispatch(createTask(listId, name));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
