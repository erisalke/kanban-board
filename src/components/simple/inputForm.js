import React from 'react';


export default function (props) {
	var input;

  return (
		<div>
			<input ref={text => {
				input = text;
			}} />

			<button
        type="button"
        className="btn btn-default"
        onClick={() => {
					console.log(input.value);
					props.onClick(input.value)
					input.value = ''
				}}>
          { props.buttonName }
      </button>

		</div>
  );
};