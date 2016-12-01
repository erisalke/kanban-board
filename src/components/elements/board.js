import React from 'react';
import { connect } from 'react-redux';
import TaskList from './taskList';
import { fetchTaskLists, createTaskList } from '../../actions/taskListActions';
import NewTaskList from './newTaskList';


const Board = React.createClass({
  componentDidMount: function() {
    this.props.fetchTaskLists();
  },

  render: function() {
    return (
      <div className="scrolls">

        {
          this.props.isFetching || !this.props.taskLists
            ? <div>loading...</div>
            : this.props.taskLists.map( (taskList, i) =>
                <TaskList key={ i } list={taskList}/>
              )
        }

        <NewTaskList onClick={ this.props.createTaskList  } />
        
      </div>
    );
  }
});

function mapDispatchToProps(dispatch, ownProps) {
  return {
    fetchTaskLists : () => {
      dispatch(fetchTaskLists());
    },
    createTaskList : (name) => {
      dispatch(createTaskList(name));
    }
  };
}

function mapStateToProps(state, ownProps) {
  return {
    taskLists: state.taskLists.allIds.map(id => state.taskLists.byId[id]),
    isFetching: state.taskLists.isFetching,
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
