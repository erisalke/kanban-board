import React from 'react';
import { connect } from 'react-redux';
import { fetchTasks, changeStatus, createTask } from '../../actions/taskActions';
import { PanelGroup, Panel} from 'react-bootstrap';
import InputForm from '../simple/inputForm';
import ChangeStatusSplitButton from '../simple/changeStatusSplitButton';

const Tasks = React.createClass({
  getInitialState() {
    return {
      activeKey: -1
    };
  },

  handleSelect(activeKey) {
    this.setState({ activeKey });
  },

  render() {
    return (
      <PanelGroup activeKey={this.state.activeKey} onSelect={this.handleSelect} accordion>

        <Panel
          header={<div className="justwrapit">create new task</div>}
          eventKey={0}
          key={0}>
            <InputForm
              placeholder="type in and hit enter"
              onClick= { this.props.createTask } />
        </Panel>

        {
          this.props.tasks.map( (task, i) => {
            return (
              <Panel
                className="gowno"
                header={<div className="justwrapit">{task.name}</div>}
                eventKey={i+1}
                key={i+1}>
                  <ChangeStatusSplitButton
                    status={task.status}
                    changeStatus={
                      (status) => this.props.changeStatus(task.id, status)
                    } />
              </Panel>
            );
          })
        }

      </PanelGroup>
    );
  }
});

export default Tasks
