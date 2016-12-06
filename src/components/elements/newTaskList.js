import React from 'react';
import InputForm from '../simple/inputForm';

function NewTaskList(props) {
  return (
    <div className="task-list">

      <div className="panel panel-default">
        <div className="panel-heading">
          <InputForm
            placeholder="create new task list"
            onClick={ props.onClick } />
        </div>

        <div className="panel-body">
          Just type above and hit enter
        </div>

      </div>
    </div>
  );
}

export default NewTaskList
