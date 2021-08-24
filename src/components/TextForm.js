import React,{useState} from "react";
import PropTypes from 'prop-types'

function TextForm(props) {
  
    const [text,setText] = useState("");
    const convToUpr = () => {
        setText(text.toUpperCase());
        props.showAlert("Successfully converted all characters to uppercase","success")
    }
    const convToLow = () => {
        setText(text.toLowerCase());
        props.showAlert("Successfully converted all characters to lowecase","success")
    }
    const clear = () => {
        setText("");
        props.showAlert("Successfully cleared all characters","success")
    }
    const onChangeText = (event) => {
        setText(event.target.value);
        
    }

    const copyText = () =>{
      let text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Successfully copied to clipboard","success")
    }

    const removeExtraSpace = () =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Successfully removed extra spaces","success")
    }

    /*
    Cannot update a component (`App`) while rendering a different component (`TextForm`).
    To locate the bad setState() call inside `TextForm`, follow the stack trace as described in
    Below Code is causing such a problem 
    👇
    */
    props.onSummaryUpdate(text);
   
  return (
    <div className="container my-3 " style={{color:props.mode==='light'?'black':'white'}}>
        <h1 className="mb-2">{props.heading}</h1>
      <div className="mb-3" >
        <textarea id="myBox" className="form-control" value={text} onChange={onChangeText} rows="8" style={{color:props.mode==='light'?'black':'white',backgroundColor:props.mode==='light'?'white':'black'}}></textarea>
      </div>
      <button disabled={text.length===0} className={`btn btn-outline-${props.mode==='light'?'primary':'light'} mx-2 my-2`} onClick={convToUpr}>Convert To UpperCase</button>
      <button disabled={text.length===0} className={`btn btn-outline-${props.mode==='light'?'primary':'light'} mx-2 my-2`} onClick={convToLow}>Convert To LowerCase</button>
      <button disabled={text.length===0} className={`btn btn-outline-${props.mode==='light'?'primary':'light'} mx-2 my-2`} onClick={clear}>Clear</button>
      <button disabled={text.length===0} className={`btn btn-outline-${props.mode==='light'?'primary':'light'} mx-2 my-2`} onClick={copyText}>Copy Text</button>
      <button disabled={text.length===0} className={`btn btn-outline-${props.mode==='light'?'primary':'light'} mx-2 my-2`} onClick={removeExtraSpace}>Remove Extra Spaces</button>
    </div>
  );
}

TextForm.prototype ={
    heading:PropTypes.string,
}

export default TextForm;
