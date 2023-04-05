import React, { useState, useRef } from "react";

import FormMain from "./FormMain";
import FormUserNotFound from "./FormUserNotFound";
import { Helmet } from "react-helmet";

export default function SubmitGames() {
  const formRef = useRef();
  const handleThumbnailUpload = (e) => {
    if (e.target.files[0].size > 4194304) {
      alert("File is too big!");
      e.target.value = "";
    }
  };

  const [formState, setFormState] = useState("default");
  const formStateRender = () => {
    switch (formState) {
      case "default":
        return;
      case "loading":
        return (
          <div className="loader-container">
            <div></div>
          </div>
        );
      case "notFound":
        return <FormUserNotFound />;
      case "success":
        return (
          <div>
            <p>Game submitted!</p>
          </div>
        );
    }
  };

  const thumbnailRef = useRef();
  const additionalMediaRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const selectAdditionalMedia = additionalMediaRef.current.querySelectorAll("input");
    const imageFiles = [thumbnailRef.current.files[0]];
    for (let i = 0; i < selectAdditionalMedia.length; i++) {
      if (selectAdditionalMedia[i].files[0] === undefined) continue;
      imageFiles.push(selectAdditionalMedia[i].files[0]);
    }
    setFormState("loading");
    const formData = new FormData(e.target);

    for (let i = 0; i < imageFiles.length; i++) {
      formData.append("image", imageFiles[i]);
      await fetch("https://api.imgur.com/3/image/", {
        method: "POST",
        headers: {
          Authorization: `Client-ID ${import.meta.env.VITE_IMGUR_API}`,
        },
        body: formData,
      })
        .then((data) => data.json())
        .then((data) => {
          if (i === 0) return formData.append("thumbnailImage", data.data.link);
          formData.append(`mediaImage${i}`, data.data.link);
        });
    }

    let formJSON = Object.fromEntries(formData);
    ["thumbnail", "image", "media1", "media2", "media3"].forEach(
      (e) => delete formJSON[e]
    );
    console.log(formJSON);

    const discordBotLink = import.meta.env.VITE_DISCORD_BOT_LINK;
    fetch(discordBotLink, {
      method: "POST",
      body: JSON.stringify(formJSON),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 400) {
          setFormState("notFound");
          throw new Error("User not found on VGDC Discord server!");
        }
        setFormState("success");
        return res.text();
      })
      .then((data) => console.log(data))
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="formWrapper">
      <Helmet>
        <title>Submit Games</title>
        <meta name="title" content="Submit Games" />
        <meta
          name="description"
          content="Submit your game to be featured on the website!"
        />
        <meta
          name="keywords"
          content="video game, club, University of Minnesota, student group, student, game, Minnesota, UMN, UMN student group, UMN club, art, programming, coding, game development, game dev, dev, submit, form"
        />
      </Helmet>
      <div>
        <h2>Submit your game!</h2>
        <FormMain
          formRef={formRef}
          thumbnailRef={thumbnailRef}
          additionalMediaRef={additionalMediaRef}
          handleSubmit={handleSubmit}
          handleThumbnailUpload={handleThumbnailUpload}
          formStateRender={formStateRender()}
          formState={formState}
        />
      </div>
    </div>
  );
}
