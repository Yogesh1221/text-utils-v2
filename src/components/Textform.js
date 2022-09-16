import React, { useState } from 'react'

export default function Textform(props) {
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handleOnUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to UpperCase', 'success');
    }
    const handleOnLoClick = ()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to LowerCase','success');
    }
    const handleOnClearClick=()=>{
        let newText='';
        setText(newText);
        props.showAlert('Text Cleared!','danger');
    }
    const handleCopy=()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Copied to Clipboard!','success');
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/); 
        setText(newText.join(" "));
        props.showAlert('Extra spaces removed','success');
    }
    const [text, setText] = useState('')
    return (
        <>
        <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
            <h1 >{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'black', color: props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-outline-primary mx-1" onClick={handleOnUpClick}>Convert to Upper-Case</button>
            <button className="btn btn-outline-primary mx-1" onClick={handleOnLoClick}>Convert to Lower-Case</button>
            <button className="btn btn-outline-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
            <button className="btn btn-outline-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-outline-danger mx-1" onClick={handleOnClearClick}>Clear Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
            <h2>Your text summary</h2>
            <p><b>{text.split(" ").length-1}</b> Words and <b>{text.length}</b> Character</p>
            <p><b>{0.008*text.split(" ").length}</b>Minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
        </div> 
        </>
    )
}
