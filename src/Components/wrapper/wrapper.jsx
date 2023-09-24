import { useEffect, useState } from "react";
import "../../Components/wrapper/wrapper.scss";
import PropTypes from "prop-types"; 

 function Wrapper({ color, handleColor, handleQuote, quote }) {
  const [isHidden, setisHidden] = useState(false);

  const handleColorTransition = () => {
    setisHidden(!isHidden);
    handleColor();
    handleQuote();
  };
  useEffect(() => {
    setisHidden(true);
  }, [quote]);

  return (
    <div id="quote-box">
      <div id="quote-text" className={!isHidden ? "hidden" : "visible"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="iconQuote"
        >
          <path
            d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216z m256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"
            fill={color}
          />
        </svg>

        <span id="text" style={{ color: color }}>
          {quote.citacao}
        </span>
      </div>
      <div
        id="author"
        className={!isHidden ? "hidden" : "visible"}
        style={{
          color: color,
        }}
      >
        {quote.autor}
      </div>
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
    </div>
  );
}

Wrapper.PropTypes = {
  color: PropTypes.string.isRequired,
  handleColor: PropTypes.func.isRequired,
  quote: PropTypes.shape({
    citacao: PropTypes.string, 
    autor: PropTypes.string
  }), 
}

export default Wrapper;