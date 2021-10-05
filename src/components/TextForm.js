/* eslint-disable no-restricted-globals */
import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=> {
    // console.log("Uppercase was Clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  }

  const handleLoClick = ()=> {
    // console.log("Uppercase was Clicked: " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");

  }

  const handleOnClear = ()=> {
    // console.log("Uppercase was Clicked: " + text);
    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared", "success");

  }

  const handleOnChange = ()=> {
    console.log("On Change");
    setText(event.target.value);
  }

  const handleCopy = ()=> {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard", "success");

  }

  const [text, setText] = useState('');
  console.log(useState('Enter Text Here'));

  //text = "new text";                     //Wrong way to change the state
  //setText("new text");                   //Correct way to change the state

    return (       
       <>
        <div className = "container" style={{color: props.mode==='dark'?'white':'#042743'}}>    
          <h1 >{props.heading}</h1>
          <div className="mb-3">
            {/* <label for="myBox" class="form-label">Example textarea</label> */}
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
          </div>
          <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To Uppercase</button>
          <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert To Lowercase</button>
          <button className="btn btn-primary mx-1" onClick={handleOnClear}>Clear Text</button>
          <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
          <h2>Your Text Summary</h2>
          <p>{text.split(" ").length} Words and {text.length} Characters</p>
          <p>{0.008 * text.split(" ").length} Minutes read</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"Enter something in the textbox above to preview it here :)"}</p>
        </div>
        </>
    )
}
