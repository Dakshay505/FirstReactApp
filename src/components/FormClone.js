import React,{useState} from "react";

export default function FormClone(props) {
    const [text, setText] = useState("")
    let word=text.split(" ").length;
    if(word===1){
        word=0;
    }else{
        word=text.split(" ").length;
    }
    let changefunc=(e)=>{
        setText(e.target.value);
        
    }
    let UppercaseFunc =()=>{
      let newT = text.toUpperCase();
      setText(newT);
      props.alert("warning","The text has been updated to Uppercase");
    }
    let LowercaseFunc = ()=>{
       let newT = text.toLowerCase();
       setText(newT);
       props.alert("info","The text has been updated to Lowercase");
    }
    let Reverse=()=>{
        let newT='';
        for(let i=text.length-1;i>=0;i--){
            newT+=text[i];
        }
        setText(newT);
        props.alert("warning","The text has been updated to Reverse");
    }
    let Copy = ()=>{
        let newT=document.getElementById('exampleFormControlTextarea1');
        newT.select(); 
        document.getSelection().removeAllRanges();
        navigator.clipboard.writeText(newT.value);
        props.alert("success","The text has been copied");
    }
    let RemoveSpaces =()=>{
        let newT=text;
        newT=newT.split(/[ ]+/);
        newT=newT.join(" ");
        setText(newT);
        props.alert("primary","The extra spaces has been removed");
    }
    let Clear =()=>{
        setText('');
        props.alert("danger","The text has been cleared");

    }
  return (
    <div className="container">
      <div className="mb-3">
      <textarea
            className="form-control my-3"
            id="exampleFormControlTextarea1"
            value={text}
            rows="8"
            onChange={changefunc}
          ></textarea>
          <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={UppercaseFunc}>
            UpperCase
          </button>
          <button disabled={text.length===0} className="btn btn-danger mx-2" onClick={LowercaseFunc}>
            LowerCase
          </button>
          <button disabled={text.length===0} className="btn btn-danger mx-2" onClick={Reverse}>
            Reverse
          </button>
          <button disabled={text.length===0} className="btn btn-danger mx-2" onClick={Copy}>
            Copy
          </button>
          <button disabled={text.length===0} className="btn btn-danger mx-2" onClick={RemoveSpaces}>
            Remove Spaces
          </button>
          <button disabled={text.length===0} className="btn btn-warning mx-2" onClick={Clear}>
            Clear
          </button>
          
      </div>
      <div className="container">
        <h1>Preview</h1>
        <p>Total char :{text.length}</p>
        <p>Total words :{word}</p>
        <h2>Your text</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
