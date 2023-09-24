import React from "react";
import PropTypes from "prop-types";

export default function Buttons({ color, handleColorTransition }) {
  return (
    <div className="buttons">
      <a id="tweet-quote" href="#" style={{ backgroundColor: color }}>
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
  handleColorTransition: PropTypes.func.isRequired,
};
