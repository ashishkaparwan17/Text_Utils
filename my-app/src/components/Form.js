import React, { useState } from 'react'

export default function Form(props) {
    const [text, changeText] = useState("");
    const handleOnChange = (event) => {
        changeText(event.target.value);
    }
    const convertToUppercase = () => {
        let newText = text.toUpperCase();
        changeText(newText);
        props.showAlert("success","Text has been converted to upper case!");
    }
    const convertToLowercase = () => {
        let newText = text.toLowerCase();
        changeText(newText);
        props.showAlert("success","Text has been converted to lower case!");
    }
    const clearText = () => {
        changeText("");
        props.showAlert("success","Text has been cleared!");
    }
    const copyText=()=>{       
        navigator.clipboard.writeText(text);
        props.showAlert("success","Copied to clipboard!");
    }
    let words = text.split(/\s+/).filter((word)=>{return word.length>0}).length
    const myStyle={
        backgroundColor: props.mode==='dark'?'#2c3e50':'white',
        height: '100vh',
        color: props.mode==="light"?"black":"white"
    };
    return (
        <div style={myStyle}>
            <div className="container pt-3">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea style={{backgroundColor: props.mode==='dark'?'#2c3e50':'white',color: props.mode==="light"?"black":"white"}} value={text} placeholder="Enter text here" onChange={handleOnChange} className="form-control" id="textAreaTowrite" rows="10"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary" onClick={convertToUppercase}>Convert to upper</button>
                <button disabled={text.length===0} className="btn btn-primary mx-3" onClick={convertToLowercase}>Convert to lower</button>
                <button disabled={text.length===0} className="btn btn-primary" onClick={clearText}>Clear text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-3" onClick={copyText}>Copy text</button>
            </div>
            <div className="container mt-3">
                <h1>Your text summary</h1>
                <p>{words} words and {text.length} characters</p>
                <p>{0.08 * words} mintues read</p>
                <h1>Preview</h1>
                <p>{text !== "" ? text : "Enter something in the textbox to preview here!"}</p>
            </div>
        </div>
    )
}

