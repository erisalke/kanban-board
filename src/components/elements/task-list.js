import React from 'react';
import { connect } from 'react-redux';
import { fetchTasks, fetchTaskLists } from '../../actions/api';
import TaskCard from './task-card'

const TaskList = React.createClass({
  render: function() {
    return (
      <div className="col-md-3">
        <div className="panel panel-default">
          <div className="panel-heading">
              {this.props.list.name}
          </div>

          <div className="panel-body">
              {
                this.props.tasks.map( (task, i) => {
                    return (
                        <TaskCard key={i} props={task} />
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
    list: ownProps.props,
    tasks: state.tasks.filter( task => task.task_list_id === ownProps.props.id )
	}
}

export default connect(mapStateToProps)(TaskList);
