import React from 'react';
import { connect } from 'react-redux';
import TaskList from './task-list';
import { fetchTaskLists } from '../../actions/task-list-actions';


const Board = React.createClass({
  componentDidMount: function() {
    this.props.fetchTaskLists()
  },

  render: function() {
    return (
      <div className="row">
        {
          this.props.isFetching || !this.props.taskLists
            ? <div>loading...</div>
            : this.props.taskLists.map( (taskList, i) =>
                <TaskList key={ i } props={taskList}/>
              )
        }
      </div>
    );
  }
});

function mapDispatchToProps(dispatch, ownProps) {
  return {
    fetchTaskLists : () => {
      dispatch(fetchTaskLists())
    },
  }
}

function mapStateToProps(state, ownProps) {
  return {
    taskLists: state.taskLists.allIds.map(id => state.taskLists.byId[id]),
    isFetching: state.taskLists.isFetching,
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
