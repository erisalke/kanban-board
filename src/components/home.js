import React from 'react';
import { connect } from 'react-redux';
import { fetchTaskLists } from '../actions/task-lists-actions';
import { fetchTasks } from '../actions/tasks-actions';
import KanbanBoard from './elements/kanban-board';

const Home = React.createClass({
  render: function() {
    return (
      <div className="home-page">

        <h1>hello world</h1>

        <div>
          Hey hello
        </div>

        <div>
          <button onClick={ this.props.fetchTaskLists } >Get all lists</button>
          <button onClick={ this.props.fetchTasks } >Get all tasks</button>
        </div>

        <KanbanBoard />

      </div>
    );
  }
});

function mapDispatchToProps(dispatch, ownProps) {
  return {
    fetchTasks : () => {
			dispatch(fetchTasks())
		},
    fetchTaskLists : () => {
			dispatch(fetchTaskLists())
		},
	}
}

export default connect(null, mapDispatchToProps)(Home);
