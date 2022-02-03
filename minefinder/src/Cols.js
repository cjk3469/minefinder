import React, { useState } from 'react';

function Cols(){

    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value);
    };

    const onReset = () => {
        setText('');
    };
    
    const colVal = Number(text);

    return (
        <div>
          <input onChange={onChange} value={colVal}  />
          <button onClick={onReset}>초기화</button>
          <div>
            <b>col: {colVal}</b>
          </div>
        </div>
    );
}

export default Cols;