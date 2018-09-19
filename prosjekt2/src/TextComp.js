import React from "react";

const TextComp = ({text}) => {

  return (
    <div className="text">
      <p><i>{text.body}</i></p>
      <p><b>{text.author}</b></p>
    </div>
  )
}

export default TextComp;
