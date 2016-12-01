import React from 'react';
import { connect } from 'react-redux';
import { fetchTaskLists } from '../actions/taskListActions';
import { fetchTasks } from '../actions/taskActions';
import Board from './elements/board';

const Home = React.createClass({
  render: function() {
    return (
      <div className="fluid-container">

        <h1>Kanban Board</h1>

        <div>
          <button onClick={ this.props.fetchTaskLists } >Get all lists</button>
          <button onClick={ this.props.fetchTasks } >Get all tasks</button>
        </div>

        <br/>
        <Board />

      </div>
    );
  }
});

function mapDispatchToProps(dispatch, ownProps) {
  return {
    fetchTasks : () => {
			dispatch(fetchTasks());
		},
    fetchTaskLists : () => {
			dispatch(fetchTaskLists());
		},
	};
}

export default connect(null, mapDispatchToProps)(Home);
