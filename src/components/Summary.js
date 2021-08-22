import React from 'react'

function Summary(props) {
    let noOfWords = 0;
    let noOfChar = 0;
    if(props.textSum.length<1){
            noOfWords = 0;
            noOfChar = 0;
    }else{
            noOfWords = props.textSum.trim().split(" ").length;
            noOfChar = props.textSum.length;
    }

    return (
        <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
            <h1>Your Text Summary</h1>
            <p>{noOfWords} words and {noOfChar} characters</p>
            <p>{noOfWords*0.008} Minutes read</p>
            <h2>{noOfWords<1?"Enter Text":"Preview"}</h2>
            <p>{props.textSum}</p>
        </div>
    )
}

export default Summary
