import React from 'react';
import { connect } from 'react-redux';
import Task from './task';
import { fetchTasks, toggleTask } from '../../actions/task-actions';


const TaskList = React.createClass({
  componentDidMount: function() {
    this.props.fetchTasks(this.props.list.id)
  },

  render: function() {
    return (
      <div className="col-md-3">
        <div className="panel panel-default">

          <div className="panel-heading">
            <span>{this.props.list.name}</span>
          </div>

          <div className="panel-body">
            {
              this.props.isFetching || !this.props.tasks
                ? <div>loading...</div>
                : this.props.tasks.byId.map( (id, i) => {
                    const task = this.props.tasks.all[id];
                    return (
                      <Task
                          key={i}
                          props={task}
                          toggleTask={ () => { this.props.toggleTask(task.id, task.status) }}
                        />
                      )
                  })
            }
          </div>

        </div>
      </div>

    );
  }
});


function mapStateToProps(state, ownProps) {
  return {
    list: state.taskLists.all[ownProps.props],
    tasks: state.tasks,//[ownProps.props.id],
    isFetching: state.tasks.isFetching,
	}
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    fetchTasks : (listId) => {
      dispatch(fetchTasks(listId))
    },
    toggleTask : (id, status) => {
      dispatch(toggleTask(id, status))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
