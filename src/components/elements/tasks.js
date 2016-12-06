import React from 'react';
import { connect } from 'react-redux';
import { fetchTasks, changeStatus, createTask } from '../../actions/taskActions';
import SplitBtn from '../simple/splitButton';
import { Form, FormGroup, PanelGroup, Panel} from 'react-bootstrap';
import InputForm from '../simple/inputForm';

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
        <Panel header="create new task" eventKey={0} key={0}>
          <InputForm
            placeholder="type in and hit enter"
            onClick= { this.props.createTask } />
        </Panel>
        {
          this.props.tasks.map( (task, i) => {
            return (
              <Panel header={task.name} eventKey={i+1} key={i+1}>
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

const ChangeStatusSplitButton = (props) => {
  return (
      <FormGroup>
        <SplitBtn
          title={props.status}
          callback={props.changeStatus}
          options={["new", "open", "hold", "resolved", "rejected"]}/>
      </FormGroup>
    )
}

export default Tasks
