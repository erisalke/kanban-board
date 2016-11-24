import React from 'react';
import { connect } from 'react-redux';
import { fetchTasks, fetchTaskLists } from '../../actions/api';

import { Checkbox } from 'react-bootstrap';

const TaskCard = React.createClass({
  render: function() {
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <div className="row">
                            <div className="col-xs-2">
                                <Checkbox />
                            </div>
                            <div className="col-xs-10">
                                {this.props.task.name}
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

export default connect(mapStateToProps)(TaskCard);