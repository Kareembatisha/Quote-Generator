import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import "./App.css";
import React, { useState } from "react";

const App = () => {
  const url = "https://api.quotable.io/random";
  let quoteData = {
    content: "Let time be your only competitor.",
    author: "Ahmed Saber",
  };
  const [quote, setQuote] = useState(quoteData);

  const generateQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setQuote(data);
      });
  };

  const copy = () => {
    navigator.clipboard.writeText(
      quote.author + " once said: " + quote.content
    );
    alert("copied");
  };

  const shareUrl = window.location.href;
  const shareText = `${quote.author} once said: "${quote.content}"`;

  return (
    <>
      <h1>Quote Generator React App</h1>
      <div className="container">
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        <div className="btns">
          <button onClick={copy} className="btn">
            Copy
          </button>
          <button onClick={generateQuote}>Generate Another Quote</button>
        </div>
      </div>
      <div className="social-buttons">
        <FacebookShareButton
          url={shareUrl}
          quote={shareText}
          className="social-button"
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton
          url={shareUrl}
          title={shareText}
          className="social-button"
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <WhatsappShareButton
          url={shareUrl}
          title={shareText}
          separator=":: "
          className="social-button"
        >
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
      </div>
    </>
  );
};

export default App;
