import React from 'react';
import { SplitButton, MenuItem } from 'react-bootstrap';
import { v4 } from 'node-uuid';

const SplitBtn = (props) => {
  return (
    <SplitButton
      id={v4()}
      bsStyle="default"
      title={props.title}
      onSelect={ eventKey => props.callback(eventKey) }>
        {
          props.options.map(opt =>
            <MenuItem id={opt} eventKey={opt} key={v4()}>{opt}</MenuItem>
          )
        }

    </SplitButton>
  );
};

export default SplitBtn;
