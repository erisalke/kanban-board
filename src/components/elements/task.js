import React from 'react';
import { connect } from 'react-redux';
import { Checkbox } from 'react-bootstrap';
import SplitBtn from '../simple/split-btn';


const Task = function(props) {
  const isSelected = props.status === "resolved" || props.status === "rejected";
  const newStatus = isSelected ? "open" : "resolved";

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="panel panel-primary">

          <div className="panel-heading">
            <div className="row">

              <div className="col-xs-1">
                <Checkbox
                  checked={isSelected}
                  onChange={ () => props.changeStatus(newStatus) }/>
              </div>

              <div className="col-xs-10">
                { props.name }
              </div>

            </div>
          </div>

          <div className="panel-footer">
            <SplitBtn
              title={props.status}
              callback={props.changeStatus}
              options={["new", "open", "hold", "resolved", "rejected"]}/>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Task;
