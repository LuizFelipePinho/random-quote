import { useEffect, useState } from "react";
import "../../Components/wrapper/wrapper.scss";
import PropTypes from "prop-types";
import Text from "../Text/Text";
import Author from "../Autor/Author";
import Buttons from "../Buttons/Buttons";

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
      <Text isHidden={isHidden} color={color}>
        {quote.citation}
      </Text>

      <Author isHidden={isHidden} color={color}>
        {quote.author}
      </Author>

      <Buttons color={color} handleColorTransition={handleColorTransition} />
    </div>
  );
}

Wrapper.propTypes = {
  color: PropTypes.string.isRequired,
  handleColor: PropTypes.func.isRequired,
  handleQuote: PropTypes.func.isRequired,
  quote: PropTypes.shape({
    citation: PropTypes.string,
    author: PropTypes.string,
  }),
};

export default Wrapper;
