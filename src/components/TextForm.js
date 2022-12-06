import React, { useState } from "react";

export default function TextForm(props) {
  let [text, setText] = useState("");
  let UppercaseFunc = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.alert("primary", "The text converted to upper case");
  };

  let LowercaseFunc = () => {
    console.log("Hiii Uppercase here");
    let newText = text.toLowerCase();
    setText(newText);
    props.alert("primary", "The text converted to lower case");
  };
  let Reverse = () => {
    let newText = "";
    for (let i = text.length - 1; i >= 0; i--) {
      newText += text[i];
    }
    setText(newText);
    props.alert("danger", "The text has been reversed");
  };
  // copy text function
  let Copy = () => {
    let textCopy = document.getElementById("exampleFormControlTextarea1");
    textCopy.select();
    navigator.clipboard.writeText(textCopy.value);
    props.alert("sucess", "The text has been copied");
  };
  // remove extra spaces
  let RemoveSpaces = () => {
    let extra = text.split(/[ ]+/);
    setText(extra.join(" "));
    props.alert("primary", "The extra spaces has been removed");
  };
  let Clear = () => {
    let newText = "";
    setText(newText);
    props.alert("warning", "The text has been cleared");
  };
  let changefunc = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className="container">
        <div className="mb-3 ">
          <h1 className={`text-${props.mode === "dark" ? "light" : "dark"}`}>
            {props.title}
          </h1>
          <textarea
            className="form-control my-3"
            id="exampleFormControlTextarea1"
            value={text}
            rows="8"
            onChange={changefunc}
          ></textarea>
          <button className="btn btn-primary mx-2" onClick={UppercaseFunc}>
            UpperCase
          </button>
          <button className="btn btn-danger mx-2" onClick={LowercaseFunc}>
            LowerCase
          </button>
          <button className="btn btn-danger mx-2" onClick={Reverse}>
            Reverse
          </button>
          <button className="btn btn-danger mx-2" onClick={Copy}>
            Copy
          </button>
          <button className="btn btn-danger mx-2" onClick={RemoveSpaces}>
            Remove Spaces
          </button>
          <button className="btn btn-warning mx-2" onClick={Clear}>
            Clear
          </button>
        </div>
        <h2 className={`text-${props.mode === "dark" ? "light" : "dark"}`}>
          Preview
        </h2>
        <p className={`text-${props.mode === "dark" ? "light" : "dark"}`}>
          <b>
            total charcters-{text.length} || total Words-
            {
              text.split(" ").filter((e) => {
                return e.length !== 0;
              }).length
            }
          </b>
        </p>
        <h4 className={`text-${props.mode === "dark" ? "light" : "dark"}`}>
          View
        </h4>
        <p className={`text-${props.mode === "dark" ? "light" : "dark"}`}>
          {text}
        </p>
      </div>
    </>
  );
}
