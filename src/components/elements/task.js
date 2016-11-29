import React from 'react';
import { connect } from 'react-redux';
import { Checkbox } from 'react-bootstrap';

const Task = React.createClass({
  render: function() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <div className="row">
                <div className="col-xs-2">
                  <Checkbox
                    onChange={ this.props.toggleTask }/>
                </div>
                <div className="col-xs-10">
                  { this.props.task.name }
                </div>
              </div>
            </div>
            <a href="#">
              <div className="panel-footer">
                status: {this.props.task.status}
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
});

function mapStateToProps(state, ownProps) {
  return {
    task: ownProps.props,
	}
}

export default connect(mapStateToProps)(Task);
