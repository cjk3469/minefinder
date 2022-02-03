import React, { useState } from 'react';

function Rows(){

    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value);
    };

    const onReset = () => {
        setText('');
    };

    const rowVal = Number(text);
    return (
        <div>
          <input onChange={onChange} value={rowVal}  />
          <button onClick={onReset}>초기화</button>
          <div>
            <b>row: {rowVal}</b>
          </div>
        </div>
    );

}

export default Rows;