import React from "react";
import PropTypes from "prop-types";
import "./author.scss"

export default function Author({ isHidden, color, children }) {
  return (
    <div
      id="author"
      className={!isHidden ? "hidden" : "visible"}
      style={{
        color: color,
      }}
    >
      {children}
    </div>
  );
}

Text.propTypes = {
  isHidden: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
