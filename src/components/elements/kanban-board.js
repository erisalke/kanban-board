import React from 'react';
import { connect } from 'react-redux';
import TaskList from './task-list';

const KanbanBoard = React.createClass({
  render: function() {
    return (
      <div className="row">
        {
          this.props.isFetching
            ? <div>loading...</div>
            : this.props.taskLists.map( (taskList, i) => {
                return <TaskList key={ i } props={taskList}/>
              })
        }
      </div>
    );
  }
});

function mapStateToProps(state, ownProps) {
  return {
    taskLists: state.taskLists.items,
    isFetching: state.taskLists.isFetching,
	}
}

export default connect(mapStateToProps)(KanbanBoard);
