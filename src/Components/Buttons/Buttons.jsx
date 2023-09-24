import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import replaceSpacesPercentage from "../../service/replaceSpacesPercentage";
export default function Buttons({ color, quote, handleColorTransition }) {

  const [quoteFormatted, setQuotoFormatted] = useState("");

  useEffect(() => {
    const citationTweet = replaceSpacesPercentage(quote); 
    setQuotoFormatted(citationTweet)
  }, [quote])
  

  return (
    <div className="buttons">
      <a 
      id="tweet-quote"
      href={`https://twitter.com/intent/tweet?text=${quoteFormatted}`}
      target="_blank" 
      style={{ backgroundColor: color }}>
        <img
          src="/imgs/twitter.svg"
          className="icon-twitter"
          alt="Twitter icon"
        />
      </a>
      <button
        id="new-quote"
        onClick={handleColorTransition}
        style={{ backgroundColor: color }}
      >
        Nova citação
      </button>
    </div>
  );
}

Text.propTypes = {
  color: PropTypes.string.isRequired,
  quote: PropTypes.object.isRequired, 
  handleColorTransition: PropTypes.func.isRequired,
};
