import React from "react";

const Sound = ({ category, filename }) => {
  return (
    <div className="Sounds">
      {/* På load henter den ut korrekt lydfil etter valgt kategori og tab */}
      <audio type="audio/mpeg" src={`sound/${category}/${filename}.mp3`} controls />
    </div>
  );
}

export default Sound;
