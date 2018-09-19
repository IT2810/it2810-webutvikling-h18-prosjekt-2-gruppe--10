import React from "react";

const Image = ({image}) => {

  // Setter teksten til svg-filen rett inn i HTML-strukturen
  return (
    <div className="image"
      dangerouslySetInnerHTML={{ __html: image ? image : "Loading" }}
    />
  )
}

export default Image;
