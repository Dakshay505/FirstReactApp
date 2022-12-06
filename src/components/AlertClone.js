import React from "react";

export default function AlertClone(props) {
    let cap =(word)=>{
        let d=word.toLowerCase();
        return d.charAt(0).toUpperCase()+d.slice(1);
    }
  return (<div style={{height:'50px'}}>{
    props.alert &&
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert">
        <strong>{cap(props.alert.type)}</strong>:{props.alert.text}
      </div>
     }
 </div>
  );
}
