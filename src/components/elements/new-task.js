import React from 'react';
import { connect } from 'react-redux';
import { Checkbox, Form, FormGroup, FormControl, Button} from 'react-bootstrap';
import InputForm from '../simple/inputForm';


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
                <InputForm
                  buttonName="Ok!"
                  onClick= { props.createTask } />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTask;
