import React from "react";

const Sound = ({ category, filename }) => {

  // På load henter den ut korrekt lydfil etter valgt kategori og tab
  return (
    <div className="sound">
      <audio type="audio/mpeg" src={`sound/${category}/${filename}.mp3`} controls />
    </div>
  );
}

export default Sound;
