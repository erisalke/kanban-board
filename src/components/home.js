import React from 'react';
import { connect } from 'react-redux';
import { fetchTasks, fetchTaskLists } from '../actions/api';


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
