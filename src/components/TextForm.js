import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpChange = () => {
      // console.log("change to uppercase");
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to Uppercase", "success");
    };

    const handleLoChange = () => {
        // console.log("change to uppercase");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    };
    
    const handleRepeatChange = () => {
        // console.log("change to uppercase");
        let newText = text.repeat(2);
        setText(newText);
    };
    
    const handleClearChange = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared", "success");
    };

  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <textarea
          rows="8"
          className="form-control my-3"
          placeholder="Enter Text here"
          id="floatingTextarea"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor: props.mode==='light'?'white':'rgb(6, 48, 65)', color: props.mode==='light'?'black':'white'}}
        ></textarea>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpChange}>
          Change to Uppercase
        </button>
        <button className="btn btn-warning mx-1 my-1" onClick={handleLoChange}>
          Change to Lowercase
        </button>
        <button className="btn btn-danger mx-1 my-1" onClick={handleClearChange}>
          Clear Text
        </button>
        <button className="btn btn-secondary mx-1 my-1" onClick={handleRepeatChange}>
          Repeat Text
        </button>
      </div>

      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:'Enter text to Preview'}</p>
      </div>
    </>
  );
}
