import React from 'react';
import { connect } from 'react-redux';
import { fetchTasks, changeStatus, createTask } from '../../actions/taskActions';
import Tasks from './tasks'

const TaskList = React.createClass({
  componentDidMount: function() {
    this.props.fetchTasks(this.props.list.id);
  },

  render: function() {
    return (
      <div className="task-list">

        <div className="panel panel-default">
          <div className="panel-heading">
            <span>{ this.props.list.name }</span>
          </div>

          <div className="panel-body">
            {
              (this.props.isFetching || !this.props.tasks)
                ? <div>loading...</div>
                : <Tasks
                    tasks={this.props.tasks}
                    changeStatus={this.props.changeStatus}
                    createTask={
                      (name)=> this.props.createTask(this.props.list.id, name) } />
            }
          </div>

        </div>
      </div>
    );
  }
});


function mapStateToProps(state, ownProps) {
  const taskIds = state.tasks.byList[ownProps.list.id] || [];
  return {
    list: ownProps.list,
    tasks: taskIds.map(id => state.tasks.byId[id]),
    isFetching: state.tasks.isFetching,
	};
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
