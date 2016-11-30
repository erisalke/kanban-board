import React from 'react';
import { connect } from 'react-redux';
import { Checkbox, Form, FormGroup, FormControl, Button} from 'react-bootstrap';

const FormInstance = (props) => {
  return (
    <Form inline>
      <FormControl type="text" placeholder="create new task" />
      {' '}
      <Button type="submit">
        Create
      </Button>
    </Form>
  )
}

const NewTask = function(props) {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="panel panel-info">
          <div className="panel-heading">
            <div className="row">

              <div className="col-xs-2">
                <Checkbox />
              </div>
              <div className="col-xs-10">
                <FormInstance />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};




export default NewTask;
