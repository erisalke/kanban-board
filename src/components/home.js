import React from 'react';
import { connect } from 'react-redux';
import { executeApiCall } from '../actions/api';


const Home = React.createClass({
  render: function() {
    return (
      <div className="home-page">
        <h1>hello world</h1>

        <div>
          <button onClick={ this.props.executeApiCall } >Button</button>
        </div>

        <div>
          Hey hello
        </div>

      </div>
    );
  }
});

function mapDispatchToProps(dispatch, ownProps) {
  return {
		executeApiCall : () => {
			dispatch(executeApiCall())
		}
	}
}

export default connect(null, mapDispatchToProps)(Home);
