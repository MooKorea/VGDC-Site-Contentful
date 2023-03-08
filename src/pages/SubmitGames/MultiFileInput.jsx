import React, { useState } from "react";
import AddBox from "./AddBox";

export default function MultiFileInput({additionalMediaRef}) {
  const handleThumbnailUpload = (e) => {
    if (e.target.files[0].size > 4194304) {
      alert("File is too big!");
      e.target.value = "";
    }
  };

  const handleAddMedia = () => {
    setMediaId(++mediaId);
    setMedia((prevMedia) => {
      return [
        ...prevMedia,
        <input
          className="additional-media-input"
          type="file"
          id={`media${mediaId}`}
          name={`media${mediaId}`}
          title="maximum 4 MB"
          accept="image/png, image/jpeg"
          onChange={handleThumbnailUpload}
        ></input>,
      ];
    });
  };

  let [mediaId, setMediaId] = useState(0);
  const [media, setMedia] = useState([]);
  function addButton() {
    if (media.length === 3) return null;
    return <AddBox handleAddMedia={handleAddMedia} />;
  }

  return (
    <div className="additional-media" ref={additionalMediaRef}>
      <div className="title">Additional Media</div>
      {media}
      {addButton()}
    </div>
  );
}
