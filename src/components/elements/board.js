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
          this.props.isFetching
            ? <div>loading...</div>
            : this.props.taskLists.byId.map( (taskList, i) => {
                return <TaskList key={ i } props={taskList}/>
              })
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
    taskLists: state.taskLists,
    isFetching: state.taskLists.isFetching,
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
