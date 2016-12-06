import React from 'react';
import { FormGroup } from 'react-bootstrap';
import SplitBtn from '../simple/splitButton';

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

export default ChangeStatusSplitButton;
