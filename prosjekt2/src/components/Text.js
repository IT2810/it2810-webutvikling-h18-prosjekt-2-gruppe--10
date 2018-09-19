import React from "react";

const Text = ({text}) => {

  return (
    <div className="text">
      <p><i>{text.body}</i></p>
      <p><b>{text.author}</b></p>
    </div>
  )
}

export default Text;
