import React, { useState } from "react";
import TextField from "../components/FormFieldText";
import TextareaField from "../components/FormFieldTextarea";

export default function ContactUs() {
  const [formState, setFormState] = useState(false);

  const greyOut = () => {
    return formState ? "greyed-out" : "submit-button";
  };

  const formSubmit = (e) => {
    e.preventDefault();
    setFormState(true);
    const formData = new FormData(e.target);
    let formJSON = Object.fromEntries(formData);

    const discordBotLink = "https://Crockie-Bot.mookorea.repl.co/postReqContactUs";
    fetch(discordBotLink, {
      method: "POST",
      body: JSON.stringify(formJSON),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.text();
      })
      .then((data) => console.log(data));
  };

  const renderSubmit = () => {
    if (formState) {
      return <p>Message sent! Just join the discord lol</p>;
    }
  };

  return (
    <div className="formWrapper">
      <div>
        <h2>Contact Us</h2>
        <form onSubmit={formSubmit}>
          <TextField id="subject" label="Subject" isrequired="true" />
          <TextField id="name" label="Name" isrequired="true" />
          <TextareaField
            id="message"
            label="Message"
            placeholder="Enter message"
            isrequired="true"
          />
          <TextField id="email" label="Email" isrequired="true" />
          <div>
            <input
              className={greyOut()}
              type="submit"
              id="fsubmit"
              name="fsubmit"
            ></input>
          </div>
          {renderSubmit()}
        </form>
      </div>
    </div>
  );
}
