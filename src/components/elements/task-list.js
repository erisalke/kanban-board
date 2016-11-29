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
            <span>{ this.props.list.name }</span>
          </div>

          <div className="panel-body">
            {
              (this.props.isFetching || !this.props.tasks)
                ? <div>loading...</div>
                : this.props.tasks.map( (task, i) => {
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

// this.props.tasks.allIds.map( (id, i) => {
//     const task = this.props.tasks.byId[id];
//     return (
//       <Task
//         key={i}
//         props={task}
//         toggleTask={ () => { this.props.toggleTask(task.id, task.status) }}
//       />
//     )
//   })

function mapStateToProps(state, ownProps) {

  const result = {
    list: ownProps.props,
    tasks: [],//state.tasks,//.allIds.map(id => state.tasks.byId[id]),
    isFetching: state.tasks.isFetching,
	}
  console.log("STATE", result);
  return result
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
