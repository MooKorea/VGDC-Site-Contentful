import React from "react";
import TextField from "../../components/FormFieldText";
import TextareaField from "../../components/FormFieldTextarea";
import ImageUploadField from "../../components/FormFieldImage";
import MultiFileInput from "./MultiFileInput";

export default function FormMain({
  formRef,
  thumbnailRef,
  additionalMediaRef,
  handleSubmit,
  handleThumbnailUpload,
  formStateRender,
  formState,
}) {
  const greyOut = () => {
    if (formState === "loading" || formState === "success") {
      return "greyed-out";
    } else {
      return "submit-button";
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <TextField id="gameTitle" label="Title" isrequired="true" />
      <ImageUploadField
        id="thumbnail"
        label="Thumbnail Image"
        title="maximum 4 MB"
        accept="image/png, image/jpeg"
        onChange={handleThumbnailUpload}
        thumbnailRef={thumbnailRef}
        isrequired="true"
      />
      <TextField
        id="buildLink"
        label="Itch.io or Build Link"
        placeholder="Optional, but highly encouraged"
      />
      <TextareaField
        id="gameDescription"
        label="Description"
        placeholder="Enter your game description. Optional"
      />
      <TextareaField
        id="gameCredits"
        label="Credits"
        placeholder="Who worked on your game? Optional"
      />
      <MultiFileInput additionalMediaRef={additionalMediaRef} />
      <div class="formTwoColumn">
        <TextField id="date" label="Date" placeholder="Fall 2022, Winter Game Jam 2023" />
        <TextField
          id="theme"
          label="Theme(s)"
          placeholder="Clumsy Pirates, Roll the Dice"
        />
      </div>
      <TextField
        id="user"
        label="Discord Username or UMN Email"
        placeholder="MooKorea#3998"
        pattern=".+(@umn\.edu|#\d{4})"
        isrequired="true"
      />
      <div>
        <input className={greyOut()} type="submit" id="fsubmit" name="fsubmit"></input>
      </div>
      {formStateRender}
    </form>
  );
}
