import React from 'react';
import { connect } from 'react-redux';
import { fetchTasks, fetchTaskLists } from '../../actions/api';
import TaskList from './task-list';

const KanbanBoard = React.createClass({
  render: function() {
    return (
        <div className="row">
            {
                this.props.taskLists.map( (taskList, i) => {
                    return (
                        <TaskList key={ i } props={taskList}/>
                    )
                })
            }
        </div>
    );
  }
});


function mapStateToProps(state, ownProps) {
  return {
    taskLists: state.taskLists
	}
}

export default connect(mapStateToProps)(KanbanBoard);
