import "../../Components/wrapper/wrapper.scss";

export default function Wrapper({ color }) {
  return (
    <div id="quote-box" >
      <div id="quote-text">
        {/* <img src="left-quote.png" alt="image quote" className="iconQuote" /> */}
        {/* <FontAwesomeIcon icon="fa-solid fa-quote-left" /> */}
        <img src="imgs/quote.svg" alt="image quote"  className="iconQuote"/>
        <span id="text">Wlorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        eveniet nihil nobis m veniet nihil nobis m
        </span>
      </div>
      <div id="author">lorem lorem </div>
      <div className="buttons">
        <a id="tweet-quote" href="#"><img src="imgs/twitter.svg" className="icon-twitter" /></a>
        <button id="new-quote">Nova citação </button>
      </div>
    </div>
  );
}
