import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('Enter text Here');
  var [btnTxt, setbtnTxt] = useState('Convert to Uppercase');
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleloClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleCopy = () => {
    var text = document.getElementById('myBox');
    console.log(text.value);
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleRemoveSpaces = () => {
    // console.log(text);
    // let newText = text.value.split(/[ ]+/);
    // console.log(newText);
    // setText(newText.join(' '));
  };
  return (
    <div>
      <h1> {props.heading} </h1>
      <div className="mb-3">
        <textarea
          className="from-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button onClick={handleUpClick} className="btn btn-primary">
        {btnTxt}
      </button>

      <button className="btn btn-primary mx-3" onClick={handleloClick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>
        Copy Text
      </button>
      <button className="btn btn-primary mx-1" onClick={handleRemoveSpaces}>
        Remove Spaces
      </button>
      <div className="container my-2">
        <h1> Your Text Summary </h1>
        <p>
          {' '}
          {text.length} is the total word and {text.split(' ').length} is the
          total word{' '}
        </p>
        <p> {0.08 * text.split(' ').length} is total time taken to read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Nothing to preview!'}</p>
      </div>
    </div>
  );
}
