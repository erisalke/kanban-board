import React from 'react';
import { connect } from 'react-redux';
import TaskCard from './task-card';
import { fetchTasks } from '../../actions/tasks-actions';


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
                    : this.props.tasks.map( (task, i) => {
                        return <TaskCard key={i} props={task} />
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
    list: ownProps.props,
    tasks: state.tasks.items[ownProps.props.id],
    isFetching: state.tasks.isFetching,
	}
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    fetchTasks : (listId) => {
      dispatch(fetchTasks(listId))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
