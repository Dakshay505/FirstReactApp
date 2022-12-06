import React from "react";

export default function Alert(props) {
    let cap =(word)=>{
        let d=word.toLowerCase();
        return d.charAt(0).toUpperCase()+d.slice(1);

    }
  return (
    
     props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{cap(props.alert.type)}</strong>:{props.alert.msg}
      </div>

  );
}
