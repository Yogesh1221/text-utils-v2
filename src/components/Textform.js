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
        navigator.clipboard.writeText(text);
        
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
            <h1 className='mb-2' >{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'#333030', color: props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-outline-primary mx-1 my-1" onClick={handleOnUpClick}>Convert to Upper-Case</button>
            <button disabled={text.length===0} className="btn btn-outline-primary mx-1 my-1" onClick={handleOnLoClick}>Convert to Lower-Case</button>
            <button disabled={text.length===0} className="btn btn-outline-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
            <button disabled={text.length===0} className="btn btn-outline-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-outline-danger mx-1" onClick={handleOnClearClick}>Clear Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
            <h2>Your text summary</h2>
            <p><b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</b> Words and <b>{text.length}</b> Character</p>
            <p><b>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length}</b>Minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to Preview"}</p>
        </div> 
        </>
    )
}
