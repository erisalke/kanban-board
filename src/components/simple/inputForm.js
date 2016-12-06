import React from 'react';

export default function (props) {
	let input;

  return (
		<div>
      <input
				type="text"
				placeholder={ props.placeholder }
				ref={text => {
					input = text;
				}}

				onKeyPress={(e) => {
	        if (e.key === 'Enter') {
						props.onClick(input.value)
						input.value = ''
	        }
				}} />
		</div>
  );
};
